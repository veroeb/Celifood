import React from 'react';

export default class Pizza extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Pizza sin glúten
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/pizza_parahacer.jpg" alt="Pizza" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/pizza1.jpg" alt="Pizza" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/pizza2.jpg" alt="Pizza" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 30 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">4 cucharadas harina de arroz</li>
                                <li className="ingredient py-1">4 cucharadas maicena</li>
                                <li className="ingredient py-1">4 cucharadas leche en polvo</li>
                                <li className="ingredient py-1">1 cucharada royal</li>
                                <li className="ingredient py-1">1 pizca sal</li>
                                <li className="ingredient py-1">1/2 cucharada aceite</li>
                                <li className="ingredient py-1">1/2 taza leche</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Mezclar todos los ingredientes en un bowl, agregar la leche a lo último e ir viendo hasta que quede una masa chiclosa</li>
                                <li className="ingredient py-2">Calentar un sartén antiadherente, calentar a fuego medio y verter la mezcla</li>
                                <li className="ingredient py-2">Quedará una masa como canelón pero más gruesa, dejar calentar bien y darle la vuelta, en aprox 4 minutos tiene que cocinarse. Vigilarla porque se puede quemar</li>
                                <li className="ingredient py-2">Cubrir con salsa, queso, orégano y listo! Para un sabor más crocante pasar 5 minutos por horno a 180 grados</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}