const GetPostFromSlug = require('../../../Headless/Api/GetPostFromSlug');

test('Getting a WordPress POST using Headless form a slug.', async () => {

    const post = await GetPostFromSlug('https://wp-edlinjs.edlin.app/', 'hello-world');

    expect(post).toEqual(expect.objectContaining({
        id: expect.any(Number),
        status: expect.any(String),
        slug: 'hello-world',
        title: expect.any(String),
        content: expect.any(String)
    }));
});
