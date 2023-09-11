import React from 'react'
import UserCard from './UserCard'
import { Spinner } from 'react-bootstrap'

const UserList = ({data,loading}) => {
  return (
    <div>
        {loading?<>
            
       
       <Spinner animation="border" variant="primary" />
       <Spinner animation="border" variant="secondary" />
       <Spinner animation="border" variant="success" />
       <Spinner animation="border" variant="danger" />
       <Spinner animation="border" variant="warning" />
       <Spinner animation="border" variant="info" />
       <Spinner animation="border" variant="light" />
       <Spinner animation="border" variant="dark" />
       <Spinner animation="grow" variant="primary" />
       <Spinner animation="grow" variant="secondary" />
       <Spinner animation="grow" variant="success" />
       <Spinner animation="grow" variant="danger" />
       <Spinner animation="grow" variant="warning" />
       <Spinner animation="grow" variant="info" />
       <Spinner animation="grow" variant="light" />
       <Spinner animation="grow" variant="dark" />
     </>:
           data&& React.Children.toArray(data.map(el=><UserCard user={el} />))
        }
    </div>
  )
}

export default UserList