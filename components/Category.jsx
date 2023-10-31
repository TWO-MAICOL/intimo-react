import React, { useState, useEffect,useRef  } from 'react';
import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'
// import input con reac 
import { InputText } from 'primereact/inputtext'; 
// import textarea con react
import { InputTextarea } from 'primereact/inputtextarea';
// import Toast message ASND button
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
//  inicio of session
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import axios para las consultas al server
import Axios from "axios";

export const Category = () => {
  
    // valid usuer for que pueda acceder
  if(!cookies.get('user')){
    window.location.href="./login";
  }
  
  const [category, setCategory] = useState("");  
  const [listCategory, setlistCategory] = useState();
  
  // load all categories 
  useEffect(() => {
    Axios.get('http://localhost:3000/getCategories')
       .then((res)=>{
          setlistCategory(res.data.map(e => <li href="">{e.nombre}</li> ));             
       })    
       .catch((err)=>{console.log(err)}) 
  }, []);  

  const addCategory = async (e) => {   
    e.preventDefault();
    
    var infoCategory = {
      category:category, 
       
    };

    await Axios.post('http://localhost:3000/addCategory' , infoCategory)
      .then( res => {
          
          toast.current.show({ 
            severity: 'success', 
            summary: ' Categoria guardada con exito', 
            detail: res.data ,
            life: 2000
          });
          window.location.reload(false); 

      } )
      .catch( err => console.log(err));
    
  }

  // -----MESAAGE-----------------------------------------------------------------------------------
  const toast = useRef(null);

  return (
    <>

     {/* PARA CARGAR LAS NOTIFICACIONES */}
     <Toast ref={toast} />
      <title> Categorias</title> 

<Menu/>
  
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
  <Navbar/>
    <div className="container-fluid py-4 mt-4 ">
      <div className='row'> 
      <div className="card col-md-11 ms-6" >              
          <div className="card-header font-weight-bolder bg-gradient-dark text-white">
              CATEGORIAS                  
          </div>
              <div className="card-body text-center ">
              <form role="form" className="text-start">
                <div className='row'>
                    <div className='form-group col-md-6'>
                      <label className="form-label">Lista de categorias</label>                   
                       {listCategory}
                      
                    </div>                         
                </div>                                             
                <div className='row'>                         
                    <div className='form-group col-md-8'>
                    
                        <div className="input-group input-group-outline my-3  ">
                          <InputText  
                            onChange={(e) => setCategory(e.target.value)}
                            className="form-control" 
                            placeholder="Digite aqui la categoria a agregar..."
                            type='text'
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                      <Button 
                        className=" col-md-12 mt-2" 
                        onClick={addCategory} 
                        label="Agregar" 
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
  <Footer/>
</main>
   
    
    </>
  );
};
