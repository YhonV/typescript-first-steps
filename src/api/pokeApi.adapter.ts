import axios from "axios";

export interface HttpAdapter{
    get<T>(url: string):Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter{

    async get<T>( url: string): Promise<T>{
        const res = await fetch(url);
        const data: T = await res.json();
        return data;
    }
}


export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios;

    async get<T>( url: string): Promise<T>{
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, body: any){
        // peticion post
        return;
    }

    async patch(url: string, body: any){
        // peticion put
        return;
    }

    async delete(url: string){
        // peticion delete
        return;
    }
}