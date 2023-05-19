import React from 'react'

function Home() {
  return (
   

<div className="col-md-9 " id="content-wrapper">
<div className="row">
<div className="col-md-12 p-0">


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
   </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/slide4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img/slide3.jpg" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>
		<div className='pl-3 pr-3 text-center'>
		<h2>Welcome</h2> 
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
		</div>
		<div className="vission-wrap pb-5">
		<div className="row ">
        <div className="col-md-4  ">
		<div className="icon-wrap"><img src="img/court-01.png"/></div>
		<h3>STATE LAWS <br/><small>Updated as on 20/01/2023</small></h3>
		</div>
		<div className="col-md-4  ">
		<div className="icon-wrap"><img src="img/court-02.png"/></div>
		<h3>COMMERCIAL COURTS</h3>
		</div>
		<div className="col-md-4  ">
		<div className="icon-wrap"><img src="img/court-03.png"/></div>
		<h3>e - COURTS</h3>
		</div>
		
		</div>
		</div>
		


    </div>
  )
}

export default Home