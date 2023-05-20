import React from 'react'
import $ from 'jquery'

function fontSizer(){

  var $affectedElements = $('body'); // Can be extended, ex. $("div, p, span.someClass")

  // Storing the original size in a data attribute so size can be reset
  $affectedElements.each(function() {
    var $this = $(this);
    $this.data('orig-size', $this.css('font-size'));
  });
  
  $('#btn-increase').click(function() {
    changeFontSize(1);
  });
  
  $('#btn-decrease').click(function() {
    changeFontSize(-1);
  });
  
  $('#btn-orig').click(function() {
    $affectedElements.each(function() {
      var $this = $(this);
      $this.css('font-size', $this.data('orig-size'));
    });
  });
  
  function changeFontSize(direction) {
    $affectedElements.each(function() {
      var $this = $(this);
      $this.css('font-size', parseInt($this.css('font-size')) + direction);
    });
  }
  

}



function swapStyleSheet(sheet) {
  const themeStylesheet = document.getElementById('theme-stylesheet');
  if (themeStylesheet) {
    themeStylesheet.setAttribute('href', sheet);
  }
}

function Header() {

  return (
    <div>
  <header>

<div className="top-bar">

  <div className="container-fluid">
    <div className="row no-gutters">

      <div className="col-md-12">
       
        <div className="d-flex justify-content-between  ">
          <div className="d-flex">
          <button onClick="window.location.href='disabled.html'"> <i className="fa fa-wheelchair"></i></button>
          <button id="btn-decrease" onClick={fontSizer()}>A-</button>
          <button id="btn-orig" onClick={fontSizer()}>A</button>
          <button id="btn-increase" onClick={fontSizer()}>A+</button>
          <button className ="bg-dark" onClick={() => swapStyleSheet('../css/dark.css')}> A&nbsp;</button>
          <button onClick={() => swapStyleSheet('../css/custom.css')}>A&nbsp;</button>
         <input type="text" className="form-control search-inp ml-3" id="username" /> 
         <button type="submit" className="btn btn-primary search-btn ">Search</button>
         </div>
      <div className="d-flex">      
       {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
      </div>
</div>
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel">Official Login</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times"></i></button>
  </div>
  <div className="modal-body">
    <div className="mb-3">
      <label for="username" className="form-label">Username</label>
      <input type="text" className="form-control" id="username"  />
    </div>
    <div className="mb-3">
      <label for="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" />
    </div>
    <div className="mb-3">
     <button type="submit" className="btn btn-bg btn-primary mb-3">Login</button>
    </div>
    
  </div>
  
</div>
</div>
</div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
  <div className="row no-gutters ">

    <div className="col-md-8">
      <div className="logo">
        <img src="img/telanganalogo.png" alt="wd&cw logo" />

        <h1><span>Telangana State LAW DEPARTMENT</span>
            
        <p>Government of Telangana</p></h1>
      </div>
      </div>
    <div className="col-md-2 col-6">
      <div className="profiles">
        <img src="img/kcr-profile-picture.png" alt="KCR Photo"/>
        <h2>Sri K. Chandrashekar Rao</h2>
        <p>Hon'ble Chief Minister </p>
      </div>
    </div>
    <div className="col-md-2 col-6">
      <div className="profiles">
        <img src="img/Allola_Indrakaran_Reddy.jpg" alt="mbc logo" className="" />
        <h2>Sri. A. Indrakaran Reddy</h2>
        <p>Honble Minister for LAW </p>
      </div>
    </div>
     

</div>
</div>

 

</header>

    </div>
  )
}
export default Header

