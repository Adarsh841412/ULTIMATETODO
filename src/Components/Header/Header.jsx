import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = ({text}) => {
  let[name,setName]=useState(text)
  return (
    
    <div className='Header'>
{ text==="Add Task" &&
<>
&nbsp;
<Link to="/"> <i class="fa-solid fa-arrow-left" style={{color:"white"}}></i></Link>
 <p className='HeaderChild'>{name}</p>

</>

}

{
  text==="TO-DO APP"  &&   <p className='HeaderChild'>{name}</p>
}


 

{  text==="Edit Task"  && (

  <>
 
 <Link to="/"> <i class="fa-solid fa-arrow-left" style={{color:"white", paddingLeft:"8px"}}></i></Link>
 <p className='HeaderChild'>{name}</p>
  </>
)
}
    
    </div>



  )
}

export default Header