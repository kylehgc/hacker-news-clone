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

async function getUserById (BASEURL, id) {
  const queryURL = `${BASEURL}user/${id}.json`
  const response = await fetch(queryURL)
  const user = await response.json()
  return user
}

async function getSubmissionsByUserProfile (user) {
  const submissions = await getItemList(BASEURL, user.submitted)
  const stories = submissions.filter(item => item.type === 'story')
  return stories
}

export async function getUserProfile (userName) {
  const user = await getUserById(BASEURL, userName)
  const submissions = getSubmissionsByUserProfile(user)
  return { user, submissions }
}

async function getItemList (BASEURL, ids) {
  const shortItemList = ids.slice(-40, -1)
  const items = Promise.all(
    shortItemList.map(async (id) => getItemById(BASEURL, id))
  )
  return items
}

export async function getTopStories () {
  const topStoryIds = await getTopStoryIds(BASEURL)
  return await getItemList(BASEURL, topStoryIds)
}
