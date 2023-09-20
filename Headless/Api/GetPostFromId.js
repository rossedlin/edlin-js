/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPost(baseUrl, id) {
  const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/post?id=' + id);

  return await postsRes.json();
};
