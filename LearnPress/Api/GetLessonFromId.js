/**
 * @param baseUrl
 * @param token
 * @param id
 * @returns {Promise<any>}
 */
module.exports = async function GetLessonFromId(baseUrl, token, id) {

  const res = await fetch(baseUrl + '/wp-json/learnpress/v1/lessons/' + id, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  return await res.json();
};
