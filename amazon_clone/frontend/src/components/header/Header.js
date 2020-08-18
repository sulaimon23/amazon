
import React, { Component } from 'react'




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
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div className="away">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente repellendus porro fuga illo. Magnam laboriosam quis ut reiciendis. Cumque fugit consequuntur labore voluptas corporis et necessitatibus fugiat vitae, neque perferendis numquam unde deleniti minus eligendi nostrum quas, accusantium architecto sunt ipsam sequi provident sapiente quae fuga sed! Doloremque natus consequuntur esse temporibus, provident, harum explicabo quisquam amet sit incidunt nesciunt eum veniam nemo dicta dignissimos cum aspernatur exercitationem neque. Qui doloremque quibusdam voluptatum consequuntur beatae quaerat reprehenderit doloribus tempore autem nesciunt hic asperiores nihil, soluta omnis laudantium eos obcaecati voluptate! Accusamus omnis ipsam quod eius sunt aliquid porro itaque?
    </div>
      </div>
    )
  }
}

export default Header
