import React from 'react';

export default class HamburguesaQuinoa extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Hamburguesa de Quinoa
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/hamburguesa_de_quinoa_parahacer.jpg" alt="Hamburguesa de Quinoa" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/hamburguesa_de_quinoa_1.jpg" alt="Hamburguesa de Quinoa" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/hamburguesa_de_quinoa_2.jpg" alt="Hamburguesa de Quinoa" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 30 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">1 Cda. de Aceite de Oliva</li>
                                <li className="ingredient py-1">1/2 Taza de Cebolla picada</li>
                                <li className="ingredient py-1">1 Taza de Zuchini picado</li>
                                <li className="ingredient py-1">1 Taza de zanahoria rallada chiquita</li>
                                <li className="ingredient py-1">1 y 1/2 Taza de Champignones picados</li>
                                <li className="ingredient py-1">2 dientes de Ajo picados</li>
                                <li className="ingredient py-1">2 tazas de Quinoa cocida</li>
                                <li className="ingredient py-1">1 Cdta. de Jugo de limón</li>
                                <li className="ingredient py-1">1/2 Cdta. de Sal</li>
                                <li className="ingredient py-1">1/4 Cdta. de Pimienta</li>
                                <li className="ingredient py-1">2 Huevo batidos</li>
                                <li className="ingredient py-1">2 Cdas. de Almidón de maíz</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Calentar en la sartén el Aceite y agregar la Cebolla, el Zucchini, la Zanahoria, los Champignones y el Ajo. Saltear por 7 u 8 minutos.</li>
                                <li className="ingredient py-2">Traspasar a un bowl grande. Agregar la 2 tazas de Quinoa, la Cdta. de Jugo de limón, la Sal y Pimienta, los Huevos y el Almidón de maíz. Mezclar muy bien para combinar.</li>
                                <li className="ingredient py-2">Limpiar la sartén y volver a acitar. Armar 6 hamburguesas con la mezcla, dándole forma a los bordes y la superficie con una espátula para compactarlas bien. </li>
                                <li className="ingredient py-2">Colocar en la sartén caliente y presionar con la espátula. Cocinar de un lado por 4 minutos, cuando sentimos que está firme, dar vuelta con la espátula y cocinar del otro lado.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}