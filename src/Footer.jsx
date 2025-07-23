import React from 'react'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-primary'>
      <div className="row p-lg-3 p-3">
        <div className="col-5 ">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
               <img src="https://cdn.dribbble.com/users/857299/screenshots/5279698/tm-01_4x.jpg" alt=""  className='w-50 rounded'/>
               <span className='fs-lg-4 fs-5 text-light' style={{fontWeight:"bold"}}>T-Manager</span>
            </div>
            <div className="col-md-4"></div>
          </div>
          
        </div>
        <div className="col-2"></div>
        <div className="col-5 d-flex  justify-content-center align-items-center">
          <p className='text-light' style={{fontWeight:"bold"}}> Plan your work and work your plan.</p>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Footer