const GetPostFromSlug = require('../../../Headless/Api/GetPostFromSlug');

test('Getting a WordPress POST using Headless form a slug.', async () => {

    const post = await GetPostFromSlug('https://wp.codewithross.com/', 'stripe-laravel');

    expect(post).toEqual(expect.objectContaining({
        id: expect.any(Number),
        status: expect.any(String),
        name: expect.any(String),
        content: expect.any(String)
    }));
});
