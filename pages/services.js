// import { Link } from '../routes'
import Layout from './../components/layout/Layout';
import ServicesSection from './../components/services-section/ServicesSection';

class Index extends React.Component{

  constructor(){
    super();
    }

  render(){

    return(
      <Layout title='Services | Dev Solutions'> 
      	<h1 className="text-center"><b>SERVICES</b></h1>  
      	<ServicesSection/> 
      </Layout>)
  }

}

export default Index;
