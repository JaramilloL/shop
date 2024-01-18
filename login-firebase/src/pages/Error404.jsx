import { Navigate, useRouteError } from 'react-router-dom'

const Error404 = () => {
    const error = useRouteError();

  return (
    <div>
      <p>
        Error: {error}
      </p>
      <Navigate to={'/'}/>
      
    </div>
  )
}

export default Error404
