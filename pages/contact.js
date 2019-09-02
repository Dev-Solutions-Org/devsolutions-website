// import { Link } from '../routes'
import Layout from './../components/layout/Layout';
import ContactForm from './../components/contact-form/ContactForm';

class Index extends React.Component{

  constructor(){
    super();
    }

  render(){

    return(
      <Layout title='Contact | Dev Solutions'>    
      	<h1 className="text-center"><b>CONTACT</b></h1>
      	<div className="row">
      		<ContactForm/>
      		<div className="col-12 col-lg-6 mb-3">
      			<img src="./../static/green-logo.jpg" className="p-3 img-contact"/>
      		</div>
      	</div>
      </Layout>)
  }
}

export default Index;
