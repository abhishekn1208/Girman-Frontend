import React from 'react'
import { Input } from "@/components/ui/input"

const SearchBar = () => {

    const handleSearch=(e)=>{
        if(e.key === 'Enter'){
            window.location.href = `/search?query=${e.target.value}`
        }
    }

  return (  
    <main style={styles.container} >
      <div style={styles.image} className='girman-img'>
        <img src='/asset/girman.svg' alt="searchlogo" />
      </div>
      <div style={styles.searchBox} className='searchDiv'>
        <span style={styles.magnifier}><img src="/asset/search.svg" alt="magnifier" style={styles.icon} /></span>
      <Input type="email" placeholder="Search" style={styles.input} onKeyPress={(e)=>handleSearch(e)} className='searchbar'/>
      </div>
    </main>
  )
}

const styles = {
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
        padding: "20px",
        boxSizing : "border-box",
 
      },
      image : {
        marginBottom : "60px"
      },
      searchBox: {
        width: "100%",
        maxWidth: "800px",
        height: "50px",
        fontSize: "24px",
        padding: "0 10px",
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
        position: "relative",

       
      },
      input: {
       
        width: "100%",
        height : "50px",
        fontSize: "18px",
        paddingLeft: "40px", 
        borderRadius : "5px",
         boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      },
      magnifier: {
        position: "absolute",
        left: "15px", 
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
      },
      icon: {
        width: "30px",
        height: "30px"
      }
 

}



export default SearchBar
