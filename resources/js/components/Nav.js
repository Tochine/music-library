import React from 'react'
import { Icon, Menu, Segment, Input } from 'semantic-ui-react'


// TODO: Update <Search> usage after its will be implemented

const Nav = () => (
  <div>
    <Menu attached='top'>
        <Menu.Item name="Music" />
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