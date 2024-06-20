/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPosts(baseUrl) {
  const postsRes = await fetch(baseUrl + '/wp-json/learnpress/v1/courses');

  return await postsRes.json();
};
