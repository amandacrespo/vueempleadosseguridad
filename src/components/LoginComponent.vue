<template>
    <form class="container mt-5 p-4 border rounded" style="max-width: 400px;" @submit.prevent="login">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <div class="mb-3">
            <label for="username" class="form-label">Nombre de Usuario</label>
            <input 
                type="text" 
                class="form-control" 
                id="username" 
                placeholder="Ingresa tu nombre de usuario" 
                v-model="user.username" 
                required
            >
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input 
                type="password" 
                class="form-control" 
                id="password" 
                placeholder="Ingresa tu contraseña" 
                v-model="user.password" 
                required
            >
        </div>
        <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
    </form>
</template>

<script>
import EmpleadosService from '@/services/EmpleadosService';

const service = new EmpleadosService();

export default {
    data() {
        return {
            user: {
                username: 'REY',
                password: '7839'
            }
        };
    },
    methods:{
        login(){
            service.getToken(this.user)
            .then(response => {
                localStorage.setItem('bearer_token', 'Bearer '+response);
                this.$emit('updateLoginStatus', true); 
                this.$router.push('/');
            })
        }
    }
}
</script>

<style>

</style>