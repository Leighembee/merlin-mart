import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import reduce from 'lodash/reduce'
import { logout } from '../../store'

const MenuButton = ({ cartItemCount, logout, isLoggedIn }) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="white" /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <Link to="/cart">
      <MenuItem
        primaryText={`Cart ${cartItemCount ? `(${cartItemCount})` : ''}`}
      />
    </Link>
    {
      isLoggedIn ?
        <div>
          <Link to="/account">
            <MenuItem primaryText="Account" />
          </Link>
          <MenuItem onClick={logout} primaryText="Logout" />
        </div>
        :
        <div>
          <Link to="/login">
            <MenuItem primaryText="Login" />
          </Link>
          <Link to="/signup">
            <MenuItem primaryText="Signup" />
          </Link>
        </div>
    }

  </IconMenu>
)

MenuButton.muiName = 'IconMenu'

const SearchField = () => (
  <div>
    <span>Merlin Mart</span>
  </div>
)

const Navbar = ({ cartItemCount, logout, isLoggedIn }) => (<AppBar
  title={<SearchField />}
  showMenuIconButton={false}
  iconElementRight={<MenuButton
    isLoggedIn={isLoggedIn}
    logout={logout}
    cartItemCount={cartItemCount}
  />}
/>)

const mapState = ({ cart, user }) => ({
  isLoggedIn: !!user.id,
  cartItemCount: reduce(cart.items, (acc, item) => acc + item.quantity, 0)
})

const mapDispatch = dispatch => ({
  logout() {
    dispatch(logout())
  }
})

export default connect(mapState, mapDispatch)(Navbar)
