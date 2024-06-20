/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPageFromSlug(baseUrl, slug) {
  const res = await fetch(baseUrl + '/wp-json/learnpress/v1/courses?slug=' + slug);
  const courses = await res.json();

  return courses[0];
};
