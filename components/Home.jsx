import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'
 
export const Home = ()=> {
  
    return (
    <>    
     <title> Home </title> 

      <Menu/>
       
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y"> 
        <Navbar/>
       <div className="container-fluid py-4 mt-4">
        <div className='row'>  
          <div className="card col-md-4" data-animation="true">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <a className="d-block blur-shadow-image">
                  <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-1-min.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg"/>
                </a>
                <div className="colored-shadow" style= {{backgroundImage:"URL(https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-1-min.jpg)"}}></div>
              </div>
              <div className="card-body text-center">
                <div className="d-flex mt-n6 mx-auto">
                  <a className="btn btn-link text-primary ms-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Refresh">
                    <i className="material-icons text-lg">refresh</i>
                  </a>
                  <button className="btn btn-link text-info me-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit">
                    <i className="material-icons text-lg">edit</i>
                  </button>
                </div>
                <h5 className="font-weight-normal mt-3">
                  <a  >Cozy 5 Stars Apartment</a>
                </h5>
                <p className="mb-0">
                  The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </p>
              </div>
              <hr className="dark horizontal my-0"/>
              <div className="card-footer d-flex">
                <p className="font-weight-normal my-auto">$899/night</p>
                <i className="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
                <p className="text-sm my-auto"> Barcelona, Spain</p>
              </div>
          </div>
          
        </div>
       </div>    
        <Footer/>
      </main>


    
     
    </>
  )
}
 
