  
// close seseion compounent
import { CloseSession } from "./CloseSession";

export const Navbar = () => {
  return (
     <>
    <nav className=" navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky" id="navbarBlur" >
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark">Pages</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Billing</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">Billing</h6>
        </nav>
          <CloseSession/>
      </div>
    </nav>
     </>
  );
};