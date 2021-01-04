import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="mt-0">
                    <div className="container">
                        <div className="row text-light text-center py-4">
                            <div className="col-lg-4 px-4 my-auto">
                                <a href="index.html" className="footer-brand">Celifood</a>
                                <p className="lead">Tus recetas celíacas</p>
                                <ul className="social pb-4 pb-lg-auto mx-auto">
                                    <li><a href="/"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="/"><i className="fa fa-instagram" /></a></li>
                                    <li><a href="/"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="/"><i className="fa fa-youtube" /></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 px-4 my-4">
                                <h3 className="border-top border-bottom w-75 mx-auto py-3 mb-4">Links</h3>
                                <p><Link to="/" rel="noopener noreferrer">Home</Link></p>
                                <p><Link to="/recetas" target="_blank" rel="noopener noreferrer">Recetas</Link></p>
                                <p><Link to="/about-us" rel="noopener noreferrer">Sobre Nosotros</Link></p>
                                <p><Link to="/contacto" rel="noopener noreferrer">Contacto</Link></p>
                            </div>
                            <div className="col-lg-4 px-4 my-4">
                                <h3 className="border-top border-bottom w-75 mx-auto py-3 mb-4">Contáctanos</h3>
                                <p>2613 0000</p>
                                <p>vecheza@gmail.com</p>
                                <p>123 Calle Sur</p>
                                <p>Montevideo, Uruguay</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="name">
                    <p><a href>© Veronica Echezarreta</a></p>
                </div>
            </div>
        );
    }
}