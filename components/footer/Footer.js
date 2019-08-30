import React from "react";

import './footer.styles.css';

function Footer(){
    return(
		   	<footer>
		         <div className="row">
		   			<div className="col-12 col-lg-6 footer-desktop p-4 mt-4">
		   				<img src="./../static/white-header.png" alt="Dev Solutions" className="center-image footer-logo"/>
		   			</div>
					<div className="col-12 col-lg-6 p-4 mt-4">
						<img src="./../static/white-header.png" alt="Dev Solutions" className="center-image footer-logo"/>	
					</div>
			        <div className="col-12 col-lg-6 footer-mobile p-4">
			            <img src="./../static/white-header.png" alt="Dev Solutions" className="center-image footer-logo"/>      
			        </div>
		         </div>
		   	</footer>
 );

}

export default Footer;