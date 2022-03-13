import logo from './logo.svg';
import React, { Fragment } from 'react';
import './styles/styles.scss';

import Curso from './Curso.jsx';


const App = () => (
  <Fragment>

    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://www.iteprevengo.com/wp-content/uploads/2021/04/iteprevengo-logo-solo.png"></img>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className='ed-grid m-grid-3'>
      {[...Array(10)].map((x, i) =>{
       return <Curso key={i} />
      }  )}

    </div>

  </Fragment>

)

export default App;
