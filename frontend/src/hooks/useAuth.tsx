import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { User, useUser } from "./useUser";

export const useAuth = () => {
    const { user, addUser, removeUser, setUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem("user");
        if (user) {
            console.log(user)
            addUser(JSON.parse(user));
        }
    }, [addUser, getItem]);

    const login = (user: User) => {
        addUser(user);
    };

    const logout = () => {
        removeUser();
    };

    const getUsername = () => {
        const user = getItem("user")
        if (user) {
            return user["username"];
        }
    }

    return { user, login, logout, setUser, getUsername };
}