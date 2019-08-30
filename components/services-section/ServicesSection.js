import React from 'react';

import { SERVICES as services } from './services.data.js';

import ServicePreview from './../service-preview/ServicePreview';

const ServicesSection = () => (
   <div className="my-3 mx-5">
	    <div className="row mb-5 ">
		    {
		    	services.filter((service, i) => i < 2)
		    		.map(service => <div className="col-lg-6 col-12"> 
		    							<ServicePreview key={service.id} service={service}/>
	    							</div>
						)
		    }
	    </div>
	    <div className="row mb-5">
		    {
		    	services.filter((service, i) => i < 5 && i > 1)
		    		.map(service => <div className="col-lg-4 col-12"> 
		    							<ServicePreview key={service.id} service={service}/>
	    							</div>
						)
		    }
	    </div>
	    <div className="row">
		    {
		    	services.filter((service, i) => i > 4)
		    		.map(service => <div className="col-lg-6 col-12"> 
		    							<ServicePreview key={service.id} service={service}/>
	    							</div>
						)
		    }
	    </div>
   </div>
)

export default ServicesSection;