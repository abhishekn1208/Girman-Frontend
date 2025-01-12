import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '../ui/button'

  

const DrawerComponent = ({fetchdata,isOpen,setIsOpen}) => {
const [open, setOpen] = useState(true)

const handleClose=()=>{
    setOpen(false)
    setIsOpen(false)
}
  return (
    <>
   {isOpen &&  <div style={open===false && isOpen===false ? {display:"none"}:{...styles.drawer}} className='card-container'>
   {fetchdata && <Card className="d-container" >
                   <CardHeader>
                     <h1>Fetch Details</h1>
                     <p>Here are the details of following employee</p>
                     <CardTitle >
                      <b>Name :</b> {fetchdata.first_name} {fetchdata.last_name}
                     </CardTitle>
                     <CardContent>

                     <b>Location :</b> {fetchdata.city}
                     </CardContent>
                     <CardContent>

                       <b>Contact Number :</b>{fetchdata.contact_number}
                     </CardContent>
                     <b>Profile Image :</b> <br />
                     <img src={fetchdata.imageUrl} alt="profile-image" className='d-Image'/>
                   </CardHeader>
                  <div className='d-button'>
                  <Button className="d-btn" onClick={()=>handleClose()}>Close</Button>
                  </div>
                   
                 </Card>}

 </div>}
 </>
  )
}


const styles = {
    drawer : {
        display : "block"
    },

    container: {
        borderRadius: "15px",
        padding: "27px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        backgroundColor: "white",
        width : "100%",
        color : "black",
        margin : "auto",
        
      },
    Image : {
        width : "50%",
        height : "200px",
        marginTop : "20px"
    },
    button:{
        textAlign : "right"
    },
    btn : {
        border : "0.2px solid grey",
        padding : "3px 15px",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    }   
    }

export default DrawerComponent
