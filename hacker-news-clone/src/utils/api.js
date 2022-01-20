const BASEURL = 'https://hacker-news.firebaseio.com/v0/'

// returns 500 IDs of top stories.  Can be both jobs and stories.
async function getTopStoryIds (BASEURL) {
  const queryURL = BASEURL + 'topstories.json'
  const response = await fetch(queryURL)
  const topStoryIds = await response.json()
  return topStoryIds
}

// async function getNewStoryIds (BASEURL) {
//   const queryURL = BASEURL + 'newstories.json'
//   const response = await fetch(queryURL)
//   const newStoryIds = response.json()
//   return newStoryIds
// }
async function getItemById (BASEURL, id) {
  const queryURL = `${BASEURL}item/${id}.json`
  const response = await fetch(queryURL)
  const item = await response.json()
  return item
}

// async function getUserById (BASEURL, id) {
//   const queryURL = `${BASEURL}user/${id}.json`
//   const response = await fetch(queryURL)
//   const user = response.json
//   return user
// }

async function getItemList (BASEURL, ids) {
  const shortItemList = ids.slice(-10, -1)
  const items = Promise.all(
    shortItemList.map(async (id) => getItemById(BASEURL, id))
  )

  return items
}

export async function getTopStories () {
  const topStoryIds = await getTopStoryIds(BASEURL)
  return await getItemList(BASEURL, topStoryIds)
}
