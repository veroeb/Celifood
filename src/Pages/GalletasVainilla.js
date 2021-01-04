import React from 'react';

export default class GalletasVainilla extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Galletitas de Vainilla
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/galletas_vainilla.jpg" alt="Galletitas de Vainilla" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/galletas_vainilla_1.jpg" alt="Galletitas de Vainilla" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/galletas_vainilla_2.jpg" alt="Galletitas de Vainilla" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 30 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">190 Grs. de Premezcla</li>
                                <li className="ingredient py-1">1/2 Cdta. de Goma Xántica (si la premezcla no contiene)</li>
                                <li className="ingredient py-1">2 Cdtas. de Polvo de hornear</li>
                                <li className="ingredient py-1">1/4 Cdta. de Bicarbonato de sodio</li>
                                <li className="ingredient py-1">100 Grs. de Azúcar rubia</li>
                                <li className="ingredient py-1">115 Gr. de Manteca a temperatura ambiente</li>
                                <li className="ingredient py-1">1 Huevo batido a temperatura ambiente</li>
                                <li className="ingredient py-1">1 Cda. y 1 Cdta. de Esencia de vainilla</li>
                                <li className="ingredient py-1">2 Cdas. de Leche a temperatura ambiente</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Encender el horno a 160 grados. Enmantecar una fuente de horno y reservar.</li>
                                <li className="ingredient py-2">En un bowl colocar la Premezcla, la Goma Xántica, el Polvo de hornear, el Bicarbonato de sodio, la Sal, el Azúcar rubia. Mezclar bien.</li>
                                <li className="ingredient py-2">Agregar la Manteca, el Huevo, la Esencia de vainilla y batir para combinar bien.</li>
                                <li className="ingredient py-2">Agregar la Leche y seguir mezclando hasta armar la masa.</li>
                                <li className="ingredient py-2">Colocar la masa en una manga y armar cada galleta directamente sobre la placa de horno, separadas un poco unas de otras ya que se agrandarán un poco en la cocción.</li>
                                <li className="ingredient py-2">Hornear por aproximadamente 15 minutos o hasta obtener un color marrón dorado. Dejar enfriar antes de comer.</li>
                                <li className="ingredient py-2">Conservar en un tarro de vidrio.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}