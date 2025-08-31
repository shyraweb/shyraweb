import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { repoName, htmlContent } = await req.json();

  const GITHUB_API =
    process.env.GITHUB_API_BASE_URL || "https://api.github.com";
  const username = process.env.GITHUB_USERNAME || "shyraweb";
  const token =
    process.env.GITHUB_DEPLOYMENT_TOKEN ||
    "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";
  
  // const token = "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";
  const branch = process.env.GITHUB_BRANCH || "main";
  const encodedContent = Buffer.from(htmlContent).toString("base64");
  const DEPLOYED_WEBSITE_BASE_URL =
    process.env.DEPLOYED_WEBSITE_BASE_URL || "https://shyraweb.github.io/";

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
      return NextResponse.json(
        { error, step: "repo-creation" },
        { status: createRepoRes.status }
      );
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
      return NextResponse.json(
        { error, step: "file-upload" },
        { status: uploadFileRes.status }
      );
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
      return NextResponse.json(
        { error, step: "enable-pages" },
        { status: enablePagesRes.status }
      );
    }

    return NextResponse.json({
      message: "Deployed successfully!",
      url: `${DEPLOYED_WEBSITE_BASE_URL}${repoName}`,
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
