import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getAuthConnected } from '../../features/auth/authSlice'

const ProtectedRoute = ({ children }) => {
    // Issue 2: Users can log in to the system using JWT tokens for authentication.
    // Issue 4: Users can only see their own profile with their first name and placeholder bank account information.
    const isAuth = useSelector(getAuthConnected)
    console.log(isAuth)

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
