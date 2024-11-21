/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetTagFromSlug(baseUrl, args = {}) {
  console.log(baseUrl + '/wp-json/headless/v1/tag?slug=' + args.slug);
  const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/tag?slug=' + args.slug);

  return await postsRes.json();
};
