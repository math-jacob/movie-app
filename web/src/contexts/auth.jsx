import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies:token')
  
    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user: JSON.parse(user), token })
    }
  }, [])
  
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password})
      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put('/users', user)

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      setData({ user, token: data.token })

      alert('Perfil atualizado!')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar')
      }
    }
  }

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}