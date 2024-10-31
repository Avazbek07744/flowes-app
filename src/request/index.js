import { BACE_URL } from "../lib/utils";

export async function login(data){
    const res = await fetch(BACE_URL+'/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(res);
    
}