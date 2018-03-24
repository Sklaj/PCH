import React from 'react';

const Slide = () => {
    return(
        <div className='row dark'>
            <div className='container slide'>
                <div className='half left'>
                    <img src='./img/logo.png' className='logo'/>
                    <h3>Front-End Dev | Graphic Designer</h3>
                    <ul className='menu'>
                        <li><a href='#Skills'>Skills</a></li>
                        <li><a href='#Folio'>Folio</a></li>
                        <li><a href='#Code'>Code</a></li>
                        <li><a href='#About'>About&Exp</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='half img'>
                    <img src='./img/slide.png'/>
                </div>
            </div>
            <div className='angle light'></div>
        </div>
    );
};

export default Slide;