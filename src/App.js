import React, {Fragment} from 'react';
import './styles/styles.scss'
import Curso from './Curso'

const App = () => (
 <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="baner" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/300px-Paris_-_Eiffelturm_und_Marsfeld2.jpg" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos </p>
        <p> probando probandp</p>
        <a href="https://www.marca.com/" className="button">aprieta mmg</a>
      </div>
    </div>
  </div>
</div>  
 
<div className="ed-grid m-grid-3">

  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  


</div>

</>

)
export default App;



// reglas jsx
// 1- toda etiqueta debe cerrarse
// 2- Los componentes deben devolver un solo elemnto padre
// 3- apoyarse de los fragment cuando necesito devolver mas dee un elemento.
/* 4- nomenclatura Fragment importar en el (import React, {Fragment} from 'react') 
  o sin importar nada haces <>y cierras </div>*/  
  // 5- img siempre se cierra
  // 6- class => className
  // 7- for => htmlFor
    