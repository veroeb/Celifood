import React from 'react';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-us">
                <div className="about-us-bg">
                    <div className="row py-0 py-sm-3 pt-lg-5">
                        <div className="col-12 text-center my-5">
                            <h1 className="text-light text-uppercase py-3">
                                Sobre Nosotros
                            </h1>
                            {/* <div className="border-top border-light w-25 mx-auto pb-5" /> */}
                            <h4 className="pb-5">Buscando facilitarle la vida a las personas celíacas</h4>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-sm-center pt-5 py-0 py-sm-3 py-lg-5">
                    <div className="col-md-9 text-center mx-5 py-5">
                        <p>Este emprendimiento se fundamenta en simplificar las distintas búsquedas de todo tipo de recetas favoreciendo a aquellos pacientes con esta patología quienes creen, en principio, que es mucho más difícil acceder a una alimentación adecuada, por lo cuál les demostramos que hay muchas recetas fáciles, ricas y sabrosas, y vivir sin mayores inconvenientes.
                        </p>
                        <br />
                        <p>En la página encontrarán gran variedad de recetas, desde entradas, pasando por platos principales y llegando a exquisitos postres.
                        </p>
                        <br />
                        <p>
                            Como verán, la única dificultad que podemos encontrar en este tipo de alimentos (que son los medicamentos de esta enfermedad) será el costo de ellos. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}