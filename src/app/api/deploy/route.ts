// app/api/github-deploy/route.ts
import { NextRequest, NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com";

export async function POST(req: NextRequest) {
  const { repoName, htmlContent } = await req.json();

  const username = "khushbu-asati";
  const token = "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";
  const branch = "main";
  const encodedContent = Buffer.from(htmlContent).toString("base64");

  try {
    // Step 1: Create GitHub Repository
    const createRepoRes = await fetch(`${GITHUB_API}/user/repos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        name: repoName,
        description: "Created via API from web builder",
        private: false,
        auto_init: true,
      }),
    });

    if (!createRepoRes.ok) {
      const error = await createRepoRes.json();
      return NextResponse.json({ error, step: "repo-creation" }, { status: createRepoRes.status });
    }

    // Step 2: Upload index.html
    const uploadFileRes = await fetch(
      `${GITHUB_API}/repos/${username}/${repoName}/contents/index.html`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Upload index.html",
          content: encodedContent,
          branch,
        }),
      }
    );

    if (!uploadFileRes.ok) {
      const error = await uploadFileRes.json();
      return NextResponse.json({ error, step: "file-upload" }, { status: uploadFileRes.status });
    }

    // Step 3: Enable GitHub Pages
    const enablePagesRes = await fetch(
      `${GITHUB_API}/repos/${username}/${repoName}/pages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: {
            branch,
            path: "/",
          },
        }),
      }
    );

    if (!enablePagesRes.ok && enablePagesRes.status !== 409) {
      const error = await enablePagesRes.json();
      return NextResponse.json({ error, step: "enable-pages" }, { status: enablePagesRes.status });
    }

    const siteUrl = `https://${username}.github.io/${repoName}/`;

    return NextResponse.json({
      message: "Deployed successfully!",
      url: siteUrl,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
