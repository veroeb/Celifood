import React from 'react';

import Card from '../Components/Card';
// import '../css/recetas.css';

export default class Recetas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            recetas: [],
            recetasQ: [],
            titulo: "",
            isLoaded: false,
            q: ""
        }
    }

    componentDidMount(){
        this.obtenerRecetasAPI();
    }

    buscar = (event) => {
        this.setState({q: event.target.value});
        let q = event.target.value;
        let recetasQAux = [];
        for(let index = 0; index < this.state.recetas.length; index++){
            let receta = this.state.recetas[index];
            if(q === "todas"){
                recetasQAux.push(receta);
            }
            else if(receta.titulo.toLowerCase().includes(q.toLowerCase()) || receta.tipo.toLowerCase().includes(q.toLowerCase())){
                recetasQAux.push(receta);
            }
        }
        this.setState({recetasQ: recetasQAux});
    }

    async obtenerRecetasAPI(){
        fetch("http://165.22.191.161/api/vero/recetas")
            .then(res => res.json())
            .then(
                //Todo funciona
                (result) => {
                    this.setState({
                        recetas: result.data,
                        recetasQ: result.data
                    });
                },
                //Si da error
                (error) => {
                    alert("Error al obtener datos");
                }
            )
    }

    render() {
        return (
            <div>
                <a id="search_bar" />
                <div className="container">
                    <div className="row py-0 py-md-3 py-lg-5">
                        <div className="col-12 text-center text-uppercase mt-5">
                            <h1 className="text-dark pb-3">
                                Más recetas deliciosas
                            </h1>
                            <div className="border-top border-dark w-25 mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="container pt-4">
                    <div className="row py-4">
                        <div className="col-12 mt-3">
                            <form className="form-inline">
                                <div className="input-icons mx-auto w-75">
                                    <i className="fa fa-search icon" />
                                    <input id="search-input" className="form-control search-input w-100" type="search" placeholder="Busca una receta por nombre o tipo (dulce, salado)..." aria-label="Search" name="q" value={this.state.q} onChange={this.buscar}/>
                                    <div className="border-top border-dark " />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="container mb-4 pb-4 pt-4">
                    <div className="row py-0 pb-md-3 pb-lg-5">
                        <div className="col-12 text-center mt-1">
                            <form action method="post" classname="form-inline w-75 px-5">
                                <div className="mx-auto w-75">
                                    <label className="ml-0 mr-5"><b>Elige el tipo de comida:</b></label>
                                    <label className="radio-inline pr-5">
                                        <input type="radio" name="optradio" value="todas" onClick={this.buscar} defaultChecked className="mr-2"/>Todas
                                    </label>
                                    <label className="radio-inline pr-5">
                                        <input type="radio" name="optradio" value="dulce" onClick={this.buscar} className="mr-2"/>Dulce
                                    </label>
                                    <label className="radio-inline pr-5">
                                        <input type="radio" name="optradio" value="salado" onClick={this.buscar} className="mr-2"/>Salado
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container pt-3 pb-5 mb-5">
                    <div className="row pb-5 text-center">
                        {this.state.recetasQ.map((itemInfo) => {
                            return <Card item={itemInfo} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}