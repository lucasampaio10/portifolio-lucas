# Script de Deploy - Portfólio Lucas
# Este script prepara o projeto para deploy na Vercel

Write-Host "🚀 Preparando projeto para deploy..." -ForegroundColor Cyan

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na raiz do projeto!" -ForegroundColor Red
    exit 1
}

# Verificar se o Git está inicializado
if (-not (Test-Path ".git")) {
    Write-Host "❌ Erro: Git não está inicializado!" -ForegroundColor Red
    Write-Host "Execute: git init" -ForegroundColor Yellow
    exit 1
}

# Verificar status do Git
Write-Host "`n📋 Verificando status do Git..." -ForegroundColor Yellow
$gitStatus = git status --porcelain

if ($gitStatus) {
    Write-Host "`n⚠️  Há alterações não commitadas:" -ForegroundColor Yellow
    Write-Host $gitStatus
    
    $commit = Read-Host "`nDeseja fazer commit? (s/n)"
    if ($commit -eq "s" -or $commit -eq "S") {
        $message = Read-Host "Digite a mensagem do commit (ou pressione Enter para usar padrão)"
        if ([string]::IsNullOrWhiteSpace($message)) {
            $message = "Preparar para deploy"
        }
        
        git add .
        git commit -m $message
        Write-Host "✅ Commit realizado!" -ForegroundColor Green
    }
}

# Verificar se há commits para push
$branch = git branch --show-current
$remote = git remote get-url origin 2>$null

if ($remote) {
    Write-Host "`n📤 Verificando se há commits para enviar..." -ForegroundColor Yellow
    
    $ahead = git rev-list --count origin/$branch..HEAD 2>$null
    if ($ahead -gt 0) {
        Write-Host "Há $ahead commit(s) para enviar" -ForegroundColor Yellow
        
        $push = Read-Host "Deseja fazer push? (s/n)"
        if ($push -eq "s" -or $push -eq "S") {
            git push origin $branch
            Write-Host "✅ Push realizado!" -ForegroundColor Green
        }
    } else {
        Write-Host "✅ Tudo está sincronizado!" -ForegroundColor Green
    }
} else {
    Write-Host "`n⚠️  Nenhum remote configurado" -ForegroundColor Yellow
    Write-Host "Configure o remote com:" -ForegroundColor Yellow
    Write-Host "  git remote add origin https://github.com/lucasrocha0402/portifolio-lucas.git" -ForegroundColor Cyan
}

# Testar build
Write-Host "`n🔨 Testando build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build realizado com sucesso!" -ForegroundColor Green
    
    Write-Host "`n📝 Próximos passos:" -ForegroundColor Cyan
    Write-Host "1. Acesse: https://vercel.com/signup" -ForegroundColor White
    Write-Host "2. Faça login com GitHub" -ForegroundColor White
    Write-Host "3. Clique em 'Add New Project'" -ForegroundColor White
    Write-Host "4. Selecione o repositório: portifolio-lucas" -ForegroundColor White
    Write-Host "5. Clique em 'Deploy'" -ForegroundColor White
    Write-Host "`n🎉 Pronto! Seu site estará online em ~2 minutos!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro no build! Corrija os erros antes de fazer deploy." -ForegroundColor Red
    exit 1
}

Write-Host "`n✨ Script concluído!" -ForegroundColor Green

