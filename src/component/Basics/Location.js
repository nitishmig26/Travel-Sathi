import React from 'react'

function Location() {
  return (
    <>

        <label>
          SELECT YOUR CURRENT LOCATION:
          <br/>
          <select>
            <option value="CHANDIGARH">CHANDIGARH</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Banglore">Banglore</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </label>
        <input type="submit" value="Submit" />

    </>
  )
}

export default Location