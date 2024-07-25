const {Draft2019} = require("json-schema-library");
const schema = require('../Schema/GetCourses.json');

/**s
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPageFromSlug(baseUrl, slug) {
    const res = await fetch(baseUrl + '/wp-json/learnpress/v1/courses?slug=' + slug);
    const json = await res.json();

    const draft = new Draft2019(schema);
    const errors = draft.validate(json);

    if (errors.length) {
        return null;
    }
    return json[0];
};
