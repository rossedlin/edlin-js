const GetCourseFromSlug = require('../../../LearnPress/Api/GetCourseFromSlug');

test('Getting a WordPress Course using LearnPress form a slug.', async () => {

    const course = await GetCourseFromSlug('https://wp-edlinjs.edlin.app/', 'sample-course');

    expect(course).toEqual(expect.objectContaining({
        id: expect.any(Number),
        status: expect.any(String),
        slug: 'sample-course',
        name: expect.any(String),
    }));
});
