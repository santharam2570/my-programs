import React from "react";
import './socialbutton.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


 export default function Media(){
    return(
        <>
        <div className="full text-center  pt-5">
            <h1 className="pt-5">Social Button</h1>
            
            <button type="button" hraf='#' className='btn bg-warning btn m-2 text-light'>like</button>
            <button type="button" hraf='#' className='btn bg-light m-2'>comment</button>
            <button type="button" hraf='#' className='btn bg-primary m-2 text-light'>share</button>


        </div>
        </>
    );
 }