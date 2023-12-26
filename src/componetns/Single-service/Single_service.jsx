import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './Single_service.css'
const Single_service = ({data}) => {
    console.log(data);
  return (
    <div>
        {data.map((items)=>(

<div className='Singleservice'>
    <img  src={items.image}/>
    <h4>{items.title}</h4>
    <p>{items.Description}</p>
    <div>
        {
            items.subService.map((points)=>(
                <p className='sub-service'><IoMdCheckmarkCircleOutline color='#C6705D' />{points.sub_service}</p>
            ))
        }
        <p></p>
    </div>
</div>
))}
    </div>
  )
}

export default Single_service