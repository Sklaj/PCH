import React from 'react';

// components
import Slide from './Slide';
import Skills from './Skills'

class Home extends React.Component{
    render(){
        return(
            <div className='main'>
                <Slide/>
                <Skills/>
                <Slide/>
            </div>
        );
    };
};

export default Home;