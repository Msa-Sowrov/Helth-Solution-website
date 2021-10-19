import appInit from "../firebase/firebase.init"
import { getAuth,updateProfile ,onAuthStateChanged ,signOut , createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = ()=>{
    const [user, setUser]= useState({});
    const [error, setError] = useState('');
    appInit();
    const auth = getAuth();


    const createAccount=(email, password, userName)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
                setUserName(userName)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
                }

    const signInWithEmail=(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    setUser(result.user)
                    setError('')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                });
    }
    const signInWithGoogle =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result=> setUser(result.user))
        .catch(error=> setError(error.message))
    }
    const setUserName = (name)=>{
        console.log(name)
        updateProfile(auth.currentUser, {displayName: name})
        .then(()=>{

        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)   
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    const logOut =()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }
return{
    createAccount,
    signInWithEmail,
    user,
    error,
    signInWithGoogle,
    logOut

}}

export default useFirebase;