import React from 'react';

export default class CakePops extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Cake Pops
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/cake_pops.jpg" alt="Cake Pops" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/cake_pops_1.jpg" alt="Cake Pops" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/cake_pops_2.jpg" alt="Cake Pops" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 90 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">3/4 taza de Leche (de vaca o Almendras)</li>
                                <li className="ingredient py-1">2 Cdas. de jugo de Limón</li>
                                <li className="ingredient py-1">300 Grs. (2 tazas y media) de Premezcla</li>
                                <li className="ingredient py-1">1 y 1/4 taza de Azúcar</li>
                                <li className="ingredient py-1">1/2 Cdta. de Sal</li>
                                <li className="ingredient py-1">3/4 Taza de Manteca</li>
                                <li className="ingredient py-1">1 Cdta. de  Esencia de Vainilla</li>
                                <li className="ingredient py-1">1 Cda. de Ralladura de Limón</li>
                                <li className="ingredient py-1">1 Cda. de Polvo de hornear</li>
                                <li className="ingredient py-1">3 Huevos a temperatura ambiente</li>
                                <li className="ingredient py-1">Glaseado de Limón</li>
                                <li className="ingredient py-1">En lugar de preparar la torta de esta forma, puede utilizarse también la Premezcla de tu Bizcochuelo favorito</li>                                
                            </ul>
                        </div>
                        <h2 className="my-3">Para el glaseado</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">1/4 Taza de Manteca</li>
                                <li className="ingredient py-1">2 Tazas de Azúcar impalpable</li>
                                <li className="ingredient py-1">1 y 1/2 Cdas. de Jugo de Limón</li>
                                <li className="ingredient py-1">1/2 Cda. de Leche o un poco más si es necesario</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Para la decoración</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">500 Grs. Chocolate blanco o semiamargo</li>
                                <li className="ingredient py-1">Azúcar impalpable, blanca o de colores</li>
                                <li className="ingredient py-1">Nueces picadas, Cacao en polvo, Coco rallado, etc…</li>
                                <li className="ingredient py-1">Palitos tipo brochette</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Precalentar el horno a 180 grados.  Enmantecar y enharinar con prememzcla un molde de torta.</li>
                                <li className="ingredient py-2">Mezclar en un bowl la Leche y el Jugo de limón.</li>
                                <li className="ingredient py-2">Mezclar la Premezcla, con el Polvo de hornear y la Sal en otro bowl.</li>
                                <li className="ingredient py-2">En otro recipiente, batir la manteca y el azúcar (5 minutos con batidora eléctrica, un poco más a mano) hasta que quede suave y liviana. Agregar la Esencia de vainilla y la Ralladura de limón. Luego incorporar los huevos, uno por vez y mezclar luego de cada uno.</li>
                                <li className="ingredient py-2">Despacio agregar los ingredientes secos, alternando con la leche con limón y mezclar hasta que quede todo bien integrado.</li>
                                <li className="ingredient py-2">Poner en el molde y cubrir con papel aluminio.</li>
                                <li className="ingredient py-2">Llevar al horno de 60 a 70 minutos, hasta que el cuchillo salga limpio al pincharla en el centro.</li>
                                <li className="ingredient py-2">Retirar del horno. Dejar enfriar de 30 minutos a 1 hora y luego desmoldar. Quitar los bordes más tostados y descartarlos.</li>
                            </ol>
                        </div>
                        <h2 className="my-3">Para el glaseado</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Cortar la Manteca en cubos y colocar en un bowl.</li>
                                <li className="ingredient py-2">Agregar el Azúcar impalpable, el Jugo de limón y la Leche y batir a velocidad media hasta que esté suave. Agregar más leche si es necesario, hasta lograr una consistencia maleable.</li>
                                <li className="ingredient py-2">Cubrir y llevar a la heladera hasta usarla.</li>
                            </ol>
                        </div>
                        <h2 className="my-3">Cómo armar las tortitas</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Desgranar la torta en pequeños pedazos en un bowl (serán aproximadamente 4 tazas de torta). Agregar una taza del glaseado que preparamos (se pueden incorporar 1/4 taza de trocitos de chocolate o nueces muy pequeños si se desea). Ser cuidadosos con el agregado del glaseado, la mezcla no debe quedar muy húmeda, debe ser lo suficiente consistente para unirla bien y poder formar una bolita con las manos.</li>
                                <li className="ingredient py-2">Derretir el Chocolate a baño maría.</li>
                                <li className="ingredient py-2">Armar bolitas del tamaño de una pelotita de golf .  Mojar la punta de un palito con chocolate derretido, luego ir insertando una bolita en cada palito hasta el medio de la bolita.</li>
                                <li className="ingredient py-2">Colocar en una placa enmantecada y refrigerar.</li>
                                <li className="ingredient py-2">Una vez firmes, bañar cada bolita con Chocolate derretido (sumergiéndolas, para hacer combinaciones dejar en enfriar el primer chocolate y decorar con el otro chocolate con una cucharita).  </li>
                                <li className="ingredient py-2">Colocarlas nuevamente en la placa. Antes de que el chocolate se enfríe aprovechar para pegarle decoraciones y colocarlas en un jarro o taza para que quede paradas hasta que se sequen.</li>
                                <li className="ingredient py-2">Salen aproximadamente 15 tortitas.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}