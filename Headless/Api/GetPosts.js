/**
 *
 * @return {Promise<any>}
 */
module.exports = async function GetPosts(baseUrl, args = {}) {
    const draft = (args["draft"] !== undefined && args["draft"] === true) ? 1 : 0;
    const per_page = (args["per_page"] !== undefined) ? args["per_page"] : 20;
    const postsRes = await fetch(baseUrl + '/wp-json/headless/v1/posts?draft=' + draft
        + '&per_page=' + per_page);

    return await postsRes.json();
};
