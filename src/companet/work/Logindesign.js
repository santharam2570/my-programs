import React from "react";
import '../work/Logindesign.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import pc from '../../image/images.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faEmail } from "@fortawesome/free-solid-svg-icons";
 import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";


 export function Dtdc(){
    return(
        <div className="kktpart container p-5">
            <div className="bg-light container row p-5">
                <div className="d-felx col-lg-7 ">
                    <img src={pc}/>
                </div>
                <div className="&nbsp;">
                    <div className="d-felx mr-3">
                    <h1>Member Login</h1>
                    </div>
                   <div className="d-felx mr-3">
                    < FontAwesomeIcon icon={faEnvelope} className="mt-4 pl-5 bg-light"/>
                    <input type="Email" placeholder="Email"  className=" col-lg-7 bg-light"></input>
                   </div>
                   <div className=" jio">
                        < FontAwesomeIcon icon={faLock} className="mt-4 pl-5 bg-light"/>
                        <input type="password" placeholder="password" className="mt-4 pl-5 bg-light"></input>x
                    </div>

                    <div className="d-felx  ml-5">
                        <button type="Submit" className=" mt-3 mr-8 pr-5  bg-success roumded tet-light">Login</button><br/>
                           <div>
                           <h6>Forgot <samp className="text-success">Username/pasasword</samp></h6>
                            

                            <h6 className="text-success">Create your passwod</h6>
                            </div> 
                    </div>
                        

                


                </div>
                
            </div>
                
        </div>
        
        );
 }