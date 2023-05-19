import React, { useEffect } from "react";
import $ from 'jquery';
import 'smartmenus'

function Sidenav() {

    useEffect(() => {
    
        $("#main-menu").smartmenus({
          subMenusSubOffsetX: 1,
          subMenusSubOffsetY: -8,
        });
      }, []);
  return (
    <>
      <div className="col-md-3 sidebar-menu p-0">
        <ul id="main-menu" className="sm sm-vertical sm-blue sm-blue-vertical">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Dept</a>
            <ul  >
              <li><a href="#" target="_blank">Organisational Chart</a></li>
            </ul>
          </li>
          <li>

            <a href="#">Ordinances / Bills / Acts</a>
            <ul  >
              <li><a href="#">Ordinances</a></li>
              <li><a href="#">Bills</a></li>
              <li><a href="#">Acts</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Admin Control Offices</a>
            <ul  >
              <li><a href="#">Advocate General's Office</a></li>
              <li><a href="#">Government Pleaders Office</a></li>
              <li><a href="#">Public Prosecutors Office</a></li>
              <li><a href="#">Administrator General &amp; Official Trustee</a></li>
              <li><a href="#">Advocates-on-Record, New Delhi</a></li>
              <li><a href="#">TS Legal Services Authority</a></li>
              <li><a href="#">Judicial Academy</a></li>
              <li><a href="#">Establishment of Courts</a></li>
            </ul>
          </li>

          <li>
            <a href="#">Advocate General's Office</a>
          </li>
          <li>
            <a href="#">Adaptation of Laws</a>
          </li>

          <li>
            <a href="#">Information Under RTI Act 2005</a>
            <ul  >
              <li><a href="#">4(1)(b) Information</a></li>
              <li><a href="#">Officers Designated Under RTI Act 2005</a></li>
            </ul>
          </li>


          <li>
            <a href="#">Law Officers of the High Court and State Level Courts</a>
          </li>

          <li>
            <a href="#">Law Officers of the District Courts</a>
          </li>

          <li>
            <a href="#">Advocates Welfare</a>
            <ul  >
              <li><a href="#">Advocates Welfare Fund</a></li>
              <li><a href="#">Advocates Clerks Welfare Fund</a></li>
              <li><a href="#">Telangana State Advocates Welfare Trust</a></li>
            </ul>
          </li>

          <li>
            <a href="#" target="_blank">Govt.Orders</a>
          </li>
          <li>
            <a href="#">Related Links</a>
            <ul  >
              <li><a href="#" target="_blank">Telangana State Portal</a></li>
              <li><a href="#" target="_blank">Supreme Court of India</a></li>
              <li><a href="#" target="_blank">High Court of Judicature at Hyderabad</a></li>
              <li><a href="#" target="_blank">Ministry of Law &amp; Justice, Govt. of India</a></li>
              <li><a href="#" target="_blank">Dept. of Justice, Govt. of India</a></li>
              <li><a href="#" target="_blank">Telangana State Legal Services Authority</a></li>
              <li><a href="#" target="_blank">Judicial Academy</a></li>
              <li><a href="#" target="_blank">NALSAR</a></li>
              <li><a href="#" target="_blank">ICADR</a></li>
              <li><a href="#" target="_blank">Telangana State District Courts</a></li>
              <li><a href="#" target="_blank">The National Legal Services Authority</a></li>
              <li><a href="#" target="_blank">National Portal of India</a></li>
              <li><a href="#" target="_blank">Law Commission of India</a></li>
              <li><a href="#" target="_blank">District Courts of Telangana</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Photo Gallery</a>
          </li>
          <li>
            <a href="#">Latest News</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidenav