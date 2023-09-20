/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPostFromSlug(baseUrl, slug) {
  const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/post?slug=' + slug);

  return await postsRes.json();
};
