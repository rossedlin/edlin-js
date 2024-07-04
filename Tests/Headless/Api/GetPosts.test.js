const GetPosts = require('../../../Headless/Api/GetPosts');

test('Getting all WordPress POSTS, including draft, using Headless.', async () => {

    let post = await GetPosts('https://wp-edlinjs.edlin.app/', {draft: true});

    expect(post).toEqual(expect.arrayContaining(
        [
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                slug: 'hello-world',
                title: expect.any(String)
            }),
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                slug: 'draft-post',
                title: expect.any(String)
            })
        ]
    ));

    post = await GetPosts('https://wp-edlinjs.edlin.app/', {draft: 1});

    expect(post).not.toEqual(expect.arrayContaining(
        [
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                slug: 'draft-post',
                title: expect.any(String)
            })
        ]
    ));
});

test('Getting all WordPress POSTS, only public, using Headless.', async () => {

    let post = await GetPosts('https://wp-edlinjs.edlin.app/');

    //Check for draft post
    expect(post).not.toEqual(expect.arrayContaining(
        [
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                slug: 'draft-post',
                title: expect.any(String)
            })
        ]
    ));

    post = await GetPosts('https://wp-edlinjs.edlin.app/', {draft: false});

    //Check for draft post
    expect(post).not.toEqual(expect.arrayContaining(
        [
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                slug: 'draft-post',
                title: expect.any(String)
            })
        ]
    ));

    post = await GetPosts('https://wp-edlinjs.edlin.app/', {draft: false});

    //Check for draft post
    expect(post).toEqual(expect.arrayContaining(
        [
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                slug: 'hello-world',
                title: expect.any(String)
            })
        ]
    ));
});
