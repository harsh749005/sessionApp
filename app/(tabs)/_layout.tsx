import React from 'react'
import { Redirect, Slot} from 'expo-router'
import {useAuth} from '../../context/AuthContext';
const ProtectedLayout = () => {
    const {session} = useAuth();
    return !session ? <Redirect href="/"/>: <Slot/>
}
export default ProtectedLayout