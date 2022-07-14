import admin from "firebase-admin";
import { defineConfig } from "cypress";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";

const cypressConfig = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      cypressFirebasePlugin(on, config, admin, {
        projectId: "kacik-aktywnosci",
      });
      // e2e testing node events setup code
    },
    defaultCommandTimeout: 8000,
    chromeWebSecurity: false,
  },
});

export default cypressConfig;
