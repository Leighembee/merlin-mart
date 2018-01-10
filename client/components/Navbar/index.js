import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

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

const Navbar = () => (<AppBar
  title="Merlin Mart"
  showMenuIconButton={false}
  iconElementRight={<MenuButton />}
/>)

export default Navbar
