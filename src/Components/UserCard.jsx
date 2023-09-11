import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
        <h1>{`${user.name}`}</h1><br/>
        <Link to={`/info/${user.id}`}  >
        <button>Info</button>
        </Link>
    </div>
  )
}

export default UserCard