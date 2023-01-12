import React from "react";
import './CongratsCard.css';
import pro from '../../image/congrats-card-profile-img.png';
import watch from '../../image/congrats-card-watch-img.png';
import'../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Cart(){
    return(
        <>
       
       
         <div className="foolt">
           <div className="container row  p-5  text-center ">
        
            <div className="col-lg-12  text-center">
                <h1>Congratulations</h1>
            </div>
             
             <div className=" col-lg-12 kart  bg-primary text-center m-5">
                <img src={pro}/>
                <h2>kerain v</h2>
                <p>vishnu  instute of computer Education and Techonlogy<br/>Bhimarava</p>
                <img src={watch}/>

                

             </div>
           </div>
        
           </div>
        </>
    );
}
