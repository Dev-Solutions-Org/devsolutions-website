import React from 'react';

import './contact-form.styles.css';

class ContactForm extends React.Component{
	state = {
		name: '',
		email: '',
		message: '',
	};

 render(){

  return(
		   <div className="col-12 col-lg-6 form" style={{
		   	backgroundImage: "url('./../../static/form-background.png')"
		   }}>
				<input type="text" name="name" placeholder="Full Name" className="mt-5 mb-3" id="nameForm" />
				<input type="email" name="email" placeholder="E-mail" className="mb-3" id="emailForm" />
				<textarea name="message" placeholder="Your Message" id="messageForm"></textarea>
				<button className="mt-3 mb-5" id="button-send" onclick="sendContactMail()">
				Enviar
				</button>
			</div>
  );
 }

}

export default ContactForm;