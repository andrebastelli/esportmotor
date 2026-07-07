# Consórcio Honda Esport Motor

Simulador de consórcio de motos Honda (CG, Biz, CB, Hornet, ADV, Africa Twin e mais) da Esport Motor — Rio Claro e São Carlos.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- React Router
- React Hook Form + Zod

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm install
npm run build
```

Os arquivos finais são gerados em `dist/`.

## Deploy no Vercel

1. Suba este repositório para o GitHub.
2. Importe o repositório no Vercel.
3. Configurações padrão (detectadas automaticamente):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Não é necessário configurar nenhuma variável de ambiente (veja `.env.example`).

## Variáveis de ambiente

Nenhuma é obrigatória. Consulte `.env.example` para variáveis opcionais reservadas para uso futuro.
