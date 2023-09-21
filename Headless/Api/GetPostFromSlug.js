/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPostFromSlug(baseUrl, slug, draft = 0) {
  const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/post?slug=' + slug + '&draft=' + draft);

  return await postsRes.json();
};
