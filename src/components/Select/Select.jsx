import React from 'react'


const SelectComponent = () => {
  return (
    <>
    <label htmlFor="select">Sort by :</label>
    <select style={{padding : "0 15px"}}>
      <option value="">Default</option>
      <option value="name">Name</option>
      <option value="city">City</option>
    </select>
    </>
  )
}

const styles = {
    container : {
        backgroundColor : "white",
        width : "150px",
        display : "flex",
        justifyContent : "space-between",
        fontSize : "20px"
    },
    options : {
        backgroundColor : "white",
        width : "150px%"
    }
}


export default SelectComponent
