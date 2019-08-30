import React from 'react';
import Link from 'next/link';
import './header.styles.css';

class Header extends React.Component{
	constructor(){
	    super();
	    this.state = {
	    	displayMenu: false
	    }
	  }

	  showHideMenu = () =>{
	  	this.setState({
	  		displayMenu: !this.state.displayMenu
	  	});
	  }

  render(){

  	const { displayMenu } = this.state

	//Controls class of menu item
	let menuClass;
	if (displayMenu){
		menuClass = 'header-menu visible-menu';
	} else {
		menuClass = 'header-menu';
	}

  	return(
  		<header>
			<div className="row">
				<div className="col-9 col-lg-6">
					<Link href="/">
						<img src="./../../static/devsolutions-header.png" alt="Header logo" className="header-logo pointer"/>
					</Link>
				</div>
				<div className="col-3 menu-icon father-vertical only-mobile" onClick={this.showHideMenu}>
					<span className="child-vertical"><b>MENU</b></span>
				</div>
				<div className="col-12 col-lg-6">
					<span className={menuClass}>
						<Link href="/"><a>Home</a></Link>
						<Link href="/services"><a>Services</a></Link>
						<Link href="/portfolio"><a>Portfolio</a></Link>
						<Link href="/team"><a>Team</a></Link>
						<Link href="/contact"><a>Contact</a></Link>
					</span>
				</div>
			</div>
	</header>
	
)
  }
};

export default Header;