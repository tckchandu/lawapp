import React from 'react'

function Footer() {
  return (
  <>
    <div className="site-footer footer" >

<div className="container-fluid">
  <div className="row align-items-start mb-3">

    <div className="col-lg-5">

      <div className="footer-wrap">
      <div className="footer-logo">
      <a href='./index.html' className='opacity-1'>
        <img src='img/telanganalogo.png' alt='logo'/>
      </a>
    </div>

    <div className="footer-address">
      <p> <strong>Law Department</strong><br/>
     
       8th Floor, D-Block,BRKR Buildings,<br/>
       T.S. Secretariat,<br/>
       HYDERABAD 500 063.<br/>
        Contact No. 040-23450476,<br/>
        e-Mail:  secy-law@telangana.gov.in
      </p>
    </div>
  </div>

    </div>
    <div className="col-lg-2">
      <h5 className='footer-title'>Policies</h5>
      <ul>
        <li><a target="_blank" href='#'>National Portal</a></li>
        <li><a target="_blank" href='#'>TS Portal</a></li>
        <li><a target="_blank" href='#'>Policies</a></li>
        <li><a target="_blank" href='#'>Terms & Conditions</a></li>
        <li><a target="_blank" href='#'>Disclaimer</a></li>
        
        

      </ul>
    </div>
    <div className="col-lg-2">
    <h5 className='footer-title'>Quick Links</h5>
      <ul>


        <li><a target="_blank" href='index.html'> Home</a></li>
        <li><a target="_blank" href='aboutus.html'>About Us</a></li>
        <li><a target="_blank" href='faqs.html'>FAQs</a></li>
        <li><a target="_blank" href='gos.html'>GO's and Acts</a></li>

      </ul>
    </div>
    <div className="col-6 col-lg-3">
      <h5 className='footer-title'>Reach Us </h5>
      <ul>
        <li><a target="_blank" href='mail'><img src="img/flat-email-icon.png" />
             secy-law@telangana.gov.in</a></li>
        <li><a target="_blank" href='mail'><img src="img/phone.png" /> Off:- 040-23450476 </a>
        </li>
       


      </ul>
    </div>
</div>

<div className="row">
<div className="col-md-6 text-center">

</div>
<div className="col-md-6 text-end">
Visitors Count:   23545
<p className=""> Last updated :  12/05/2023 </p>
</div>
</div>

  <div className="row border-top">

    <div className="col-md-6">
      <p>Copyright 2023 Law Department<br/>
        Content owned, maintained and updated by Law Department
        </p>

    </div>
    <div className="col-md-6 ">
      <div>

        <p className="pt-2 text-white text-end"> Designed & Developed by : <img src="img/cgg_logo.png"/> </p>

      </div>
    </div>
  </div>

</div>

</div>
    
    </>
  )
}

export default Footer