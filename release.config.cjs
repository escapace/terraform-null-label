module.exports = {
  branches: ["trunk"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/exec",
      {
        publishCmd:
          'sed -i \'s/version = "1.0.0"/version = "${nextRelease.version}"/g\' exports/context.tf && cat variables.tf >> exports/context.tf',
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "exports/context.tf", name: "context.tf" }],
      },
    ],
  ],
};
