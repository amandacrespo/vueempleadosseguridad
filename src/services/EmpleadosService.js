import axios from "axios";
import { Global } from "@/Global";

export default class EmpleadosService {
    getToken(user){
        return new Promise((resolve)=>{
            let endpoint = 'auth/login';
            axios.post(Global.urlEmpleados + endpoint, user)
            .then(response => {
                resolve(response.data.response);
            })
        })
    }

    getPerfil(){
        return new Promise((resolve)=>{
            // Realizar la solicitud POST con los headers y el body
            // axios.post(Global.urlEmpleados + endpoint, body, {
            //     headers: headers
            //   })

            let endpoint = 'api/empleados/perfilempleado';

            let headers = {
                'Authorization': localStorage.getItem('bearer_token'),
            };

            axios.get(Global.urlEmpleados + endpoint, { headers: headers })
            .then(response => {
                resolve(response.data);
            })
        })
    }

    getSubordinados(){
        return new Promise((resolve)=>{
            let endpoint = 'api/empleados/subordinados';

            let headers = {
                'Authorization': localStorage.getItem('bearer_token'),
            };

            axios.get(Global.urlEmpleados + endpoint, { headers: headers })
            .then(response => {
                resolve(response.data);
            })
        })
    }

}