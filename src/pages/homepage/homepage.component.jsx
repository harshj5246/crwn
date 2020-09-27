import React from 'react';
import  './homepage.styles.scss';
//import {Route} from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const HomePage = () =>(
    <div className='homepage'>
       <Directory  />
    </div>
);

export default HomePage;