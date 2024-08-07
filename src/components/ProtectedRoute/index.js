import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('jwt_token')
  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/ebank/login" />
      }
    />
  )
}

export default ProtectedRoute
