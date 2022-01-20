// import { render, screen } from '@testing-library/react'
// import App from './App'
import { getTopStories } from './utils/api'

test('the data is peanut butter', () => {
  return getTopStories().then(data => console.log(data))
})
