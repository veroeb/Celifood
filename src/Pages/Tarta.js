import React from 'react';

export default class Tarta extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Tarta sin glúten
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tarta_parahacer.jpg" alt="Tarta salada" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tarta1.jpg" alt="Tarta salada" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tarta2.jpeg" alt="Tarta salada" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 20 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">3 papas</li>
                                <li className="ingredient py-1">2 huevos</li>
                                <li className="ingredient py-1">Verduras a gusto</li>
                                <li className="ingredient py-1">Queso a gusto</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Rallar las 3 papas en un bol, mezclar con 1 huevo. Agregar sal y pimienta a gusto y disponer en una fuente previamente aceitada. Llevar a horno medio durante 15 minutos.</li>
                                <li className="ingredient py-2">Para el relleno yo salteé cebollas, zanahoria rallada y un paquete de espinacas. Le agregamos un huevo y a mí me gusta ponerle una cucharada de queso crema y dados de queso cremoso. También se le puede poner queso rallado.</li>
                                <li className="ingredient py-2">Ponemos la preparación sobre la base de papas pre cocida y la llevamos a horno moderado durante 20 minutos.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}