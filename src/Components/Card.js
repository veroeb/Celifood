import React from 'react';
// import '../css/recetas.css';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-4 p-4">
                <h4 className="my-4">{this.props.item.titulo}</h4>
                <img src={this.props.item.imagen} alt="" className="w-100 rounded" />
                {/* <p class="lead pt-3"></p> */}
                <a href={this.props.item.link} className="btn btn-success btn-md mt-4 px-5">Ver receta</a>
            </div>
        );
    }
}