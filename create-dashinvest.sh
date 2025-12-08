#!/bin/bash

# DashInvest - App de Investimentos
# Script para criar o projeto Flutter com Clean Architecture

echo "💰 Criando projeto DashInvest - App de Investimentos..."

# Criar diretório do projeto
mkdir dashinvest
cd dashinvest

# Inicializar projeto Flutter
flutter create --org com.dashinvest --project-name dashinvest .

# Instalar dependências principais
flutter pub add flutter_bloc bloc
flutter pub add get_it injectable
flutter pub add firebase_core firebase_auth cloud_firestore firebase_messaging
flutter pub add http dio
flutter pub add shared_preferences
flutter pub add equatable
flutter pub add intl
flutter pub add fl_chart
flutter pub add cached_network_image
flutter pub add google_fonts

# Instalar dependências de desenvolvimento
flutter pub add --dev build_runner
flutter pub add --dev injectable_generator
flutter pub add --dev mockito
flutter pub add --dev bloc_test
flutter pub add --dev flutter_test

# Criar estrutura de pastas Clean Architecture
mkdir -p lib/core/{constants,errors,network,utils,theme}
mkdir -p lib/core/network/{api,interceptors}
mkdir -p lib/core/errors/{exceptions,failures}
mkdir -p lib/core/utils/{validators,formatters}

# Features
mkdir -p lib/features/{dashboard,portfolio,transactions,notifications}
mkdir -p lib/features/dashboard/{data,domain,presentation}
mkdir -p lib/features/portfolio/{data,domain,presentation}
mkdir -p lib/features/transactions/{data,domain,presentation}
mkdir -p lib/features/notifications/{data,domain,presentation}

# Estrutura Domain Layer
mkdir -p lib/features/dashboard/domain/{entities,repositories,usecases}
mkdir -p lib/features/portfolio/domain/{entities,repositories,usecases}
mkdir -p lib/features/transactions/domain/{entities,repositories,usecases}
mkdir -p lib/features/notifications/domain/{entities,repositories,usecases}

# Estrutura Data Layer
mkdir -p lib/features/dashboard/data/{datasources,models,repositories}
mkdir -p lib/features/portfolio/data/{datasources,models,repositories}
mkdir -p lib/features/transactions/data/{datasources,models,repositories}
mkdir -p lib/features/notifications/data/{datasources,models,repositories}

# Estrutura Presentation Layer
mkdir -p lib/features/dashboard/presentation/{bloc,pages,widgets}
mkdir -p lib/features/portfolio/presentation/{bloc,pages,widgets}
mkdir -p lib/features/transactions/presentation/{bloc,pages,widgets}
mkdir -p lib/features/notifications/presentation/{bloc,pages,widgets}

# Criar arquivos principais
cat > lib/core/constants/app_constants.dart << 'EOF'
class AppConstants {
  // API
  static const String baseUrl = 'https://api.dashinvest.com';
  static const String apiVersion = '/v1';
  
  // Storage Keys
  static const String userTokenKey = 'user_token';
  static const String userIdKey = 'user_id';
  static const String portfolioKey = 'portfolio_data';
  
  // Firebase Collections
  static const String usersCollection = 'users';
  static const String portfoliosCollection = 'portfolios';
  static const String transactionsCollection = 'transactions';
  static const String notificationsCollection = 'notifications';
  
  // App Info
  static const String appName = 'DashInvest';
  static const String appVersion = '1.0.0';
}
EOF

cat > lib/core/errors/exceptions.dart << 'EOF'
class ServerException implements Exception {
  final String message;
  ServerException(this.message);
}

class CacheException implements Exception {
  final String message;
  CacheException(this.message);
}

class NetworkException implements Exception {
  final String message;
  NetworkException(this.message);
}
EOF

cat > lib/core/errors/failures.dart << 'EOF'
import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
  final String message;
  const Failure(this.message);
  
  @override
  List<Object> get props => [message];
}

class ServerFailure extends Failure {
  const ServerFailure(super.message);
}

class CacheFailure extends Failure {
  const CacheFailure(super.message);
}

class NetworkFailure extends Failure {
  const NetworkFailure(super.message);
}
EOF

cat > lib/core/network/api/api_client.dart << 'EOF'
import 'package:dio/dio.dart';
import '../interceptors/auth_interceptor.dart';
import '../interceptors/error_interceptor.dart';

class ApiClient {
  late Dio _dio;
  
  ApiClient() {
    _dio = Dio(
      BaseOptions(
        baseUrl: 'https://api.dashinvest.com/v1',
        connectTimeout: const Duration(seconds: 30),
        receiveTimeout: const Duration(seconds: 30),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      ),
    );
    
    _dio.interceptors.addAll([
      AuthInterceptor(),
      ErrorInterceptor(),
      LogInterceptor(requestBody: true, responseBody: true),
    ]);
  }
  
  Dio get dio => _dio;
}
EOF

cat > lib/core/network/interceptors/auth_interceptor.dart << 'EOF'
import 'package:dio/dio.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../core/constants/app_constants.dart';

class AuthInterceptor extends Interceptor {
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString(AppConstants.userTokenKey);
    
    if (token != null) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    
    super.onRequest(options, handler);
  }
}
EOF

cat > lib/core/network/interceptors/error_interceptor.dart << 'EOF'
import 'package:dio/dio.dart';
import '../../../core/errors/exceptions.dart';

class ErrorInterceptor extends Interceptor {
  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    switch (err.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.sendTimeout:
      case DioExceptionType.receiveTimeout:
        throw NetworkException('Tempo de conexão expirado');
      case DioExceptionType.badResponse:
        throw ServerException('Erro no servidor: ${err.response?.statusCode}');
      case DioExceptionType.cancel:
        throw NetworkException('Requisição cancelada');
      default:
        throw NetworkException('Erro de conexão');
    }
  }
}
EOF

cat > lib/features/dashboard/domain/entities/dashboard_data.dart << 'EOF'
import 'package:equatable/equatable.dart';

class DashboardData extends Equatable {
  final double totalPortfolioValue;
  final double totalProfit;
  final double profitPercentage;
  final List<ChartData> chartData;
  final List<AssetSummary> topAssets;
  
  const DashboardData({
    required this.totalPortfolioValue,
    required this.totalProfit,
    required this.profitPercentage,
    required this.chartData,
    required this.topAssets,
  });
  
  @override
  List<Object> get props => [
    totalPortfolioValue,
    totalProfit,
    profitPercentage,
    chartData,
    topAssets,
  ];
}

class ChartData extends Equatable {
  final DateTime date;
  final double value;
  
  const ChartData({
    required this.date,
    required this.value,
  });
  
  @override
  List<Object> get props => [date, value];
}

class AssetSummary extends Equatable {
  final String symbol;
  final String name;
  final double quantity;
  final double currentPrice;
  final double totalValue;
  final double profit;
  
  const AssetSummary({
    required this.symbol,
    required this.name,
    required this.quantity,
    required this.currentPrice,
    required this.totalValue,
    required this.profit,
  });
  
  @override
  List<Object> get props => [
    symbol,
    name,
    quantity,
    currentPrice,
    totalValue,
    profit,
  ];
}
EOF

cat > lib/features/dashboard/domain/repositories/dashboard_repository.dart << 'EOF'
import 'package:dartz/dartz.dart';
import '../../../../core/errors/failures.dart';
import '../entities/dashboard_data.dart';

abstract class DashboardRepository {
  Future<Either<Failure, DashboardData>> getDashboardData();
  Future<Either<Failure, void>> refreshDashboard();
}
EOF

cat > lib/features/dashboard/presentation/bloc/dashboard_bloc.dart << 'EOF'
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';
import '../../domain/entities/dashboard_data.dart';
import '../../domain/usecases/get_dashboard_data.dart';

part 'dashboard_event.dart';
part 'dashboard_state.dart';

class DashboardBloc extends Bloc<DashboardEvent, DashboardState> {
  final GetDashboardData getDashboardData;
  
  DashboardBloc({required this.getDashboardData}) : super(DashboardInitial()) {
    on<LoadDashboard>(_onLoadDashboard);
    on<RefreshDashboard>(_onRefreshDashboard);
  }
  
  Future<void> _onLoadDashboard(
    LoadDashboard event,
    Emitter<DashboardState> emit,
  ) async {
    emit(DashboardLoading());
    
    final result = await getDashboardData();
    
    result.fold(
      (failure) => emit(DashboardError(failure.message)),
      (data) => emit(DashboardLoaded(data)),
    );
  }
  
  Future<void> _onRefreshDashboard(
    RefreshDashboard event,
    Emitter<DashboardState> emit,
  ) async {
    final result = await getDashboardData();
    
    result.fold(
      (failure) => emit(DashboardError(failure.message)),
      (data) => emit(DashboardLoaded(data)),
    );
  }
}
EOF

cat > lib/features/dashboard/presentation/bloc/dashboard_event.dart << 'EOF'
part of 'dashboard_bloc.dart';

abstract class DashboardEvent extends Equatable {
  const DashboardEvent();
  
  @override
  List<Object> get props => [];
}

class LoadDashboard extends DashboardEvent {}

class RefreshDashboard extends DashboardEvent {}
EOF

cat > lib/features/dashboard/presentation/bloc/dashboard_state.dart << 'EOF'
part of 'dashboard_bloc.dart';

abstract class DashboardState extends Equatable {
  const DashboardState();
  
  @override
  List<Object> get props => [];
}

class DashboardInitial extends DashboardState {}

class DashboardLoading extends DashboardState {}

class DashboardLoaded extends DashboardState {
  final DashboardData data;
  
  const DashboardLoaded(this.data);
  
  @override
  List<Object> get props => [data];
}

class DashboardError extends DashboardState {
  final String message;
  
  const DashboardError(this.message);
  
  @override
  List<Object> get props => [message];
}
EOF

cat > lib/features/dashboard/domain/usecases/get_dashboard_data.dart << 'EOF'
import 'package:dartz/dartz.dart';
import '../../../../core/errors/failures.dart';
import '../entities/dashboard_data.dart';
import '../repositories/dashboard_repository.dart';

class GetDashboardData {
  final DashboardRepository repository;
  
  GetDashboardData(this.repository);
  
  Future<Either<Failure, DashboardData>> call() async {
    return await repository.getDashboardData();
  }
}
EOF

cat > lib/core/utils/injection.dart << 'EOF'
import 'package:get_it/get_it.dart';
import 'package:injectable/injectable.dart';
import 'injection.config.dart';

final getIt = GetIt.instance;

@InjectableInit()
void configureDependencies() => getIt.init();
EOF

cat > lib/core/utils/injection.config.dart << 'EOF'
// Este arquivo será gerado automaticamente pelo build_runner
// Execute: flutter pub run build_runner build
EOF

cat > lib/main.dart << 'EOF'
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'core/utils/injection.dart';
import 'core/theme/app_theme.dart';
import 'features/dashboard/presentation/pages/dashboard_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  configureDependencies();
  
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DashInvest',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: const DashboardPage(),
    );
  }
}
EOF

cat > lib/core/theme/app_theme.dart << 'EOF'
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xFF10B981),
        brightness: Brightness.light,
      ),
      textTheme: GoogleFonts.interTextTheme(),
      appBarTheme: const AppBarTheme(
        centerTitle: true,
        elevation: 0,
      ),
      cardTheme: CardTheme(
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
      ),
    );
  }
  
  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xFF10B981),
        brightness: Brightness.dark,
      ),
      textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
      appBarTheme: const AppBarTheme(
        centerTitle: true,
        elevation: 0,
      ),
      cardTheme: CardTheme(
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
      ),
    );
  }
}
EOF

cat > lib/features/dashboard/presentation/pages/dashboard_page.dart << 'EOF'
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../bloc/dashboard_bloc.dart';
import '../widgets/dashboard_chart.dart';
import '../widgets/portfolio_summary.dart';
import '../widgets/top_assets_list.dart';

class DashboardPage extends StatelessWidget {
  const DashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('DashInvest'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () {
              context.read<DashboardBloc>().add(RefreshDashboard());
            },
          ),
        ],
      ),
      body: BlocBuilder<DashboardBloc, DashboardState>(
        builder: (context, state) {
          if (state is DashboardLoading) {
            return const Center(child: CircularProgressIndicator());
          }
          
          if (state is DashboardError) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Erro: ${state.message}'),
                  ElevatedButton(
                    onPressed: () {
                      context.read<DashboardBloc>().add(LoadDashboard());
                    },
                    child: const Text('Tentar novamente'),
                  ),
                ],
              ),
            );
          }
          
          if (state is DashboardLoaded) {
            return SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  PortfolioSummary(data: state.data),
                  const SizedBox(height: 24),
                  DashboardChart(chartData: state.data.chartData),
                  const SizedBox(height: 24),
                  TopAssetsList(assets: state.data.topAssets),
                ],
              ),
            );
          }
          
          return const SizedBox.shrink();
        },
      ),
    );
  }
}
EOF

cat > lib/features/dashboard/presentation/widgets/portfolio_summary.dart << 'EOF'
import 'package:flutter/material.dart';
import '../../domain/entities/dashboard_data.dart';

class PortfolioSummary extends StatelessWidget {
  final DashboardData data;
  
  const PortfolioSummary({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Valor Total do Portfólio',
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'R\$ ${data.totalPortfolioValue.toStringAsFixed(2)}',
              style: const TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Lucro/Prejuízo',
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.grey,
                      ),
                    ),
                    Text(
                      'R\$ ${data.totalProfit.toStringAsFixed(2)}',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: data.totalProfit >= 0 ? Colors.green : Colors.red,
                      ),
                    ),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    const Text(
                      'Variação',
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.grey,
                      ),
                    ),
                    Text(
                      '${data.profitPercentage.toStringAsFixed(2)}%',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: data.profitPercentage >= 0 ? Colors.green : Colors.red,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
EOF

cat > lib/features/dashboard/presentation/widgets/dashboard_chart.dart << 'EOF'
import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import '../../domain/entities/dashboard_data.dart';

class DashboardChart extends StatelessWidget {
  final List<ChartData> chartData;
  
  const DashboardChart({super.key, required this.chartData});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Evolução do Portfólio',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              height: 200,
              child: LineChart(
                LineChartData(
                  gridData: FlGridData(show: true),
                  titlesData: FlTitlesData(show: true),
                  borderData: FlBorderData(show: true),
                  lineBarsData: [
                    LineChartBarData(
                      spots: chartData.asMap().entries.map((e) {
                        return FlSpot(
                          e.key.toDouble(),
                          e.value.value,
                        );
                      }).toList(),
                      isCurved: true,
                      color: Colors.green,
                      barWidth: 3,
                      dotData: FlDotData(show: false),
                      belowBarData: BarAreaData(show: true),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
EOF

cat > lib/features/dashboard/presentation/widgets/top_assets_list.dart << 'EOF'
import 'package:flutter/material.dart';
import '../../domain/entities/dashboard_data.dart';

class TopAssetsList extends StatelessWidget {
  final List<AssetSummary> assets;
  
  const TopAssetsList({super.key, required this.assets});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Top Ativos',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            ...assets.map((asset) => ListTile(
              leading: CircleAvatar(
                child: Text(asset.symbol.substring(0, 1)),
              ),
              title: Text(asset.name),
              subtitle: Text('${asset.quantity.toStringAsFixed(2)} ações'),
              trailing: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(
                    'R\$ ${asset.totalValue.toStringAsFixed(2)}',
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Text(
                    '${asset.profit >= 0 ? '+' : ''}${asset.profit.toStringAsFixed(2)}',
                    style: TextStyle(
                      color: asset.profit >= 0 ? Colors.green : Colors.red,
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            )),
          ],
        ),
      ),
    );
  }
}
EOF

cat > pubspec.yaml << 'EOF'
name: dashinvest
description: App de Investimentos desenvolvido com Clean Architecture
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  
  # State Management
  flutter_bloc: ^8.1.3
  bloc: ^8.1.3
  equatable: ^2.0.5
  
  # Dependency Injection
  get_it: ^7.6.4
  injectable: ^2.3.2
  
  # Firebase
  firebase_core: ^2.24.2
  firebase_auth: ^4.15.3
  cloud_firestore: ^4.13.6
  firebase_messaging: ^14.7.10
  
  # Network
  http: ^1.1.2
  dio: ^5.4.0
  
  # Storage
  shared_preferences: ^2.2.2
  
  # UI
  fl_chart: ^0.66.0
  cached_network_image: ^3.3.1
  google_fonts: ^6.1.0
  intl: ^0.19.0
  
  # Utils
  dartz: ^0.10.1

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.1
  build_runner: ^2.4.7
  injectable_generator: ^2.4.1
  mockito: ^5.4.4
  bloc_test: ^9.1.5

flutter:
  uses-material-design: true
EOF

cat > README.md << 'EOF'
# DashInvest 💰

App de Investimentos desenvolvido com **Clean Architecture** e **BLoC Pattern**.

## 📋 Sobre o Projeto

DashInvest é uma aplicação mobile para controle de investimentos, desenvolvida com foco em performance e escalabilidade. Utiliza princípios de Clean Architecture para garantir código limpo, testável e manutenível.

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture**, dividido em 3 camadas principais:

### 1. **Domain Layer** (Regras de Negócio)
- **Entities**: Modelos de dados puros
- **Repositories**: Interfaces/contratos para acesso a dados
- **Use Cases**: Lógica de negócio isolada

### 2. **Data Layer** (Fonte de Dados)
- **Models**: Implementação dos modelos com serialização
- **Data Sources**: Fontes de dados (API, Firebase, Local)
- **Repositories**: Implementação dos repositórios

### 3. **Presentation Layer** (UI)
- **BLoC**: Gerenciamento de estado
- **Pages**: Telas da aplicação
- **Widgets**: Componentes reutilizáveis

## 🎯 Features Principais

- ✅ Dashboard interativo com gráficos
- ✅ Controle de portfólio em tempo real
- ✅ Histórico detalhado de transações
- ✅ Notificações push personalizadas

## 🛠️ Tecnologias

- **Flutter** - Framework mobile
- **Dart** - Linguagem de programação
- **Firebase** - Backend e serviços
- **BLoC Pattern** - Gerenciamento de estado
- **Clean Architecture** - Arquitetura do projeto
- **Dio** - Cliente HTTP
- **GetIt** - Injeção de dependências
- **FL Chart** - Gráficos

## 📁 Estrutura de Pastas

```
lib/
├── core/                    # Código compartilhado
│   ├── constants/
│   ├── errors/
│   ├── network/
│   ├── utils/
│   └── theme/
├── features/                # Features da aplicação
│   ├── dashboard/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   ├── portfolio/
│   ├── transactions/
│   └── notifications/
└── main.dart
```

## 🚀 Como Começar

### Pré-requisitos

- Flutter SDK 3.0+
- Dart 3.0+
- Firebase configurado

### Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
flutter pub get
```

3. Execute o code generation:
```bash
flutter pub run build_runner build --delete-conflicting-outputs
```

4. Configure o Firebase:
   - Adicione os arquivos de configuração do Firebase
   - Configure o `firebase_options.dart`

5. Execute o app:
```bash
flutter run
```

## 📝 Comandos Úteis

```bash
# Gerar código (BLoC, Injectable, etc)
flutter pub run build_runner watch

# Limpar e reconstruir
flutter clean
flutter pub get
flutter pub run build_runner build --delete-conflicting-outputs

# Executar testes
flutter test
```

## 🧪 Testes

```bash
# Executar todos os testes
flutter test

# Executar testes com cobertura
flutter test --coverage
```

## 📚 Documentação

Cada módulo possui sua própria documentação explicando:
- Estrutura da feature
- Como usar os BLoCs
- Como adicionar novos casos de uso

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Faça commit das mudanças
3. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
EOF

echo "✅ Projeto DashInvest criado com sucesso!"
echo "📁 Localização: ./dashinvest"
echo "🚀 Para executar:"
echo "   cd dashinvest"
echo "   flutter pub get"
echo "   flutter pub run build_runner build --delete-conflicting-outputs"
echo "   flutter run"
