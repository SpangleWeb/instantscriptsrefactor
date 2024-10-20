import React, {Component} from 'react'
import { Link } from 'react-router'

import MessageBar from '../layouts/MessageBar'

export default class Header extends Component {

	constructor (props) {
		super(props)
	}

	render () {

		return (
      <header className='navbar'>
        <div className='navbar-brand'>
          <Link to={app.settings.ws_conf.header.head_l_logo.u} className='navbar-brand-link'>
            <img 
              src='https://via.placeholder.com/150' 
              alt="Placeholder Image"
              className='navbar-brand-image'
            />
          </Link>
        </div>
        <div className='navbar-menu'>
          <ul className='navbar-menu-list'>
          {
            app.settings.ws_conf.main_menu.pages.p.map(function (p, i) {
              return (
                <li key={i} className='navbar-menu-item'>
                  <Link to={p.u} className='navbar-menu-item-link'>
                    <i className={'navbar-menu-item-icon fa fa-2x '+p.ico} aria-hidden="true"></i>
                    <span className="p-name">{p.name}</span>
                  </Link>
                </li>
              )
            })
          }
          </ul>
        </div>
        <MessageBar />
      </header>
		)
	}
}

// property validation
Header.propTypes = {
	children: React.PropTypes.any
}

Header.contextTypes = {
	router: React.PropTypes.object.isRequired
}
