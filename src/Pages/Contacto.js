import React from 'react';

export default class Contacto extends React.Component {

    EnviarMensaje = (event) => {
        alert("Se ha enviado el mensaje exitosamente");
    }

    render() {
        return (

            <div>
                <div className="contacto-bg">
                    <div className="row py-0 py-sm-3">
                        <div className="col-12 text-center my-5">
                            <h1 className="text-light text-uppercase py-3">
                                Contactanos
                            </h1>
                            {/* <div className="border-top border-light w-25 mx-auto pb-5" /> */}
                            <h4 className="pb-5">Cualquier consulta no dude en comunicarse con nosotros</h4>
                        </div>
                    </div>
                </div>

                <div className="container my-5 pb-4 pt-4">
                    <div className="row py-0 pb-md-3 pb-lg-5">
                        <div className="col-12 text-center mt-1">
                            <form className="needs-validation" noValidate>
                                <div className="form-row justify-content-center">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationTooltip01">Nombre</label>
                                        <input type="text" className="form-control" id="validationTooltip01" placeholder="Veronica" required />
                                        {/* <div className="valid-tooltip">
                                            Looks good!
                                        </div> */}
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationTooltip02">Email</label>
                                        <input type="email" className="form-control" id="validationTooltip02" placeholder="@" required />
                                        {/* <div className="valid-tooltip">
                                            Looks good!
                                        </div> */}
                                    </div>
                                    
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="col-md-8 mb-3">
                                        <label htmlFor="validationTooltip03">Asunto</label>
                                        <input type="text" className="form-control" id="validationTooltip03" placeholder="" required />
                                        
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="col-md-8 mb-3">
                                        <label htmlFor="validationTooltip03">Mensaje</label>
                                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
                                    </div>
                                </div>
                                <button className="btn btn-success px-4" type="submit" onClick={this.EnviarMensaje}>Enviar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            

        );
    }
}