import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Carousel extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row py-0 py-md-3 py-lg-5">
                        <div className="col-12 text-center text-uppercase mt-5">
                            <h1 className="text-dark pb-3">
                                Las recetas más populares
                            </h1>
                            <div className="border-top border-dark w-25 mx-auto" />
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide d-none d-md-block" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Link to="/pizza">
                                <img className="d-block w-100 mx-auto" src="/img/pizza.png" alt="First slide" />
                                {/* <img src="img/bizcocho-sin-gluten.jpg" class="d-block w-20 mx-auto" alt=""> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="my-2">Pizza sin glúten</h4>
                                    {/* <p>...</p> */}
                                </div>
                            </Link>
                        </div>
                        <div className="carousel-item">
                            <Link to="/tarta">
                                <img className="d-block w-100 mx-auto" src="/img/tarta.png" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="my-2">Tarta sin glúten</h4>
                                    {/* <p>...</p> */}
                                </div>
                            </Link>
                        </div>
                        <div className="carousel-item">
                            <Link to="/pancake">
                                <img className="d-block w-100 mx-auto" src="/img/pancakes.png" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h4 className="my-2">Panqueques sin glúten</h4>
                                    {/* <p>...</p> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/*Cards para ver en pantallas menores a md*/}
                <div className="container pb-4 d-none d-sm-block d-md-none d-block d-sm-none">
                    <div className="row pt-3 pb-5 text-center">
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Pizza sin glúten</h4>
                            <img src="img/pizza_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="pizza.html" className="btn btn-success btn-lg mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Tarta sin glúten</h4>
                            <img src="img/tarta_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3"></p> */}
                            <a href="tarta.html" className="btn btn-success btn-lg mt-4 px-5">Ver receta</a>
                        </div>
                        <div className="col-lg-4 p-4">
                            <h4 className="my-4">Panqueques sin glúten</h4>
                            <img src="img/pancakes_sm.png" alt="" className="w-100 rounded" />
                            {/* <p class="lead pt-3">Pan de maíz</p> */}
                            <a href="pancake.html" className="btn btn-success btn-lg mt-4 px-5">Ver receta</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}