# 🚀 Guia de Deploy - Portfólio Lucas

Este guia mostra como publicar seu portfólio online de forma gratuita e profissional.

## 📋 Pré-requisitos

- ✅ Conta no GitHub (já tem: `lucasrocha0402`)
- ✅ Código commitado e enviado para o GitHub
- ✅ Node.js instalado (já tem)

---

## 🎯 Opção 1: Vercel (Recomendado) ⭐

A Vercel é a melhor opção para projetos Next.js. É gratuita, rápida e fácil de usar.

### Passo 1: Preparar o Código

```bash
# 1. Certifique-se de que está no diretório do projeto
cd C:\Users\lukas\OneDrive\Área de Trabalho\desenvolvimento_lucas\portifolio

# 2. Verifique se há alterações não commitadas
git status

# 3. Se houver alterações, faça commit
git add .
git commit -m "Preparar para deploy"
git push origin main
```

### Passo 2: Criar Conta na Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar seus repositórios

### Passo 3: Deploy Automático

1. No dashboard da Vercel, clique em **"Add New Project"**
2. Selecione o repositório: `portifolio-lucas`
3. A Vercel detectará automaticamente que é um projeto Next.js
4. Clique em **"Deploy"**

**Pronto!** Seu portfólio estará online em ~2 minutos! 🎉

### Passo 4: Configurar Domínio Personalizado (Opcional)

1. No projeto na Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `lucasdev.com.br`)
3. Siga as instruções para configurar o DNS

---

## 🌐 Opção 2: Netlify

Alternativa gratuita e fácil de usar.

### Passo 1: Criar Conta

1. Acesse: https://www.netlify.com
2. Clique em **"Sign up"** → **"GitHub"**
3. Autorize o acesso

### Passo 2: Deploy

1. Clique em **"Add new site"** → **"Import an existing project"**
2. Selecione **"GitHub"** e escolha `portifolio-lucas`
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Clique em **"Deploy site"**

### Passo 3: Configurar Next.js no Netlify

Crie um arquivo `netlify.toml` na raiz do projeto:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 📦 Opção 3: GitHub Pages (Alternativa)

Para usar GitHub Pages com Next.js, você precisa fazer build estático.

### Passo 1: Configurar Next.js para Export Estático

1. Edite `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
```

2. Adicione script no `package.json`:

```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

### Passo 2: Deploy

```bash
# Build estático
npm run build

# O build gerará uma pasta 'out'
# Faça commit e push
git add out
git commit -m "Deploy para GitHub Pages"
git push origin main
```

### Passo 3: Configurar GitHub Pages

1. No GitHub, vá em **Settings** → **Pages**
2. Em **Source**, escolha a branch `main` e pasta `/out`
3. Salve

---

## 🔧 Configurações Adicionais

### Variáveis de Ambiente (se necessário)

Se você usar variáveis de ambiente:

1. **Vercel**: Settings → Environment Variables
2. **Netlify**: Site settings → Environment variables

### Build e Deploy Manual

Se preferir fazer deploy manual:

```bash
# 1. Build do projeto
npm run build

# 2. Testar localmente em produção
npm start

# 3. Se tudo estiver ok, faça push
git add .
git commit -m "Deploy"
git push origin main
```

---

## ✅ Checklist Antes do Deploy

- [ ] Todos os links estão funcionando
- [ ] Imagens estão carregando corretamente
- [ ] Formulário de contato está configurado (se tiver backend)
- [ ] Links do GitHub/LinkedIn estão corretos
- [ ] Informações pessoais estão atualizadas
- [ ] Projetos têm links corretos
- [ ] Teste local: `npm run build && npm start`

---

## 🐛 Solução de Problemas

### Erro: "Build Failed"

```bash
# Limpe o cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

### Erro: "Module not found"

Verifique se todas as dependências estão no `package.json`:

```bash
npm install --save [nome-do-pacote]
```

### Imagens não carregam

Verifique se os domínios estão configurados em `next.config.mjs`:

```javascript
images: {
  domains: ['github.com', 'avatars.githubusercontent.com'],
}
```

---

## 📊 Monitoramento

### Vercel Analytics (Gratuito)

1. No dashboard da Vercel
2. Vá em **Analytics**
3. Ative o analytics gratuito

### Google Analytics (Opcional)

Adicione no `src/app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🎉 Pronto!

Após o deploy, seu portfólio estará acessível em:

- **Vercel**: `https://portifolio-lucas.vercel.app`
- **Netlify**: `https://portifolio-lucas.netlify.app`
- **GitHub Pages**: `https://lucasrocha0402.github.io/portifolio-lucas`

---

## 📝 Próximos Passos

1. ✅ Compartilhe o link no LinkedIn
2. ✅ Adicione no seu perfil do GitHub
3. ✅ Atualize seu CV com o link
4. ✅ Compartilhe nas redes sociais

---

## 💡 Dicas

- **Atualizações automáticas**: Toda vez que você fizer `git push`, o site será atualizado automaticamente
- **Preview de PRs**: Vercel cria previews automáticos para cada Pull Request
- **Performance**: Vercel otimiza automaticamente imagens e assets
- **HTTPS**: Todos os deploys são automaticamente HTTPS

---

**Boa sorte com o deploy! 🚀**

