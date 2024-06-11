import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHanler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 text-black font-inter  hover:bg-blue-100 rounded-full font-bold'
    onClick={logoutHanler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn