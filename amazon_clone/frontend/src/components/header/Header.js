
import React, { Component } from 'react'
import './headerStyle.css'

export class Header extends Component {
  render() {


    function openHandler (){
      document.getElementById("main").style.marginLeft = "25%";
      document.getElementById("mySidebar").style.width = "25%";
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("openNav").style.display = 'none';
    }
    
    function closeHandler(){
      document.getElementById("main").style.marginLeft = "0%";
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("openNav").style.display = "inline-block";
    }



    return (
        <>
        <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">
        <button onClick={closeHandler} className="w3-bar-item w3-large">Close &times;</button>
          <a href="#" className="w3-bar-item w3-button">Link 1</a>
          <a href="#" className="w3-bar-item w3-button">Link 2</a>
          <a href="#" className="w3-bar-item w3-button">Link 3</a>
        </div>
      <div className="main">
      <button id="openNav" className="w3-button  w3-xlarge" onClick={openHandler}>☰</button>
      <a>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias enim, asperiores doloribus nam fuga ullam similique commodi in nobis recusandae ipsa, rerum placeat facilis molestiae dolores earum cum. Expedita vero tempora, voluptates fugit enim exercitationem, possimus facilis doloribus repudiandae ratione recusandae, quia nostrum labore eligendi? Velit, voluptatum. Fugiat suscipit quibusdam laudantium exercitationem officiis, sit non aliquid dolor laboriosam. Ipsa minima harum eveniet! Saepe nesciunt repellendus fugiat voluptatem. Eos repellendus itaque illo. Quibusdam, nisi ipsum quo quae soluta maxime hic? Perferendis nostrum placeat minus, magnam corporis eaque temporibus facilis? Ad architecto fugiat eius iure minima veritatis asperiores! Corrupti, perspiciatis deleniti?</a>
      </div>
      </>
    )
  }
}

export default Header
