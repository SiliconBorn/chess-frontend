import { selector } from "recoil";
import { authState } from "../atoms/Auth";



export const authSelector = selector({
    key:"authSelector",
    get:({get})=>{
        const auth = get(authState);
        return auth;
    }
})