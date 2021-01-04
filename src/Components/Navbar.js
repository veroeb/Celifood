import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {


    componentDidMount(){
        let header = document.getElementById("navbar-activation");
        let btns = header.getElementsByClassName("nav-link");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            });
        }
    }


    render(){
        return(
            <nav className = "navbar navbar-dark navbar-expand-lg sticky-top" >
                <div className="container px-3">
                    <a href="index.html" className="navbar-brand">Celifood</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto" id="navbar-activation">
                            <li className="nav-item"><Link to="index.html" className="nav-link active">Home</Link></li>
                            <li className="nav-item"><Link to="/recetas" className="nav-link">Recetas</Link></li>
                            <li className="nav-item"><Link to="/about-us" className="nav-link">Sobre Nosotros</Link></li>
                            <li className="nav-item"><Link to="/contacto" className="nav-link">Contacto</Link></li>
                            <li className="nav-item"><Link to="/recetas" className="nav-link"><i className="fa fa-search icon-nav" /></Link></li>
                        </ul>
                    </div>
                </div>
            </ nav>
        );
    }
}
