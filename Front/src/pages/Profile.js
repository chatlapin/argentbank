import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthToken } from '../features/auth/authSlice'
import { fetchUserData, getUserData } from '../features/user/userSlice'
import UserEditForm from '../features/user/UserEditForm'
import Account from '../features/Account/Account'

function Profile() {
    const dispatch = useDispatch()
    const [editToggle, setEditToggle] = useState(false)
    const user = useSelector(getUserData)
    const token = useSelector(getAuthToken)

    useEffect(() => {
        // Issue 4: Users can only see their own profile with their first name and placeholder bank account information.
        dispatch(fetchUserData(token))
    }, [dispatch, token])

    const handleClick = (e) => {
        e.preventDefault()
        setEditToggle(!editToggle)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.firstName} {user.lastName}
                </h1>
                {editToggle ? (
                    // Issue 5: Users can update their profile (first name and last name), which is persisted to the database.
                    <UserEditForm
                        editToggle={editToggle}
                        setEditToggle={setEditToggle}
                    />
                ) : (
                    <button
                        className="edit-button"
                        onClick={(e) => handleClick(e)}
                    >
                        Edit Name
                    </button>
                )}
            </div>
            <Account />
        </main>
    )
}

// Issue 6: State management is done through Redux, with a store, actions, and reducers for handling application state changes.
export default Profile
