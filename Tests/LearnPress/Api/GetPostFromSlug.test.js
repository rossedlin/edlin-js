const GetPostFromSlug = require('../../../Headless/Api/GetPostFromSlug');

test('string with a single number should result in the number itself', async () => {

    const post = await GetPostFromSlug('https://wp.codewithross.com/', 'stripe-laravel');

    console.log(post);

    expect(post).toMatchObject({
        id: 2944,
        status: 'publish',
        slug: 'stripe-laravel'
    });
});
