import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'

const MenuButton = props => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="white" /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <Link to='/cart'>
      <MenuItem primaryText='Cart' />
    </Link>
    <MenuItem primaryText="Login" />
  </IconMenu>
)

MenuButton.muiName = 'IconMenu'

const SearchField = () => (
  <div>
    <span>Merlin Mart</span>
  </div>
)

const Navbar = () => (<AppBar
  title={<SearchField />}
  showMenuIconButton={false}
  iconElementRight={<MenuButton />}
/>)

export default Navbar
