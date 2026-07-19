# Google Apps Script Web App Template

This is a template for developing Google Apps Script Web Applications using
TypeScript. It leverages `bun` for builds and `@google/clasp` for deployment.

## Scripts

- **`bun run build`**: Compiles TypeScript and HTML into `dist/`.
- **`bun run push`**: Builds the project and pushes to Google Apps Script via
  `clasp`.
- **`bun run deploy`**: Builds, pushes, and deploys the web app using `clasp`
  and the `deploymentId`.
- **`bun run typecheck`**: Performs TypeScript type checking.
- **`bun run format`**: Formats code with Prettier.

## Setup and Deployment

To prepare your project for deployment, configure `.clasp.json` and
`deploymentId` files:

1.  **Configure `.clasp.json`**:
    - First, authenticate `clasp` by running `bun x @google/clasp login`.
    - To link your local project to an Apps Script project:
      - **Create new**:
        `bun x @google/clasp create --type webapp --title "Your Web App Name"`
      - **Clone existing**: `bun x @google/clasp clone "YOUR_SCRIPT_ID"`
    - These commands will generate or update your `.clasp.json` with the correct
      `scriptId`. Verify that `rootDir` in `.clasp.json` is set to `"dist"`.

2.  **Configure `deploymentId`**:
    - After pushing your project (using `bun run push`), deploy it as a web app
      from the Google Apps Script editor.
    - Alternatively, get a deployment ID using `clasp`:
      `bun x @google/clasp deploy --json`.
    - Copy the `deploymentId` value from the deployment output.
    - Paste this ID into the `deploymentId` file in your project's root. This ID
      allows the `bun run deploy` command to work.
