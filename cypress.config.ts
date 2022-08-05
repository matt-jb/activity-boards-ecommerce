import { defineConfig } from "cypress";

const cypressConfig = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
    defaultCommandTimeout: 8000,
    chromeWebSecurity: false,
  },
});

export default cypressConfig;
