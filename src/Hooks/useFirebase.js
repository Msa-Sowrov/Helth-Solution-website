import appInit from "../firebase/firebase.init"
import { getAuth,updateProfile ,onAuthStateChanged ,signOut , createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = ()=>{
    const [user, setUser]= useState({});
    const [error, setError] = useState('');
    appInit();
    const auth = getAuth();
    const [loding, setLoding] = useState(true)


    const createAccount=(email, password, userName)=>{
        setLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
                setUser(result.user)
                setUserName(userName)
                setError('')
                window.location.reload()
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(
                setLoding(true)
            );
                }

    const signInWithEmail=(email, password)=>{
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    setUser(result.user)
                    setError('')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                })
                .finally(
                    setLoding(false)
                );
    }
    const signInWithGoogle =()=>{
        setLoding(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result=>{
            setUser(result.user)
            setError('')
        }

            
        )
        .catch(error=> setError(error.message))
        .finally(
            setLoding(false)
        )
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
              setUser({})
            }
            setLoding(false )
          });
    },[])

    const logOut =()=>{
        setLoding(true)
        signOut(auth)
        .then(() => {
            setUser({})
          })
          .finally(
                setLoding(false)
          )
            
    }
return{
    createAccount,
    signInWithEmail,
    user,
    error,
    signInWithGoogle,
    logOut,
    loding

}}

export default useFirebase;