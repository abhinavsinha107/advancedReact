import { createContext, useContext } from "react";
import { User } from "./Demo";

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(DashboardContext);
    if(user === undefined) {
        throw new Error("Please pass the value of user in DashboardContext...")
    }
    return user;
}

export function useChangeUserContext(user: User) {
    
}