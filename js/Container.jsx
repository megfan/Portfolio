import React from 'react';
import {Link} from 'react-router';

let pic1 = document.querySelector('.portfolio__pic__1');



export default class Container extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <header className="header">
                <div className="header__logo">
                    <img src="img/2.png" alt="Logo" className="header__logo__img"></img>
                </div>
                <div className="header__heading">
                    <img src="img/4.png" alt="Heading" className="header__heading__img"></img>
                
                </div>
            </header>
            
        )
    }
}