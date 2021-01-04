import React from 'react';

export default class TortaFrutas extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Torta de frutas
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/torta_parahacer.jpg" alt="Torta de frutas" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/torta_1.jpg" alt="Torta de frutas" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/torta_2.jpg" alt="Torta de frutas" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 40 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">200 Grs. de Premezcla</li>
                                <li className="ingredient py-1">200 Grs. de Azúcar</li>
                                <li className="ingredient py-1">1 Cdta. de Polvo de hornear</li>
                                <li className="ingredient py-1">1/4 Cdta. de Goma xántica</li>
                                <li className="ingredient py-1">3 Huevos</li>
                                <li className="ingredient py-1">200 Grs. de Manteca</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Para el relleno</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left pb-5">
                                <li className="ingredient py-1">100 Grs. de Manteca</li>
                                <li className="ingredient py-1">140 Grs. de Azúcar impalpable</li>
                                <li className="ingredient py-1">1 Cdta. de Esencia de Vainilla</li>
                                <li className="ingredient py-1">Frutas a gusto</li>
                                <li className="ingredient py-1">También se puede rellenar con Mermelada de frutas!</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Precalentar el horno a 180 grados.</li>
                                <li className="ingredient py-2">Combinar todos los ingredientes de la torta en un bowl y procesar hasta obtener una masa suave. Si lo hacemos a mano, mezclar los secos, luego batir los húmedos e incorporarlos.</li>
                                <li className="ingredient py-2">Enmantecar un molde circular (esto es a gusto) de 20cm de diámetro.</li>
                                <li className="ingredient py-2">Hornear por 30 minutos (se puede hornear en dos partes, para luego tener dos pisos, serán 20 minutos por piso) o hasta que esté dorada y al introducir un cuchillo salga limpio.</li>
                                <li className="ingredient py-2">Realizar el relleno batiendo bien todos los ingredientes.</li>
                                <li className="ingredient py-2">Una vez que la torta esté fría, rellenar.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}