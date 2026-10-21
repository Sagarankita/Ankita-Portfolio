# Deploy Ankita’s portfolio on Vercel

This project is ready for Vercel. `vercel.json` specifies the Vite framework, `npm run build`, and `dist` output. The custom build also exports the six separate inner pages. No environment variables or backend are needed.

## Deploy from your computer

Open a terminal inside the extracted `ankita-profile` folder, then run:

```sh
npm install
npx vercel login
npx vercel --prod
```

Choose your own Vercel account/team and create a new project when prompted. Use the current folder as the project root. Keep the build settings supplied by `vercel.json`. Vercel will return the live URL after deployment.

## Deploy through GitHub

1. Create a new GitHub repository for this portfolio.
2. Upload the contents of the `ankita-profile` folder, including `src`, `public`, `scripts`, `package.json`, `package-lock.json`, `index.html`, and `vercel.json`. Do not upload `node_modules`.
3. Open https://vercel.com/new, sign in, and import that repository.
4. Use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Root directory | Folder containing `package.json` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Environment variables | None |

5. Click Deploy and wait for the deployment to finish.

Do not import the Urban Health Intelligence System repository for this portfolio; that is a separate application. Use a repository containing this portfolio’s files.

## Verify the live site

Open `/`, `/projects/`, `/achievements/`, `/about/`, `/beyond-code/`, `/journal/`, and `/contact/` directly, then refresh each page. Check `/resume.pdf`, artwork images, project dialogs, and journal articles.

Separate route folders are generated during the build, so this project does not need a catch-all rewrite to the home page. Keep `scripts/export-pages.mjs` in the repository.

Vercel documentation: https://vercel.com/docs/frameworks/frontend/vite and https://vercel.com/docs/cli/deploy .
