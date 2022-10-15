import React from 'react'

export default function Hours() {
  return (
    <div className='container-fluid hours'>
        <div className='row text-center mb-5'>
            <div className='col mt-4'>
    <h1> Hours of operation</h1>
    <div className = 'row justify-content-center mt-5'>
    <div className = 'col-3'>
    <p class ="ops"> Monday-Thursday 10 a.m. - 8 p.m. </p>
    </div>
    </div>
    <div className = 'row justify-content-center'>
    <div className = 'col-3'>
    <p class ="ops"> Friday 10 a.m. - 11p.m. </p>
    </div>
    </div><div className = 'row justify-content-center'>
    <div className = 'col-3'>
    <p class ="ops"> Saturday 10 a.m. - 11 p.m. </p>
    </div>
    </div><div className = 'row justify-content-center mb-3'>
    <div className = 'col-3'>
    <p class ="ops"> Sunday 10 a.m. - 10 p.m. </p>
    </div>
    </div>
    </div>
        </div>
    </div>
  )
}
