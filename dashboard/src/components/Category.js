import React from 'react';

function Category(props){
    return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.category.name}
                        {props.category.count}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;