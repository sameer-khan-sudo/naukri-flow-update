import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 2 }); // 🔥 2 retries if failed

for (let run = 1; run <= 2; run++) {

    test(`Naukri profile update flow - Run ${run}`, async ({ page }) => {

        console.log(`\nRunning Test Iteration: ${run}`);

        await page.goto('https://www.google.com/');

        // await page.goto('https://www.naukri.com/');

        // // Login
        // await page.getByRole('link', { name: 'Login', exact: true }).click();
        // await page.getByRole('textbox', { name: /Enter your active Email ID/i })
        //     .fill('sameer.work3099@gmail.com');

        // await page.locator("//input[@placeholder='Enter your password']")
        //     .fill('Sohail@9927');

        // await page.getByRole('button', { name: 'Login', exact: true }).click();

        // // Navigate to Profile
        // await page.locator('.nI-gNb-drawer__bars').click();
        // await page.getByRole('link', { name: 'View & Update Profile' }).click();

        // // Edit Basic Details
        // await page.getByRole('emphasis')
        //     .filter({ hasText: 'editOneTheme' })
        //     .click();

        // const saveBtn = page.getByRole('button', { name: 'Save' });

        // await saveBtn.scrollIntoViewIfNeeded();
        // await saveBtn.click();

        // // Optional popup
        // const popupClose = page.locator('.profileUpdatedProLayer .crossLayer');

        // if (await popupClose.count() > 0) {
        //     await popupClose.first().click();
        // }

        // const sections = [
        //     '#lazyResumeHead',
        //     '#lazyKeySkills',
        //     '.emp-list',
        //     '#lazyEducation',
        //     '#lazyProject',
        //     '#lazyProfileSummary',
        //     '#lazyDesiredProfile',
        //     '#lazyPersonalDetail'
        // ];

        // for (const section of sections) {
        //     const sectionLocator = page.locator(section).first();
        //     await sectionLocator.scrollIntoViewIfNeeded();

        //     await page.locator(`${section} .edit.icon`).first().click();
        //     await saveBtn.click();
        // }

    });

}