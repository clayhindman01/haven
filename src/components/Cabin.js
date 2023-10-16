import React from 'react'

export default function Cabin({cabinOne}) {
  return (
    <div className='cabinContainer'>
        <div className="cabinHeader">
            <h1 className='headerText'>{cabinOne? "Cabin One": "Cabin Two"}</h1>
        </div>
        <div className="cabinBody">
            <img src='cabin.jpg' alt='cabin' className='cabinImage'/>
            <div className="cabinFeatures">
                <h3>Features</h3>
                <ul>
                    <li>Feature1</li>
                    <li>Feature2</li>
                    <li>Feature3</li>
                </ul>
            </div>
        </div>
        <div>
            <a href="/booking" className="btn btn-primary">Book Now</a>
        </div>

    </div>
  )
}
