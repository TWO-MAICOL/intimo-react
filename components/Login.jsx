import React from 'react'
 

export const Login = ()=> {
  
    return (
    <>  
    <title> Login </title>
 
    <div style={{ backgroundImage: "url(/img/wallpaper.jpeg)"}} className=""  >
      <div className="container">
        <div className="row  justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <div className="card rounded-3 text-black border border-primary mt-5">
              <div className="row g-0">
                <div className="col-md-12">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">               
                      <h4 className="mt-1 mb-5 pb-1 text-primary">Login</h4>
                    </div>
                    <form>
                      <p>Usuario</p>

                      <div className="form-outline mb-4">
                        <input type="text"  className="form-control"
                          placeholder="Ingrese el usuario" />
                        
                      </div>
                      <p>Contraseña</p>
                      <div className="form-outline mb-4">
                        <input type="password"   className="form-control" placeholder="Ingrese la contraseña"/>
                        
                      </div>

                      <div className="text-center ">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Iniciar sesion</button>
                      </div>
                      <div  class="alert alert-danger " role="alert">
                        <strong>Oh snap!</strong> Change a few things up and submit again.
                      </div>
                    </form>
                  </div>      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
