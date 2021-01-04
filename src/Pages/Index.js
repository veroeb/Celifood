import React from 'react';

import Heading from '../Components/Heading';
import Carousel from '../Components/Carousel';
import Recetas from '../Pages/Recetas';

export default class Index extends React.Component {
    render(){
        return(
            <div>
                <Heading />
                <Carousel />
                <Recetas />
            </div>
        );
    }
}