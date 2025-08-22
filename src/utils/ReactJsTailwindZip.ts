import { PROJECT_NAMES } from "@/constants/ProjectNames";
import JSZip from "jszip";

export const getReactJsTailwindZip = (appHtmlContent: any) => {
  const zip = new JSZip();
  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/public/index.html`,
    `<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>React Tailwind App</title>
</head>
<body>
  <div id=\"root\"></div>
</body>
</html>`
  );

  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/src/index.js`,
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`
  );

  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/src/App.js`,
    `export default function App() {
  return (
    <div className=\"p-4\">
      ${appHtmlContent}
    </div>
  );
}`
  );

  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/src/index.css`,
    `@tailwind base;
@tailwind components;
@tailwind utilities;`
  );

  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/tailwind.config.js`,
    `module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  );

  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/postcss.config.js`,
    `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  );

  zip.file(
    `${PROJECT_NAMES.ReactTailwindProjectName}/package.json`,
    `{
  "name": "my-react-tailwind-project",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}`
  );
  return zip.generateAsync({ type: "blob" });
};
