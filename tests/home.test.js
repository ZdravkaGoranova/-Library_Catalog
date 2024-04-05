const assert = require('assert');
const fetch = require('node-fetch');

describe('Home page', function () {
    it('Link to All Books', async function () {
        let res = await fetch("http://localhost:3000/");
        let body = await res.text();
        assert.ok(body.includes('<a href="/catalog">All Books</a>'));
    });

    it('Presence of Login and Register links', async function() {
        let res = await fetch("http://localhost:3000/"); 
        let body = await res.text();
        
        // Define the expected HTML content as strings
        const loginLink = '<a class="button" href="/login">Login</a>';
        const registerLink = '<a class="button" href="/register">Register</a>';

        // Assert that the login and register links are present in the response body
        assert.ok(body.includes(loginLink));
        assert.ok(body.includes(registerLink));
    });
});