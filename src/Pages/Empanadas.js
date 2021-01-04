import React from 'react';

export default class Empanadas extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Empanadas
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/empanadas_parahacer.jpg" alt="Empanadas" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/empanadas_1.jpg" alt="Empanadas" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/empanadas_2.jpg" alt="Empanadas" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 50 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">1/3 Tza. de Vino blanco</li>
                                <li className="ingredient py-1">2 Cdtas. de Vinagre de manzana</li>
                                <li className="ingredient py-1">2 Huevos batidos</li>
                                <li className="ingredient py-1">420 Grs. de Premezcla Universal</li>
                                <li className="ingredient py-1">1 y 1/2 Cdta. de Goma xántica</li>
                                <li className="ingredient py-1">1 y 1/2 Cdta. de Sal</li>
                                <li className="ingredient py-1">130 Grs. de Manteca blanda</li>
                                <li className="ingredient py-1">1 Huevo batido con 1 Cda. de agua</li>
                                <li className="ingredient py-1">Relleno a gusto</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">En un bowl colocar el Vino, el Vinagre y los Huevos y batir bien. Reservar.</li>
                                <li className="ingredient py-2">En otro bowl grande mezclar la Premezcla, la Goma Xántica, y la Sal y mezclar bien. Agregar la manteca e integrar muy bien desarmando los grumos con los dedos. Crear un hueco en el centro de los ingredientes secos y agregar los húmedos reservados. Mezclar hasta integrarlos muy bien. Formar con las manos un bollo, envolverlo en film y llevar a la heladera por 30 minutos.</li>
                                <li className="ingredient py-2">Retirar de la heladera y llevar a una superficie enharinada. Lo ideal es dividirla en dos y trabajar primero una parte y luego la otra.</li>
                                <li className="ingredient py-2">Estirar la masa a un rectángulo, doblar sobre si misma como un papel y volver a estirar un rectángulo de aproximadamente 1 cm de espesor. Cortar los círculos para armar cada empanada. La masa sobrante volver a trabajarla para hacer más círculos.</li>
                                <li className="ingredient py-2">Estirar con el palo un poco más cada círculos.</li>
                                <li className="ingredient py-2">Hornear hasta que comiencen a dorarse.</li>
                                <li className="ingredient py-2">Es ideal usarlos el mismo día, pero se pueden guardar en la heladera con separadores para que no se peguen entre ellos.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}