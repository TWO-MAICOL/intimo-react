import React, { useState, useEffect,useRef} from "react";
import { InputText } from 'primereact/inputtext'; 
// import axios para las consultas al server
import Axios from "axios";
// import Toast message ASND button
import { Button } from 'primereact/button';
//  imiport modal primera Reac add usuer
import { Dialog } from 'primereact/dialog';
// import TOAST primera react library
import { Toast } from 'primereact/toast';

export const ModalUser =  ({name,funcionReload}) => {
       
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState(false);
    const [user, setUser] = useState(false);    

    const saveUser = async (e) => {
        e.preventDefault();
        var dataUser = {user:user, password:password};

       await Axios.post('http://localhost:3000/insertUser', dataUser)
        .then( res => {
            toast.current.show({ 
                severity: 'success', 
                summary: res.data, 
                detail: res.data ,
                life: 2000
              });
              funcionReload
                         
        })
        .catch();
    }
    
  // -----MESAAGE NOTIFICATION-----------------------------------------------------------------------------------
  const toast = useRef(null);
    
    return (
        <>
        {/* PARA CARGAR LAS NOTIFICACIONES */}
        <Toast ref={toast} />  
            
                 
         <div className="cardz flex justify-content-center">  
            <div className="col-md-6">
                <Button 
                    className=" col-md-12"                
                    label={name}
                    rounded
                    onClick={() => {setVisible(true) } } 
                />
            </div>            
            <Dialog  header="Crear Usuario" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>            
                 <div className="container-fluid py-4 mt-4  col-12">
                    <div className='row'> 
                        <div className="card col-md-11 ms-6" >              
                            <div className="card-header font-weight-bolder bg-gradient-dark text-white">
                                USUARIO                  
                            </div>
                            <div className="card-body text-center ">
                                <form role="form" className="text-start">
                                    <div className='row'>
                                        <div className='form-group col-md-6'>
                                        <label className="form-label">Ingresa el USUSARIO</label>                
                                        
                                        
                                        </div>                         
                                    </div>                                             
                                    <div className='row'>                         
                                        <div className='form-group col-md-8'>                                        
                                            <div className="input-group input-group-outline my-3  ">
                                                <InputText  
                                                    onChange={(e) => setUser(e.target.value)}
                                                    className="form-control" 
                                                    placeholder="Usuario"
                                                    type='text'
                                                    />
                                            </div>
                                            <div className="input-group input-group-outline my-3  ">
                                                <InputText  
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="form-control" 
                                                    placeholder="Constraseña"
                                                    type='text'
                                                    />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <Button 
                                                className=" col-md-12 mt-5" 
                                                onClick={saveUser} 
                                                label="Guardar" 
                                                rounded
                                            />
                                        </div>
                                    </div>
                                    
                                </form>                 
                            </div>
                            <hr className="dark horizontal my-0"/>
                            <div className="card-footer d-flex">              
                            </div>
                        </div>                                
                    </div>       
                </div>
            </Dialog>
        </div>
        </>
    )

}