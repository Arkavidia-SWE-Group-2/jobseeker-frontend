/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "**/*.(ts|tsx)": () => "pnpm typecheck",
  "**/*.(ts|tsx|js)": () => `pnpm check:fix`,
  "**/*.(md|json)": () => `pnpm format:fix`,
};

export default config;
