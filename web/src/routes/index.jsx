import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../contexts/auth'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { user, loading } = useAuth()

  if (loading) {
    return
  }

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}