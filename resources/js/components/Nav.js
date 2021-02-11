import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


// TODO: Update <Search> usage after its will be implemented

const Nav = () => (
  <div>
    <Menu secondary attached='top'>
        <Link to="/">
            <Header as="h1">Music</Header>
        </Link>
        <Link to="/addMusic">
            <Menu.Item name='Add Music' />
        </Link>
        <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                    <input
                    className='prompt'
                    type='text'
                    placeholder='Search animals...'
                    />
                    <i className='search link icon' />
                </div>
            <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
  </div>
)

export default Nav