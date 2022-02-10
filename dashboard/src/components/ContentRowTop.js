import React , {useRef} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import CategoryInDb from './CategoryInDb';
import ContentRowMovies from './ContentRowMovies';
function ContentRowTop(){

	const parrafo = useRef(); 

	const  cambiarColor = () =>{
		//alert('Hola como vamos ')
		//console.log(parrafo);
		parrafo.current.classList.toggle('bg-warning');
	}

    return(
        <>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard MOLI</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									{/*<h5  onMouseOver={()=> cambiarColor('Cursada que ya culmina')}   className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>*/}
									<h5  onMouseOver={cambiarColor}   className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p ref={parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Category in DB -->*/}
						<CategoryInDb />

						{/*<!--End Category In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </>
    )

}
export default ContentRowTop;