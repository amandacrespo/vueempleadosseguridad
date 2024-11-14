<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="!isLogin">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/perfil" v-if="isLogin">Perfil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/subordinados" v-if="isLogin">Subordinados</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="isLogin" @click="deleteToken()">Logout</router-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['isLogin'],
    methods:{
        deleteToken(){
            localStorage.removeItem('bearer_token');
            this.$emit('updateLoginStatus', false); 
        }
    }
}
</script>

<style>

</style>