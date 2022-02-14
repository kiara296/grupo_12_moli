import React from 'react';
import image from '../assets/images/logo-moli.png';
import '../assets/css/sideBar.css'

/* //Aquí importo todos los componentes que voy a llamar
import ContentWrapper from './ContentWrapper';
import CategoryInDb from './CategoryInDb';
import LastMovieInDb from './LastMovieInDb';
import Products from './ContentRowMovies';
import Error404 from './Error404'; */

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Logo-Moli"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - MOLI</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Home</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/products">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tablas</span></a>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
             {/*Aquí armo mis rutas */}
            {/*  <Routes>
                <Route exact path='/' element={<ContentWrapper/>} />
                <Route exact path='/CategoryInDb' element={<CategoryInDb/>} /> 
                <Route exact path='/LastMovieInDb' element={<LastMovieInDb/>} />
                <Route exact path='/Products' element={<Products/>} />
                <Route exact path='*' element={<Error404/>} />
            </Routes> */}
        </>
    )
}
export default SideBar;