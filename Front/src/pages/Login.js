import React from 'react'
import AuthForm from '../features/auth/AuthForm'

function Login() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* Issue 2: Users can log in to the system using JWT tokens for authentication. */}
                <AuthForm />
            </section>
        </main>
    )
}

export default Login
