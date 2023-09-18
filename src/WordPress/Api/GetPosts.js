/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPosts(baseUrl) {
  const postsRes = await fetch(baseUrl + '/wp-json/wp/v2/posts?_embed&per_page=20');

  return await postsRes.json();
};
