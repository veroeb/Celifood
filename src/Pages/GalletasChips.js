import React from 'react';

export default class GalletasChips extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Galletitas Chips
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/galletas_chips.png" alt="Galletitas Chips" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/galletas_chips_1.jpg" alt="Galletitas Chips" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/galletas_chips_2.jpg" alt="Galletitas Chips" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 30 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">225 Grs. de chocolate semiamargo picado o en chips.</li>
                                <li className="ingredient py-1">280 Grs. de Premezcla</li>
                                <li className="ingredient py-1">1 Cdta. de Goma xántica. (si la premezcla no contiene)</li>
                                <li className="ingredient py-1">1/2 Cdta. de Polvo de hornear.</li>
                                <li className="ingredient py-1">1 Cdta. de Bicarbonato de sodio</li>
                                <li className="ingredient py-1">1/2 Cdta. de Sal</li>
                                <li className="ingredient py-1">165 Grs. de Azúcar rubia</li>
                                <li className="ingredient py-1">150 Grs. de Azúcar</li>
                                <li className="ingredient py-1">70 Grs. de Aceite de coco</li>
                                <li className="ingredient py-1">65 Grs. de Compota de manzana (manzana en trozos cocida con azúcar y poca agua)</li>
                                <li className="ingredient py-1">30 Ml. de Leche de almendras (u otra)</li>
                                <li className="ingredient py-1">1 Cdta. de Esencia de vainilla</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Encender el horno a 180 grados.</li>
                                <li className="ingredient py-2">En un bowl colocar la Premezcla, la Goma Xántica, el Polvo de hornear, el Bicarbonato de sodio, la Sal y el Azúcar y mezclar bien.</li>
                                <li className="ingredient py-2">Agregar el Azúcar rubia, mezclar y romper los terrones.</li>
                                <li className="ingredient py-2">Crear un hueco en el centro de los ingredientes secos y agregar el Aceite de coco. Presionar para integrar.</li>
                                <li className="ingredient py-2">Agregar la Compota, la Leche y la Esencia de vainilla, mezclar bien.</li>
                                <li className="ingredient py-2">Agregar el chocolate y mezclar hasta que se distribuyan bien. Amasar hasta unir bien la masa.</li>
                                <li className="ingredient py-2">Dividir la masa en 20 galletitas aproximadamente y hacer una bolita que se aplasta luego en un disco.</li>
                                <li className="ingredient py-2">Llevar a la placa de horno enmantecada.</li>
                                <li className="ingredient py-2">Hornear en el centro del horno hasta dorar (10 a 12 minutos).</li>
                                <li className="ingredient py-2">Quitar del horno y dejar enfriar 5 minutos antes de servir.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}