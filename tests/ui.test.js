
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

//Verify That the "Register" Button Is Visible 
test('Verify That the "Register" Button Is Visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('nav.navbar');

    const registerButton = await page.$('a[href="/register"] ');
    const isRegisterIsVisible = await registerButton.isVisible();
    expect(isRegisterIsVisible).toBe(true);
});


//Verify That the "All Books" Link Is Visible after login
test('Verify That the "All Books" Link Is Visible after login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.waitForSelector('nav.navbar');

    await page.fill('input[name="email"]', 'petar@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const allBooksLink = await page.$('a[href="/catalog"] ');
    const isAllBooksLinkIsVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkIsVisible).toBe(true);

});
//Verify That the "My Books" Link Is Visible  after user login
// test('Verify That the "My Books" Link Is Visible after user login', async ({ page }) => {
//     await page.goto('http://localhost:3000/login');
//     await page.waitForSelector('nav.navbar');

//     await page.fill('#email', 'petar@abv.bg');
//     await page.fill('#password', '123456');
//     await page.click('input[type="submit"]');

//     await page.waitForSelector('a[href="/profile"]', { timeout: 60000 });

//     const myBooksButton = await page.$('a[href="/profile"]');
//     const isMyBooksButtonVisible = await myBooksButton.isVisible();
//     expect(isMyBooksButtonVisible).toBe(true);
// });

//Verify That the "Add Book" Link Is Visible  after user login
// test('Verify That the "Add Book" Link Is Visible after user login', async ({ page }) => {
//     await page.goto('http://localhost:3000/login');
//     await page.waitForSelector('nav.navbar');

//     await page.fill('#email', 'petar@abv.bg');
//     await page.fill('#password', '123456');
//     await page.click('input[type="submit"]');

//     await page.waitForSelector('a[href="/create"]');

//     const addBookButton = await page.$('a[href="/create"]');
//     const isAddBookButtonVisible = await addBookButton.isVisible();
//     expect(isAddBookButtonVisible).toBe(true);
// });

//Verify That the User's Email Address Is Visible 
// test('Verify That the User\'s Email Address Is Visible', async ({ page }) => {
//     await page.goto('http://localhost:3000/login');
//     await page.waitForSelector('nav.navbar');

//     await page.fill('#email', 'petar@abv.bg');
//     await page.fill('#password', '123456');
//     await page.click('input[type="submit"]');

//     await page.waitForSelector('div#user span');

//     const userEmailElement = await page.$('div#user span');
//     const userEmailText = await userEmailElement.innerText();
//     expect(userEmailText).toContain('petar@abv.bg');
// });

//Submit the Form with Valid Credentials 
test('Login  with Valid Credentials ', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('#email', 'petar@abv.bg');
    await page.fill('#password', '123456');
    await page.click('input[type="submit"]');

    await page.$('a[href="/catalog"]');
    expect(page.url()).toBe('http://localhost:3000/catalog');
});

//Submit the Form with Empty Input Fields 
test('Submit the Form with Empty Input Fields', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3000/login');
});

//Submit the Form with Empty Email Input Field 
// test('', async ({ }) => { });
//Submit the Form with Empty Password Input Field 
// test('', async ({ }) => { });

//Register Page

//Submit the Form with Valid Values 
// test('', async ({ }) => { });
//Submit the Form with Empty Values 
// test('', async ({ }) => { });
//Submit the Form with Empty Email 
// test('', async ({ }) => { });
//Submit the Form with Empty Password
// test('', async ({ }) => { });
//Submit the Form with Empty Confirm Password 
// test('', async ({ }) => { });
//Submit the Form with Different Passwords 

//Add Book" Page 
//Submit the Form with Correct Data 
// test('', async ({ }) => { });
//Submit the Form with Empty Title Field 
// test('', async ({ }) => { });
//Submit the Form with Empty Description Field 

// test('', async ({ }) => { });
//Submit the Form with Empty Image URL Field 
// test('', async ({ }) => { });

//"All Books" Page 

//Verify That All Books Are Displayed 
// test('', async ({ }) => { });
//Verify That No Books Are Displayed 
// test('', async ({ }) => { });

//"Details" Page 

//Verify That Logged-In User Sees Details Button and Button Works Correctly 
// test('', async ({ }) => { });
//Verify That Guest User Sees Details Button and Button Works Correctly 
// test('', async ({ }) => { });
//Verify That All Info Is Displayed Correctly 
// test('', async ({ }) => { });
//Verify If Edit and Delete Buttons Are Visible for Creator 
// test('', async ({ }) => { });
//Verify If Edit and Delete Buttons Are Not Visible for Non-Creator 
// test('', async ({ }) => { });
//Verify If Like Button Is Not Visible for Creator 
// test('', async ({ }) => { });
//Verify If Like Button Is Visible for Non-Creator 
// test('', async ({ }) => { });

//"Logout" Functionality 

//Verify That the "Logout" Button Is Visible 
// test('', async ({ }) => { });
//Verify That the "Logout" Button Redirects Correctly
// test('', async ({ }) => { });
// test('', async ({ }) => { });
// test('', async ({ }) => { });