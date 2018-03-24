import React from 'react';

const Skills = () => {
    return(
        <div className='row light'>
            <div className='container skills'>
                <nav>
                    <div className='line'></div>
                    <ul className='menuAlter'>
                            <li><a href='#Skills'>Skills</a></li>
                            <li><a href='#Folio'>Folio</a></li>
                            <li><a href='#Code'>Code</a></li>
                            <li><a href='#About'>About&Exp</a></li>
                            <li><a href='#Contact'>Contact</a></li>
                        </ul>
                        <img src='img/logo_small.png'/>
                    </nav>
                <div className='skillBox'>
                    <div className='half'>
                        <h2>Front-End</h2>
                        <div className='imgBox'>
                            <img src='img/html.png'/>
                            <img src='img/css.png'/>  
                            <img src='img/js.png'/>  
                            <img src='img/react.png'/>
                        </div>
                        <p>+ ES6, jQuery, RWD, Sass, Webpack, Gulp, Github</p>              
                    </div>
                    <div className='half right'>
                        <h2>Graphic Design</h2>
                        <div className='imgBox'>
                            <img src='img/ps.png'/>
                            <img src='img/ai.png'/>  
                            <img src='img/id.png'/>  
                            <img src='img/pr.png'/>
                        </div>
                        <p>+ Muse, Sony Vegas, Corel Draw, Gimp, Word, Excel</p>
                    </div>
                </div>
            </div>
            <div className='angle dark'></div>
        </div>
    )
}

export default Skills;