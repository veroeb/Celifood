import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="blurred-cover" />
                <div className="landing">
                    <div className="cover_color" />
                    <div className="bg-image" />
                    <h4>Bienvenidos a</h4>
                    <h1>Celifood</h1>
                </div>
            </header>
        );
    }
}