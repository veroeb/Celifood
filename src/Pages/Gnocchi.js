import React from 'react';

export default class Gnocchi extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Ñoquis de Almidón de Maíz sin Gluten
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/gnocchi.jpg" alt="Ñoquis" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/gnocchi_1.jpg" alt="Ñoquis" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/gnocchi_2.jpeg" alt="Ñoquis" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 30 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">500 Grs. de Almidón de maíz</li>
                                <li className="ingredient py-1">500 Grs. de Papas hervidas</li>
                                <li className="ingredient py-1">Sal, cantidad necesaria</li>
                                <li className="ingredient py-1">1 Cda. de Aceite de Maíz</li>
                                <li className="ingredient py-1">30 Grs. de Manteca</li>
                                <li className="ingredient py-1">100 Grs. de Queso blanco</li>
                                <li className="ingredient py-1">1 Huevo</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Hacer un puré con las papas calientes. Agregar la sal, el aceite, la manteca y el queso blanco. Mezclar e incorporar el huevo batido.</li>
                                <li className="ingredient py-2">Mantener la preparación calentita. Agregar la mitad del allmidón de maíz. Mezclar y dejar reposar para que absorba la mezcla y empiece a enfriar. Irá tomando consistencia.</li>
                                <li className="ingredient py-2">Agregar de a poco el resto del almidón y amasar.</li>
                                <li className="ingredient py-2">Cuando tenga la consistencia deseada, dividir en partes. Hacer con cada parte un rollito y cortar los ñoquis. Darles forma con un corta ñoquis o con un tenedor.</li>
                                <li className="ingredient py-2">Hervir abundante agua con sal y cocinar allí los ñoquis.</li>
                                <li className="ingredient py-2">Cuando suben dejar hervir un momentito. Escurrirlos y pasarlos a una fuente con manteca cortada en trocitos.</li>
                                <li className="ingredient py-2">Servir con salsa, crema o simplemente con queso!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}