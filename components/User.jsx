
import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'//  view of data primeraReact 
import React, { useState, useEffect } from "react";
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

export const User =  () => {
    // valid usuer for que pueda acceder
    if(!cookies.get('user')){
        window.location.href="./login";
    }

    const [customers, setCustomers] = useState(null);

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

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    
    useEffect(() => { 
        Axios.get('http://localhost:3000/allUsers')
        .then((res) => {
            // setCustomers(res.data);
            console.log(res);      
        })    
        .catch((err)=>{console.log(err)}) 
    
      }, []);
    
     // es como se ve el usuario el carga la consulta a node
    const templateUser = (user) => {
        return (
        <div className="flex align-items-center gap-2">
            <img
            alt={user.user}
            src={`https://primefaces.org/cdn/primereact/images/avatar/${user.route}`}
            width="32"
            />
            <span>{user.user}</span>
        </div>
        );
    };
 
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
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
            type="search"
            value={value || ''}
            onChange={(e) => onGlobalFilterChange(e)}
            placeholder="buscar"
            />
            <button>hola</button>
        </span>
        
        );
    };

    const header = renderHeader();

    return (
        <>    
         <title> Usuarios </title> 
    
          <Menu/>
           
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
            <Navbar/>        
             <div className="container-fluid py-4 mt-2 "> 
                <div className="card">
                    <DataTable
                        value={customers}
                        paginator
                        rows={5}
                        header={header}
                        filters={filters}
                        onFilter={(e) => setFilters(e.filters)}
                        selection={selectedCustomer}
                        onSelectionChange={(e) => setSelectedCustomer(e.value)}
                        selectionMode="single"
                        dataKey="id"
                        stateStorage="session"
                        stateKey="dt-state-demo-local"
                        emptyMessage="No customers found."
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column
                        field="id"
                        header="ID"
                        sortable
                        //   filter
                        filterPlaceholder="Search"
                        style={{ width: '25%' }}
                        ></Column>
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
                        field="status"
                        header="CONTRASEÑA"
                        //   body={statusBodyTemplate}
                        sortable
                        //   filter
                        filterMenuStyle={{ width: '14rem' }}
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