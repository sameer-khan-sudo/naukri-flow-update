// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   reporter: 'html',

//   use: {
//     headless: true,
//     viewport: null,
    
//   },

//   projects: [
//     {
//       name: 'Microsoft Edge',
//       workers: 4,   // 🔥 4 parallel workers
//   retries: 3,
//       use: {
//         // browserName: 'chromium',
//         channel: 'msedge',
//         viewport: null,
//         launchOptions: {
//           args: ['--start-maximized'],
//         },
//       },
//     },
//   ],
// });
// // import { defineConfig, devices } from '@playwright/test';

// // export default defineConfig({
// //   timeout: 180000,
// //   retries: 0,
// //   workers: 1, // IMPORTANT - avoid parallel (anti-bot)

// //   use: {
// //     args: ['--start-maximized']
// //     browserName: 'firefox', // use chromium instead of edge
// //     headless: false,
    

// //     viewport: { width: 1280, height: 800 },

// //     userAgent:
// //       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',

// //     launchOptions: {
// //       args: [
// //         '--disable-blink-features=AutomationControlled',
// //         '--start-maximized'
// //       ]
// //     },

// //     ignoreHTTPSErrors: true,
// //     trace: 'on-first-retry'
// //   }
// // });



import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  timeout: 60000,
  expect: {
    timeout: 10000,
  },

  fullyParallel: true,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : 4,

  reporter: [
    ['html', { open: 'never' }],
  ],

  use: {
    headless: isCI, // ✅ CI = headless, local = headed
    viewport: null,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium', // ✅ standard name (fixes your error)
      use: {
        browserName: 'chromium',
        channel: isCI ? undefined : 'msedge', // ✅ local = Edge, CI = Chromium
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});