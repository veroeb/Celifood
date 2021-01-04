import React from 'react';

export default class Tortellinis extends React.Component {
    render(){
        return(
            <div className="container recetas">
                <div className="row py-0 py-sm-3 pt-lg-3">
                    <div className="col-12 text-center text-uppercase mt-5">
                        <h1 className="text-dark pb-3">
                            Tortellinis
                        </h1>
                        <div className="border-top border-dark w-25 mx-auto" />
                    </div>
                </div>
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 pb-lg-5">
                    <div className="col-sm-8 text-center">
                        {/* <div class="col-md-4 text-center mx-5"> */}
                        <div className="container gallery">
                            <figure className="gallery_item gallery_item-1">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tortellinis.jpg" alt="Tortellinis" />
                            </figure>
                            <figure className="gallery_item gallery_item-2">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tortellinis_1.jpg" alt="Tortellinis" />
                            </figure>
                            <figure className="gallery_item gallery_item-3">
                                <img id="img-pizza" className="mx-auto gallery_img" src="/img/tortellinis_2.jpg" alt="Tortellinis" />
                            </figure>
                        </div>
                        <p id="cooking-time-p" className="my-4"><i className="fa fa-clock" /> Tiempo de preparación: 40 min</p>
                        <h2 className="my-3">Ingredientes</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">375 Grs. de Premezcla y algo más para enharinar</li>
                                <li className="ingredient py-1">1 Cdta. de Goma Xántica (si la premezcla no contiene)</li>
                                <li className="ingredient py-1">45 Grs. de Fécula de Mandioca</li>
                                <li className="ingredient py-1">2 Huevos y 2 Yemas batidos a temperatura ambiente</li>
                                <li className="ingredient py-1">1 Cda. de Aceite de Oliva</li>
                                <li className="ingredient py-1">1/4 Taza de Agua tibia</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Para el relleno</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">225 Grs. de Ricota fresca</li>
                                <li className="ingredient py-1">Albahaca picada</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Para servir</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list">
                            <ul className="my-3 text-left">
                                <li className="ingredient py-1">2 Zucchinis</li>
                                <li className="ingredient py-1">50 Grs. de Queso Parmiggiano o Reggianito</li>
                                <li className="ingredient py-1">Sal y Aceite de Oliva</li>
                            </ul>
                        </div>
                        <h2 className="my-3">Pasos</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">En un bowl colocar la Premezcla, la Goma Xántica, la Harina de Mandioca y mezclar para combinar bien.</li>
                                <li className="ingredient py-2">Hacer un agujero en el centro de los ingredientes secos e incorporar los Huevos, el Aceite de Oliva y el Agua tibia. Mezclar para combinar.</li>
                                <li className="ingredient py-2">La masa debe unirse, si hay partes secas añadir algo más de agua de a cucharaditas hasta que se integren y la masa se quede unida al apretarla con los dedos. Amasar hasta que quede suave y maleable. Si se siente dura adherir agua de a gotas y amasar hasta integrar y ablandar.</li>
                                <li className="ingredient py-2">Cubrir el bollo con film o una bolsa y dejarlo asentar a temperatura ambiente por 10 minutos. La masa aboserberá el agua y se le irá lo pegajoso. Tomar la mitad del bollo y reservar una mitad aún envuelta.</li>
                                <li className="ingredient py-2">Colocar la mitad que tomamos en una superficie ligeramente enharinada y espolvorearla por encima con algo más de premezcla. Amasar con un palo hasta formar un rectángulo de aproximadamente 5 mm de alto. Dar vuelta la masa y continuar estirando hasta que tenga aproximadamente 2 mm de altura.</li>
                                <li className="ingredient py-2">Usando un cortante redondo, cortar discos de aproximadamente 8 cm de diámetro. Tomar todos los sobrantes de masa y volver a estirarlos para sacar más discos. No enharinar demasiado en el proceso.</li>
                                <li className="ingredient py-2">Hacer lo mismo con la masa reservada.</li>
                            </ol>
                        </div>
                        <h2 className="my-3">Armado y relleno</h2>
                        <div className="border-top border-dark w-80 mx-auto" />
                        <div className="ingredients-list pb-5">
                            <ol className="my-3 text-left" type={1}>
                                <li className="ingredient py-2">Colocar los ingredientes del relleno en un bowl y mezclarlos bien para combinar. Colocar en el centro de cada disco aproximadamente 1/2 cucharadita de té de relleno. Humedecer los bordes de la masa con los dedos mojados y doblar a la mitad, uniendo los bordes y sacando el aire del interior.  Quedará como una pequeña empanadita. Luego doblar sobre si misma para unir los bordes por encima “enrollando” la empanadita para darle forma a los Tortellinis.</li>
                                <li className="ingredient py-2">Para la cocción llenar una olla con agua, agregarle sal y llevar a ebullición. Colocar la pasta y revolver para evitar que se vayan al fondo. Tal vez se deba cocinar en tandas, dependiendo del tamaño de la olla. Hervir por alrededor de 2 minutos o hasta que los Tortellinis floten. Retirar y escurrir.</li>
                                <li className="ingredient py-2">Rociar con aceite de oliva. Servir con el Zucchini y el Queso cortados en finas láminas con un pelapapas o rallador. Disfrutar!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}