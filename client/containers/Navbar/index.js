import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import reduce from 'lodash/reduce'

const MenuButton = ({ cartItemsCount }) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="white" /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Account" />
    <Link to='/cart'>
      <MenuItem
        primaryText={`Cart ${cartItemsCount ? `(${cartItemsCount})` : ''}`}
      />
    </Link>
    <MenuItem primaryText="Login" />
    <MenuItem primaryText="Signup" />
  </IconMenu>
)


MenuButton.muiName = 'IconMenu'

const SearchField = () => (
  <div>
    <span>Merlin Mart</span>
  </div>
)

const Navbar = ({ cartItemsCount }) => (<AppBar
  title={<SearchField />}
  showMenuIconButton={false}
  iconElementRight={<MenuButton cartItemsCount={cartItemsCount} />}
/>)

const mapState = ({ cartItems }) => ({
  cartItemsCount: reduce(cartItems, (acc, item) => acc + item.quantity, 0)
})

export default connect(mapState)(Navbar)
