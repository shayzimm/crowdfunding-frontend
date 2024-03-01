import { useContext } from "react";

import { AuthContext } from "../components/AuthProvider.jsx";

export const useAuth = () => {
    return useContext(AuthContext);
};