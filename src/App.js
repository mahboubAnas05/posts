import './App.css';
/*
import { BrowserRouter, data, Link, Route, Routes } from 'react-router-dom';
import Clac from './components/calc';
import CounterCom from './components/counterCom';
import { useState } from 'react';
import DetailStudent from './pages/studentDetail';
import TodoeStudents from './pages/studentListe';
import ListeStudents204 from './pages/studentListe4';
import AllStudent from './pages/allStudents';
import GestTasks from './components/comp3';

-- hado dial EFF mazal ma7tajhoum in chaa ALLAH

import GestProducts from './redux/reduceComp1';
import AddChange from './EFF25/AjouterChangement';
import DetailVelo from './EFF25/DetailsVelo';

import Gestion_produits from './redux_Toolkit_2/productsCompo';
import GestionTasks from './redux_toolKit/gestion_tasks';
*/

import NavBar from './posts/navBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SideBar from './posts/sideBar';
import Home from './posts/home';
import Footer from './posts/footer';
import Ajouter from './posts/Todo';

function App(){
    return(
      <BrowserRouter>



        <div className='vh-100'>
          <NavBar/>
          <div className='container-fluid row mainOfPage'
          style={{
            "background" : "linearGradient(to right, yellow, #000)"
          }}
          >

            <div className='col-5'>
              <SideBar/>
            </div> 
            <div className='col-7'>
              {/* hadi dynamique */}
              <Routes>

                  <Route path='/' element={
                    <center className='p-5'>
                      <h1 className=''
                    style={{
                      "margin" : "15% 0 0"
                    }}
                    >Presentation des Postes</h1>
                    <p>vous pouvez voir tout les postes aprés le clique du bouton ci-dessous</p>
                    <Link to={'/List'} className='btn btn-warning'>voir les postes</Link>
                    </center>
                  } />

                  <Route path='/aboutUs' element={
                    <center>
                      <h1 className=''
                    style={{
                      "margin" : "15% 0 0"
                    }}
                    >My posts</h1>
                    <p className='mt-3'>
                      c'est une simple plat forme et basique
                      <br/>
                      créer pour tester mes connaissence en react JS.
                    </p>
                    </center>
                  } />

                  <Route path='/List' element={<Home/>} />
                  <Route path='/Todo' element={<Ajouter/>} />
            

              </Routes>

            </div> 

          </div>

        </div>
        
        <Footer/>
      </BrowserRouter>
    )
  }
  //<GestionTasks/>
  //<GestProducts/>
  // <Todos/> 
  // <Clac/>
  //<CounterCom/>
  //<GestTasks/>
  //<Gestion_produits/>
  
export default App;


/*
===================================================
<div className='bg-light'>
    <DetailVelo/>
    <div className="mt-3">
      <AddChange/>
    </div>
</div>
====================================================
function App(){
  
const num = useSelector(data => { // read from data --- i think is like props it mean take this vairable to the store and read it there
      return data.num 
    }) // hada howa tonobil flmital

    const dispatcher = useDispatch() // hada howa depanage 
    //  the intermidiere of the component and the store


    return(
      <div className='container-fluid row mt-5'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h1 className='text-center'>{num}</h1>
          <div className='text-center mt-3'>
            <button onClick={() => dispatcher(inc())} className='btn btn-primary ms-3'>+</button>
            <button onClick={() => dispatcher(dec())} className='btn btn-success ms-3'>-</button>
            <button onClick={() => dispatcher(rest())} className='btn btn-danger ms-3'>rest</button>

          </div>
        </div>
        <div className='col-3'></div>
      </div>
    )
}


 */



