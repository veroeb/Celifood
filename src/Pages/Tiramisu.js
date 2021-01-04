import React from 'react';

export default class Tiramisu extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Tiramisú
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tiramisu.jpg" alt="Tiramisú" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tiramisu_1.jpg" alt="Tiramisú" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tiramisu_2.jpg" alt="Tiramisú" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 40 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">120 Grs. de Galletitas tipo Biscuits</li>
                                <li className="ingredient py-1">2 Tazas de Café</li>
                                <li className="ingredient py-1">1 pote chico de Crema de leche</li>
                                <li className="ingredient py-1">1 Pote de Queso Crema </li>
                                <li className="ingredient py-1">Cacao en polvo</li>
                                <li className="ingredient py-1">Azúcar</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Preparar 2 tazas de café.</li>
                                <li className="ingredient py-2">Mojar en el café de a una las Biscuits de ambos lados y ponerlas como base en una fuente.</li>
                                <li className="ingredient py-2">Mezclar dos partes de Queso crema con dos de Azúcar y una de Crema batida a punto Chantilly y distribuir una parte sobre la base biscuits.</li>
                                <li className="ingredient py-2">Continuar alternando biscuits con la mezcla y terminar cn una capa de la mezcla de crema.</li>
                                <li className="ingredient py-2">Espolvorear con un poco de Cacao en polvo.</li>
                                <li className="ingredient py-2">Llevar a la heladera por unas horas y disfrutar!</li>
                                <li className="ingredient py-2">Se le puede agregar a gusto Canela en polvo o Chocolate rallado.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}