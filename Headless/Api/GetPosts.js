/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPosts(baseUrl) {
  const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/posts');

  return await postsRes.json();
};
