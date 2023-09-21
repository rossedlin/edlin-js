/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPosts(baseUrl, draft = 0) {
  const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/posts?draft=' + draft);

  return await postsRes.json();
};
