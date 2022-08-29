const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kbcs5b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
