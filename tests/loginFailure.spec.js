import { test, expect } from '@playwright/test';


test('Login failure reporting demo', async ({ page }) => {


    await page.goto('https://www.saucedemo.com');


    console.log("Opened login page");


    await page.locator('#user-name')
        .fill('standard_user');


    console.log("Username entered");


    await page.locator('#password')
        .fill('secret_sauce');


    console.log("Password entered");


    await page.locator('#login-button')
        .click();


    console.log("Login button clicked");


    // Intentional failure for report demo

    await expect(page)
        .toHaveTitle('Wrong Title');


});