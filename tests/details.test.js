// const assert = require('assert');
// const fetch = require('node-fetch');

// describe('Details page', function () {

//     it('Description section', async function () {
//         let res = await fetch("http://localhost:3000/catalog/");
//         let body = await res.text();

//         const descriptionsection = '<h3>Description:</h3>';

//         assert.ok(body.includes(descriptionsection));

//     });
//     it('Img Like', async function () {
//         let res = await fetch("http://localhost:3000/catalog/");
//         let body = await res.text();

//         const imgLike = '<img class="hearts" src="/images/heart.png"></img>';

//         assert.ok(body.includes(imgLike));
//     });
//     it('Presence of  Like Button', async function () {
//         let res = await fetch("http://localhost:3000/catalog/");
//         let body = await res.text();

//         const LikeButton = '<a class="button" href="javascript:void(0)">Like</a>';

//         assert.ok(body.includes(LikeButton));
//     });
// });