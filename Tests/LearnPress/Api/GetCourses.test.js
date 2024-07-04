const GetCourses = require('../../../LearnPress/Api/GetCourses');

test('string with a single number should result in the number itself', async () => {

    const courses = await GetCourses('https://wp-edlinjs.edlin.app/');

    expect(courses).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                status: expect.any(String),
                name: expect.any(String)
            })
        ])
    );
});
