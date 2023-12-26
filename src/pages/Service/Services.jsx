import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Services.css";
import Single_service from "../../componetns/Single-service/Single_service";
import { serviceData1, serviceData2, serviceData3, serviceData4, serviceData5, serviceData6, serviceData7, serviceData8 } from "../../constant/Services-data";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="service-page">
      <div className="Service-banner">
        <div className="container">
          <h3 className="page-title">All Serives</h3>
          <p className="page-path">
          <Link to='/' className="home-path" >Home</Link>
           / Services</p>
        </div>
      </div>
      <div className="container">
     
    <div className="d-flex align-items-start gap-5 all-services ">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service1" type="button" role="tab" aria-controls="v-pills-service1" aria-selected="true">Business Setup Services</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service2" type="button" role="tab" aria-controls="v-pills-service2" aria-selected="false">Visa Services</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service3" type="button" role="tab" aria-controls="v-pills-service3" aria-selected="false" >PRO Services</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service4" type="button" role="tab" aria-controls="v-pills-service4" aria-selected="false">Emirates ID</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service5" type="button" role="tab" aria-controls="v-pills-service5" aria-selected="false">Medical Services</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service6" type="button" role="tab" aria-controls="v-pills-service6" aria-selected="false">Insurance Services</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service7" type="button" role="tab" aria-controls="v-pills-service7" aria-selected="false">Attestation Services</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-service8" type="button" role="tab" aria-controls="v-pills-service8" aria-selected="false">Other Services</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-service1" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"><Single_service data={serviceData1}/> </div>
    <div class="tab-pane fade" id="v-pills-service2" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"><Single_service data={serviceData2}/></div>
    <div class="tab-pane fade" id="v-pills-service3" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0"><Single_service data={serviceData3}/></div>
    <div class="tab-pane fade" id="v-pills-service4" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0"><Single_service data={serviceData4}/></div>
    <div class="tab-pane fade" id="v-pills-service5" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0"><Single_service data={serviceData5}/></div>
    <div class="tab-pane fade" id="v-pills-service6" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0"><Single_service data={serviceData6}/></div>
    <div class="tab-pane fade" id="v-pills-service7" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0"><Single_service data={serviceData7}/></div>
    <div class="tab-pane fade" id="v-pills-service8" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0"><Single_service data={serviceData8}/></div>
  </div>
</div>

                                                              
   
        </div>
      </div>
  
  );
};

export default Services;
