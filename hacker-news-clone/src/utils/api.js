
const BASEURL = 'https://hacker-news.firebaseio.com/v0/'

// returns 500 IDs of top stories.  Can be both jobs and stories.
async function getStoryIds (BASEURL, mode) {
  const queryURL = BASEURL + `${mode}stories.json`
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
function getFilteredStories (items) {
  return items.filter(item => item.type === 'story')
}
async function getSubmissionsByUserProfile (user) {
  const items = await getItemList(BASEURL, getShortItemList(user.submitted, 25))
  const stories = getFilteredStories(items)
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

  const unFilteredComments = await getItemList(BASEURL, getShortItemList(story.kids, 50))

  const comments = unFilteredComments.filter(item => item.text)
  console.log(comments)
  return { story, comments }
}

function getShortItemList (ids, maxLength) {
  if (ids.length <= maxLength) {
    return ids
  } else {
    return ids.slice(0, maxLength)
  }
}
async function getItemList (BASEURL, ids) {
  const items = Promise.all(
    ids.map(async (id) => getItemById(BASEURL, id))
  )
  return items
}

export async function getStories (mode) {
  const storyIds = await getStoryIds(BASEURL, mode)
  const shortList = getShortItemList(storyIds, 25)
  const items = await getItemList(BASEURL, shortList)
  return getFilteredStories(items)
}
