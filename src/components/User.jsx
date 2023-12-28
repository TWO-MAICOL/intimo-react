
import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'//  view of data primeraReact 
import React, { useState, useEffect,useRef} from "react";
//  inicio of session
import Cookies from "universal-cookie";
const cookies = new Cookies(); 
// DATATABLE COLUM EQUIQUETAS (TAG) INPUT DE PRIMERA REACT
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext'; 
// import axios para las consultas al server
import Axios from "axios";
// import Toast message ASND button
import { Button } from 'primereact/button';
//  imiport modal  add usuer
import { ModalUser } from '../components/ModalUser.jsx';
// import TOAST primera react library
import { Toast } from 'primereact/toast';

export const User =  () => {
    // valid usuer for que pueda acceder
    if(!cookies.get('user')){
        window.location.href="./login";
    }
    const [users, setUsers] = useState(null);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
        },
        name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
        },
    });
// funcion encargada de renderisar la pagina para que este en tiempo real 
    const updateUsers = () => {     
        Axios.get('http://localhost:3000/allUsers')
        .then((res) => {setUsers(res.data);})    
        .catch((err)=>{console.log(err)})      
    }  
    useEffect(() => { 
        updateUsers(); 
      }, []);  
 
     // es como se ve el usuario el carga la consulta a node
    const templateUser = (user) => {
        return (
        <div className="flex align-items-center gap-2">
            <img
            alt={user.usuario}
            src={'../assets/img/products/avatar.png'}
            width="32"
            />
            <span>{user.usuario}</span>
        </div>
        );
    };
     // PANTILLA DE ACCIONES CAMPO
    const templateAccions = (user) => {
        return (
            <div className="col-md-12">              
             <button 
                value={user.id} 
                onClick={deleteUser} 
                className=" col-md-3 mr-2 btn btn-danger rounded-4 p-3">Eliminar
            </button>         
             
             <button 
                value={user.id} 
                onClick={deleteUser} 
                className=" col-md-3 mr-2 btn btn-warning rounded-4 p-3">Editar
            </button>         
             
          </div>
        )
    };
    // DELETED users
    const deleteUser = async(e) => {
        var userDeleted = e.target.value;      

        await Axios.post('http://localhost:3000/deleteUser',{id:userDeleted})
            .then((res) => {
                toast.current.show({ 
                    severity: 'success', 
                    summary: res.data ,                    
                    life: 3000
                  });
                  updateUsers();               
                 
            })
            .catch((err) =>{console.log(err);})       
        
    }
    
    //   esta es la busqueda y sirve para realizar los filtros por usuario
    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;
        setFilters(_filters);
        };

        return (

        <div className="col-md-12">
            <div className="col-md-4">
                <InputText
                type="search"
                value={value || ''}
                onChange={(e) => onGlobalFilterChange(e)}
                placeholder="buscar"
                />
             </div>        
                             
            
                    <ModalUser 
                        name={'agregar'} 
                        funcionReload={updateUsers()}            
                    />
               
                 
        </div>
        );
    };

    const header = renderHeader();

  // -----MESAAGE NOTIFICATION-----------------------------------------------------------------------------------
  const toast = useRef(null);

    return (
        <>    
        {/* PARA CARGAR LAS NOTIFICACIONES */}
         <Toast ref={toast} />
         <title>Usuarios</title> 
    
          <Menu/>
           
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
            <Navbar/>        
             <div className="container-fluid py-4 mt-2 "> 
                <div className="card">
                    <DataTable
                        value={users}
                        paginator
                        rows={5}
                        header={header}
                        filters={filters}
                        onFilter={(e) => setFilters(e.filters)}
                        // selection={selectedCustomer}
                        // onSelectionChange={(e) => setSelectedCustomer(e.value)}
                        selectionMode="single"
                        dataKey="id"
                        // stateStorage="session"
                        stateKey="dt-state-demo-local"
                        emptyMessage="No customers found."
                        tableStyle={{ minWidth: '50rem' }}
                    >                        
                        <Column
                        header="USUARIO"
                        body={templateUser }
                        sortable
                        sortField="representative.name"
                        //   filter
                        filterField="representative"
                        showFilterMatchModes={false}
                        //   filterElement={representativeFilterTemplatDe}
                        filterMenuStyle={{ width: '14rem' }}
                        style={{ width: '25%' }}
                        ></Column>
                        <Column
                        className='cenrter-column'
                        field="contrasena"
                        header="CONTRASEÑA"
                        //   body={statusBodyTemplate}
                        sortable
                        //   filter
                        filterMenuStyle={{ width: '14rem' }}
                        style={{ width: '25%' }}
                        ></Column>    
                        <Column
                        field="id"
                        header="ACCIONES"
                        // sortable
                        //   filter
                        body={templateAccions}
                        // filterPlaceholder="Search"
                        style={{ width: '25%' }}
                        ></Column>                    
                    </DataTable>
                </div>               
             </div>           
            <Footer/>
          </main>
    
    
        
         
        </>
      )


}