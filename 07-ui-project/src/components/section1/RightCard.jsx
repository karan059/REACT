import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.users)
  return (
    <div className='h-full  shrink-0 overflow-hidden relative w-80  p-1 rounded-4xl'>
        <img className='h-full w-full object-cover  rounded-4xl ' src={props.img} alt="" />
        <RightCardContent users  ={props.users} />

    </div>
  )
}

export default RightCard  