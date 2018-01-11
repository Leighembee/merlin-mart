import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { SearchField as Search } from '../../containers'
import './style.css'

const MenuButton = props => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="white" /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)

MenuButton.muiName = 'IconMenu'

const SearchField = () => (
  <div id="nav-items-wrapper">
      <div>Merlin Mart</div>
      <Search />
  </div>
)

const Navbar = () => (<AppBar
  title={<SearchField />}
  showMenuIconButton={false}
  iconElementRight={<MenuButton />}
/>)

export default Navbar
