import React from "react";
import './Notificationsapplication.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faBell} from '@fortawesome/free-regular-svg-icons';

 export function Cover(){
    return(
        <div className=" mathi">
            <div className="  container text-center ">
                <div className="not p-5">
                <h1 >Notification </h1>
                </div>
                    <div className="jj  text-center bg-primary ">
                        
                        <h1 className="m-4">< FontAwesomeIcon icon={faCircleCheck}/>Notification</h1>
                        
                        <div className="&nbsp;">

                        </div>

                    </div> 
                        <div className="try text-center bg-success  ">
                            <h1 className="m-4">< FontAwesomeIcon icon={faBell}/>Success Message</h1>
                        </div>
                         <div className="&nbsp">

                         </div>
                         <div className="klt text-center bg-warning">
                            <h1 className="m-4">< FontAwesomeIcon icon={faCircleCheck}/>Warnig Message</h1>
                         </div>
                         <div className="&nbsp">

                         </div>


                         <div className="kkm tex-center bg-danger">
                            <h1 className="m-4">< FontAwesomeIcon icon={faBell}/>Error Message</h1>
                         </div>
            </div>

            
        </div>
    );

 }