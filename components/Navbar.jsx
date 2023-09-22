  

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
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="d-flex px-2 py-1">
                <div>
                  <img src=" " className="avatar avatar-sm me-3 border-radius-lg" alt="user1"/>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="mb-0 text-sm">Jeisson</h6>
                  {/* <p className="text-xs text-secondary mb-0">john@creative-tim.com</p> */}
                </div>
            </div>
          </div>         
        </div>
      </div>
    </nav>
     </>
  );
};