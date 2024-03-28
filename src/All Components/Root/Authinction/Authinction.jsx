import { createContext, useEffect, useState } from "react";
import app from "./Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthConnect = createContext(null)

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Authinction = ({ children }) => {
 
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const CreateUser =(email,password)=>{
        setloading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser =(email,password)=>{
        setloading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    const GoogleLogin = () => {
        setloading(false)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Curreuser) => {
            console.log(Curreuser);
            setUser(Curreuser)
            setloading(false)
        })
        return () => unsubscribe()

    }, [])


    const Authinfo = {user,loading,CreateUser,LoginUser,GoogleLogin}
    return (
        <AuthConnect.Provider value={Authinfo}>
            {children}
        </AuthConnect.Provider>
    );
};

export default Authinction;