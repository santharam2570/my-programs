import React from "react";
import './superover.css'
import csk from '../../image/csk-img.png';
import rcb from '../../image/rcb-img.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Over(){
    return(
       <div className="BG-color bg-dark text-white text-center ">               
                    
                        <h1 className="pt-5">SuperOver</h1>
                        <img src={csk} className="cskimg" />
                        <img src={rcb} className="cskimg"/>

        </div>
        
       

    );

}