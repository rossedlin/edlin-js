module.exports = async function GetStatistics(id, key) {

  const postsRes = await fetch(
    'https://www.googleapis.com/youtube/v3/channels?' + new URLSearchParams({
      part: 'statistics',
      id: id,
      key: key,
    }),
    {
      method:  'GET',
      headers: {
        'Content-Type':  'application/json',
      },
    },
  );

  const post = await postsRes.json();

  if (post['items'][0]['statistics']) {
    return {
      views: Number(post['items'][0]['statistics']['viewCount']),
      subscribers: Number(post['items'][0]['statistics']['subscriberCount']),
      videos: Number(post['items'][0]['statistics']['videoCount']),
    }
  }

  return {
    views: 0,
    subscribers: 0,
    videos: 0,
  }
}