
// import { test, expect } from '@playwright/test';
// const { test, expect } =require('@playwright/test');

const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
// const timeout = 60000;
// test.use({ timeout });



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

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);

});

//Verify That the "Add Book" Link Is Visible  after user login
test('Verify That the "My Books" Link Is Visible  after user login', async ({ page }) => {
    // await page.goto('http://localhost:3000/login');
    // await page.waitForSelector('nav.navbar');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');
    // await page.click('input[type="submit"]');

    // await page.waitForSelector('a.button[href="/profile"]', { state: 'visible' });
    // await page.waitForSelector('a[href="/profile"]', { timeout: 60000 });
    // const addBookButton = await page.$('a[href="/profile"]');


    // const myBooksButton = await page.$('a.button[href="/profile"]');
    // const isMyBooksButtonVisible = await myBooksButton.isVisible();
    // expect(isMyBooksButtonVisible).toBe(true);

});

//Verify That the User's Email Address Is Visible 
test('Verify That the User\'s Email Address Is Visible', async ({ page }) => {
    // await page.goto('http://localhost:3000/login');
    // await page.waitForSelector('nav.navbar');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');
    // await page.click('input[type="submit"]');

    // await page.waitForSelector('div#user span');

    // const userEmailElement = await page.$('div#user span');
    // const userEmailText = await userEmailElement.innerText();
    // expect(userEmailText).toContain('petar@abv.bg');

    //    await page.waitForSelector('div#user span:not(:empty)', { timeout: 100000 });
    //     const userEmailText = await page.$eval('div#user span', element => element.innerText);
    //     expect(userEmailText).toContain('petar@abv.bg');


    // await page.waitForFunction(() => document.querySelector('div#user span').innerText !== 'Welcome, {email}', { timeout: 60000 });

    // const userEmailText = await page.$eval('div#user span', element => element.innerText);
    // expect(userEmailText).toContain('petar@abv.bg');
});

//Login  with Valid Credentials 
test('Login with valid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await page.click('input[type="submit"]');

    await page.$('a[href="/catalog"]');
    expect(page.url()).toBe('http://localhost:3000/catalog');

    // await page.waitForSelector('a[href="/catalog"]');
    // expect(page.url()).toBe('http://localhost:3000/catalog');
});

//Submit the Form with Empty Input Fields /Login with empty input fields
test('Login with empty input fields', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.click('input[type="submit"]');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    });

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

//Submit the Form with Correct Data/Add book with correct data
test('Add book with correct data', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3000/catalog')
    ]);

    await page.click('a[href="/create"]');

    await page.waitForSelector('#create-form');

    await page.fill('#title', 'Test Book');
    await page.fill('#description', 'This is a test book description');
    await page.fill('#image', 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');

    await page.click('#create-form input[type="submit"]');

    await page.waitForURL('http://localhost:3000/catalog');

    expect(page.url()).toBe('http://localhost:3000/catalog');
});

//Submit the Form with Empty Title Field
test('Submit the Form with Empty Title Field', async ({ page }) => {

    // await page.goto('http://localhost:3000/login');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');

    // await Promise.all([
    //     page.click('input[type="submit"]'),
    //     page.waitForURL('http://localhost:3000/catalog')

    // ])
    // await page.click('a[href="/create"]');
    // await page.waitForSelector('#create-form');


    // await page.fill('#description', 'This is a test book description');
    // await page.fill('#image', 'https://expample.com/book-image.jpj');

    // await page.selectOption('#type', 'Fiction');

    // page.on('dialog', async dialog => {
    //     expect(dialog.type()).toContain('alert');
    //     expect(dialog.message()).toContain('All fields are required!');
    //     await dialog.accept();
    // })
    // await page.$('a[href="/create"]');
    // expect(page.url()).toBe('http://localhost:3000/create');
});

//Submit the Form with Empty Description Field
test('Submit the Form with Empty Description Field', async ({ page }) => {

    // await page.goto('http://localhost:3000/login');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');

    // await Promise.all([
    //     page.click('input[type="submit"]'),
    //     page.waitForURL('http://localhost:3000/catalog')

    // ])
    // await page.click('a[href="/create"]');
    // await page.waitForSelector('#create-form');

    // await page.fill('#title', 'Test Book');
    // await page.fill('#image', 'https://expample.com/book-image.jpj');

    // await page.selectOption('#type', 'Fiction');

    // page.on('dialog', async dialog => {
    //     expect(dialog.type()).toContain('alert');
    //     expect(dialog.message()).toContain('All fields are required!');
    //     await dialog.accept();
    // })
    // await page.$('a[href="/create"]');
    // expect(page.url()).toBe('http://localhost:3000/create');

});
//Submit the Form with Empty Image URL Field
test('Submit the Form with Empty Image URL Field', async ({ page }) => {

    // await page.goto('http://localhost:3000/login');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');

    // await Promise.all([
    //     page.click('input[type="submit"]'),
    //     page.waitForURL('http://localhost:3000/catalog', { timeout: 120000 })

    // ])
    // await page.click('a[href="/create"]');
    // await page.waitForSelector('#create-form');


    // await page.fill('#title', 'Test Book');
    // await page.fill('#description', 'This is a test book description');


    // await page.selectOption('#type', 'Fiction');

    // page.on('dialog', async dialog => {
    //     expect(dialog.type()).toContain('alert');
    //     expect(dialog.message()).toContain('All fields are required!');
    //     await dialog.accept();
    // })
    // await page.$('a[href="/create"]');
    // expect(page.url()).toBe('http://localhost:3000/create');

});

//"All Books" Page

//Verify That All Books Are Displayed
test('Verify That All Books Are Displayed', async ({ page }) => {

    // await page.goto('http://localhost:3000/login');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');

    // await Promise.all([
    //     page.click('input[type="submit"]'),
    //     page.waitForURL('http://localhost:3000/catalog', { timeout: 120000 })
    // ])

    // await page.waitForSelector('.dashboard');

    // const bookElements = await page.$$('.other-books-list li');
    // expect(bookElements.length).toBeGreaterThan(0)
});
//Verify That No Books Are Displayed
test('Verify That No Books Are Displayed', async ({ page }) => {

    // await page.goto('http://localhost:3000/login');

    // await page.fill('#email', 'petar@abv.bg');
    // await page.fill('#password', '123456');

    // await Promise.all([
    //     page.click('input[type="submit"]'),
    //     page.waitForURL('http://localhost:3000/catalog', { timeout: 60000 })
    // ])

    // await page.waitForSelector('.dashboard');

    // const noBooksMessage = await page.textContent('.no-books');
    // expect(noBooksMessage).toBe('No Books in the Database!');


});

//"Details" Page

//Verify That Logged-In User Sees Details Button and Button Works Correctly
test('Verify That Logged-In User Sees Details Button and Button Works Correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');

    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3000/catalog')
    ]);

    await page.click('a[href="/catalog"]');

    await page.waitForSelector('.otherBooks');

    await page.click('.otherBooks a.button');

    await page.waitForSelector('.book-information');

    const detailsPageTitle = await page.textContent('.book-information h3');
    expect(detailsPageTitle).toBe('Test Book');

});
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
test('Verify That the "Logout" Button Is Visible', async ({ page }) => {

    await page.goto('http://localhost:3000/login');

    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const logoutLink = await page.$('a[href="javascript:void(0)"]');

    const isLogoutLinkVisible = await logoutLink.isVisible();

    expect(isLogoutLinkVisible).toBe(true);

});

//Verify That the "Logout" Button Redirects Correctly
test('Verify That the "Logout" Button Redirects Correctly', async ({ page }) => {

    await page.goto('http://localhost:3000/login');

    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const logoutLink = await page.$('a[href="javascript:void(0)"]');
    await logoutLink.click();

    const redirectedURL = page.url();
    expect(redirectedURL).toBe('http://localhost:3000/catalog');
});
