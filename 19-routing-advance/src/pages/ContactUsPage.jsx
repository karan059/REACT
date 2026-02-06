import React from 'react'
import { useParams } from 'react-router-dom'

const ContactUsPage = () => {
    const params = useParams()
     
    
  return (
    <div>
        <h1>{params.id} at ph: 9103915830</h1> 
        {/* this is called dynamic routing */}
    </div>
  )
}

export default ContactUsPage