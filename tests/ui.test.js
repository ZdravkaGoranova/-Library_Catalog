
import { test, expect } from '@playwright/test';

// const { test, expect } =require('@playwright/test');


//Verify That the "All Books" Link Is Visible 
test('Verify "All Books" link is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('nav.navbar');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

//Verify That the "Login" Button Is Visible
test('Verify That the "Login" Button Is Visible ', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('nav.navbar');

    const loginButton = await page.$('a[href="/login"] ');
    const isLoginButtonIsVisible = await loginButton.isVisible();
    expect(isLoginButtonIsVisible).toBe(true);

});




// test('', async ({ }) => { });
// test('', async ({ }) => { });
// test('', async ({ }) => { });