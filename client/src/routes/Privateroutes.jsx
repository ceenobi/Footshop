import { Navigate, useLocation } from 'react-router-dom'
import { useStateContext } from '../config/context'

// eslint-disable-next-line react/prop-types
export default function Privateroutes({children}) {
  const location = useLocation()
  const { currentUser } = useStateContext()

  return (
    <>
      {currentUser ? (
        children
      ) : (
        <Navigate to={'/account'} state={{ from: location }} />
      )}
    </>
  )
}
