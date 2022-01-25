import React from 'react'
import { ThemeConsumer } from '../Contexts/Theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='nav row'>
            <li>
              <NavLink
                exact
                to='/'
                className='nav-link'
                activeStyle={activeStyle}
              >
                Top</NavLink>
            </li>
            <li>
              <NavLink
                to='/new'
                className='nav-link'
                activeStyle={activeStyle}
              >
              New</NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}
