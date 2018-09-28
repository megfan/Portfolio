import React from 'react';

export default class Container extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className='container'>
                <div className="sectionMain">
                    <img src="../img/2.png" alt="Logo" className="sectionMain__logo"/>
                    <img src="../img/4.png" alt="Title" className="sectionMain__title"/>
                </div>
                <div className="sectionPortfolio">
                    <div className="titleSec">
                        <div className="titleBig"><h1>Projects</h1></div>
                        
                        <div className="block"></div>
                    </div>
                </div>
                
            </div>
        )
    }
}