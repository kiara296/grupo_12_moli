import React from "react";
import error from '../assets/images/error404.jpg';

function Error404(){
    return(
        <React.Fragment>
            <div className="container w-100" >
                <img  className="w-100" src={error} alt='Error 404'/>
            </div>
        </React.Fragment>
    )
}
export default Error404;