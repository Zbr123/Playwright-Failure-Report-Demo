import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  reporter: [
    ['html']
  ],

  use: {

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure'

  }

});