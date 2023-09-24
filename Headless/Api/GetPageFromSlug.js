/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPageFromSlug(baseUrl, slug, draft = 0) {
  const res = await fetch(baseUrl + '/wp-json/headless/v1/page?slug=' + slug + '&draft=' + draft);

  return await res.json();
};
