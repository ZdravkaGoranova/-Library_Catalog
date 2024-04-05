const assert = require('assert');
const fetch = require('node-fetch');

describe('Catalog page', function () {

    it('Presence of My Books links', async function () {
        let res = await fetch("http://localhost:3000/catalog/");
        let body = await res.text();

        const profilenLink = '<a class="button" href="/profile">My Books</a>';

        assert.ok(body.includes(profilenLink));

    });
    it('Presence of Add Book links', async function () {
        let res = await fetch("http://localhost:3000/catalog/");
        let body = await res.text();

        const createLink = '<a class="button" href="/create">Add Book</a>';

        assert.ok(body.includes(createLink));
    });
    it('Presence of  Logout links', async function () {
        let res = await fetch("http://localhost:3000/catalog/");
        let body = await res.text();

        const LogoutLink = '<a class="button" href="javascript:void(0)" id="logoutBtn">Logout</a>';

        assert.ok(body.includes(LogoutLink));
    });
});