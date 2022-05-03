import { createContext, useContext, useEffect , useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../firebase";
export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is no Auth Provider')
    return context
}




export function AuthProvider({children}){
    const logout = () => signOut(auth)
    const signup = (email,password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email,password) => signInWithEmailAndPassword(auth, email,password)

    useEffect(() => {
        const unsusbscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => unsusbscribe();
    }, []);
    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <authContext.Provider value={{signup, login, user, logout, loading}}>
            {children}
        </authContext.Provider>
    )
}