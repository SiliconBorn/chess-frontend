import setAuthToken from "./setAuthToken";


class TokenManager {
   

    static set(val:string):void{
      localStorage.setItem('__ustkn',JSON.stringify(val));
    }

    static get():string{
        const tkn:string|null = localStorage.getItem('__ustkn');
        if(tkn){
            return JSON.parse(tkn);

        }
        return '';
    }

    static remove():void{
        localStorage.removeItem('__ustkn')
    }

    static clear():void{
        localStorage.clear();
    }


    static setAuth():void{
        const token = this.get();
        if(token){
            setAuthToken(token);
        }
    }

}

export default TokenManager