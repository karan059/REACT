import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
     
     
  return (
    <div className='h-full w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap p-6 gap-10'>
      {props.users.map(function(elem, idx){
        return <RightCard key = {idx} color = {elem.color} id = {idx} img = {elem.img}  tag = {elem.tag} />

      }
      )}
    </div>
  )
}

export default RightContent