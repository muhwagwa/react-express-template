import { useState } from "react"

export const useLocalStorage = () => {
    const [value, setValue] = useState<string | null>(null);

    const setItem = (key: string, vaule: string) => {
        localStorage.setItem(key, vaule);
        setValue(vaule);
    };

    const getItem = (key:string) => {
        const value = localStorage.getItem(key);
        setValue(value);
        return value;
    }

    const removeItem = (key:string) => {
        localStorage.removeItem(key);
        setValue(null);
    }

    return { value, setItem, getItem, removeItem };
}