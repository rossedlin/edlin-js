const GetCourseFromSlug = require('../../../LearnPress/Api/GetCourseFromSlug');

test('Getting a WordPress Course using LearnPress form a slug.', async () => {

    const course = await GetCourseFromSlug('https://wp.codewithross.com/', 'html-tags');

    expect(course).toEqual(expect.objectContaining({
        id: expect.any(Number),
        status: expect.any(String),
        slug: 'html-tags',
        name: expect.any(String),
    }));
});
