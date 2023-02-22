import styles from "./Popup.module.css"
import { useRef } from "react"
// import useOutsideClick from "../../utils/useOutSideClick"


const Popup =({clickedImage, setOpen, open})=>{


  const ref =useRef()

  const handleClick =()=>{

    setOpen(!open)
  }

  const handleOutsideClick =(e)=>{

    if(!ref.current.contains(e.target)){
      setOpen(!open)
    }

  }

  return(
    <>
    <div 
     className={styles.cover}
     onClick={(e)=>handleOutsideClick(e)}
     ></div>
    <div style={{maxWidth: "80%"}} className={styles.popUp} >

      <div
      ref={ref}
      style={{color:"white"}}

      onClick={handleClick}
      
      >X</div>

      <img style={{width: "100%", maxHeight: "80vh"}} src={`http://localhost:8080/${clickedImage.filename}`} alt="" />
    </div>
    </>
  )
}

export default Popup