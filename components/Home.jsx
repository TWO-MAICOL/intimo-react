import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'
//  view of data primeraReact 
import React, { useState, useEffect } from "react";
import { ProductService } from "./ProductService.jsx";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag" 


export const Home = ()=> {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case 'Disponible':
        return 'success';
      case 'Agotado':
          return 'warning';      
      default:
        return null;
    }
  };
  const itemTemplate = (product) => {
    return (
       
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4  ">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4 border-round">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag
                  value={product.inventoryStatus}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

    return (
    <>    
     <title> Home </title> 

      <Menu/>
       
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
        <Navbar/>        
         <div className="container-fluid py-4 mt-2">

          <div className='card '>

           <DataView
              value={products}
              itemTemplate={itemTemplate}
              paginator              
              rows={5}
            />
          </div>
           
         </div>
       
        <Footer/>
      </main>


    
     
    </>
  )
}
 
