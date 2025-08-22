import { PROJECT_NAMES } from "@/constants/ProjectNames";
import JSZip from "jszip";

export const getNextJsTailwindZip = (appHtmlContent: any) => {
  const zip = new JSZip();
  const projectName = "my-nextjs-tailwind-project";
  zip.file(
    `${PROJECT_NAMES.NextTailwindProjectName}/app/page.tsx`,
    `export default function Home() {
      return (
        <main className=\"p-4\">
          ${appHtmlContent}
        </main>
      );
    }`
  );

  zip.file(
    `${PROJECT_NAMES.NextTailwindProjectName}/tailwind.config.js`,
    `module.exports = {
      content: ['./app/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    }`
  );

  zip.file(
    `${PROJECT_NAMES.NextTailwindProjectName}/postcss.config.js`,
    `module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }`
  );

  zip.file(
    `${PROJECT_NAMES.NextTailwindProjectName}/app/globals.css`,
    `@tailwind base;
    @tailwind components;
    @tailwind utilities;`
  );

  zip.file(
    `${PROJECT_NAMES.NextTailwindProjectName}/package.json`,
    `{
      "name": "my-nextjs-tailwind-project",
      "version": "0.1.0",
      "private": true,
      "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
      },
      "dependencies": {
        "react": "^18",
        "react-dom": "^18",
        "next": "14.x.x"
      },
      "devDependencies": {
        "typescript": "^5",
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "autoprefixer": "^10.0.1",
        "postcss": "^8",
        "tailwindcss": "^3.3.0",
        "eslint": "^8",
        "eslint-config-next": "14.x.x"
      }
    }`
  );

  return zip.generateAsync({ type: "blob" });
};
