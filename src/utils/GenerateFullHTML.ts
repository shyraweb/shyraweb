import { SelectedComponent } from "@/types/editor";

export const generateFullHtml = (
  selectedComponents: SelectedComponent[]
): string => {
  const headContent = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Website Preview</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; }
        .full-preview-container > div:not(:last-child) { margin-bottom: 0rem; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    `;

  const bodyContent = selectedComponents
    .map((comp) => comp.htmlContent)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${headContent}
</head>
<body>
  <div class="full-preview-container">
    ${bodyContent}
  </div>
</body>
</html>`;
};
