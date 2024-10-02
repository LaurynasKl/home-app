import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const login = (user) => setUser(user);
    const logout = () => setUser(null);
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider, UserContext };