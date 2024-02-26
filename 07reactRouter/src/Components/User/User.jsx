import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User : {userid}      {/* jo bi url ma ai ga wo apko access mil jai ga. ap display krwna chata ha tu wo kr skta ha. ya phr dataase krna chata ha */}
    </div>
  )
}

export default User
