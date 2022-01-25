
const BASEURL = 'https://hacker-news.firebaseio.com/v0/'

// returns 500 IDs of top stories.  Can be both jobs and stories.
async function getTopStoryIds (BASEURL) {
  const queryURL = BASEURL + 'topstories.json'
  const response = await fetch(queryURL)
  const topStoryIds = await response.json()
  return topStoryIds
}

async function getNewStoryIds (BASEURL) {
  const queryURL = BASEURL + 'newstories.json'
  const response = await fetch(queryURL)
  const newStoryIds = response.json()
  return newStoryIds
}
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
function getStories (items) {
  return items.filter(item => item.type === 'story')
}
async function getSubmissionsByUserProfile (user) {
  const items = await getItemList(BASEURL, user.submitted)
  const stories = getStories(items)
  return stories
}

export async function getUserProfile (userName) {
  const user = await getUserById(BASEURL, userName)
  const submissions = await getSubmissionsByUserProfile(user)
  return { user, submissions }
}

export async function getCommentList (id) {
  const story = await getItemById(BASEURL, id)
  if (!story.descendants) {
    return ({ story, comments: null })
  }
  const comments = await getItemList(BASEURL, story.kids)
  return { story, comments }
}

async function getItemList (BASEURL, ids) {
  const shortItemList = ids.slice(-40, -1)
  const items = Promise.all(
    shortItemList.map(async (id) => getItemById(BASEURL, id))
  )
  return items
}

export async function getNewStories () {
  const newStoryIds = await getNewStoryIds(BASEURL)
  newStoryIds.sort((a, b) => a - b)
  const items = await getItemList(BASEURL, newStoryIds)
  return getStories(items).sort((a, b) => b.time - a.time)
}
export async function getTopStories () {
  const topStoryIds = await getTopStoryIds(BASEURL)
  const items = await getItemList(BASEURL, topStoryIds)
  return getStories(items)
}
