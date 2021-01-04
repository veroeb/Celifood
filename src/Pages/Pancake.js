import React from 'react';

export default class Pancake extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Panqueques sin glúten
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/pancakes_parahacer.jpg" alt="Pancake" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/pancake1.jpg" alt="Pancake" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/pancake2.jpg" alt="Pancake" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 20 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">1 taza de mezcla de harinas o premezcla que usen</li>
                                <li className="ingredient py-1">2 cucharadas soperas de azúcar</li>
                                <li className="ingredient py-1">2 cucharaditas de polvo de hornear</li>
                                <li className="ingredient py-1">1/4 cucharadita de sal</li>
                                <li className="ingredient py-1">1 huevo</li>
                                <li className="ingredient py-1">2 cucharadas de aceite</li>
                                <li className="ingredient py-1">1/2 taza de leche</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Usar una vaso mezclador porque permite guardar la mezcla para el día siguiente, si se hacen todos juntos los que no se consumen no quedan lindos al otro día.</li>
                                <li className="ingredient py-2">Poner la leche, la sal, el aceite y el huevo, luego la "harina", el polvo de hornear y el azúcar.</li>
                                <li className="ingredient py-2">Mezclar bien, dejar reposar un ratito en la heladera.</li>
                                <li className="ingredient py-2">Calentar la sarten de teflon y hechar un poquito de la mezcla en cuanto se vean burbujas subiendo a la superficie dar vuelta</li>
                                <li className="ingredient py-2">Servir calientes, en este caso todavía tenía maple syrup, pero puede ser dulce de leche caliente, manteca y alguna mermelada, eso va al gusto!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}