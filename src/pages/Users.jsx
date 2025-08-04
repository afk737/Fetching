import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../slices/ProductSlice'
import ClipLoader from "react-spinners/ClipLoader";

function Users() {

  const { users, loading, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <ClipLoader color="red" size={100} />
        <h1>loading....</h1>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;



  return (
    <>
   
      <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>

    </>
  )
}

export default Users
