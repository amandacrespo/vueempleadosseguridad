<template>
    <div class="m-3">
        <h2>Subordinados</h2>
        <div v-if="subordinados.length === 0">
            <p>No se encontraron subordinados.</p>
        </div>
        
        <table class="table table-striped" v-else>
            <thead>
                <tr>
                    <th>ID Empleado</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="subordinado in subordinados" :key="subordinado">
                    <td>{{ subordinado.idEmpleado }}</td>
                    <td>{{ subordinado.apellido }}</td>
                    <td>{{ subordinado.oficio }}</td>
                    <td>{{ subordinado.salario }}</td>
                    <td>{{ subordinado.director }}</td>
                </tr>
            </tbody>
        </table>
        <router-link to="/" class="btn btn-secondary">Volver al inicio</router-link>
    </div>
</template>

<script>
import EmpleadosService from '@/services/EmpleadosService';

const service = new EmpleadosService();
export default {
    data() {
        return {
            subordinados: [],
        };
    },
    mounted(){
        service.getSubordinados()
        .then(response => {
            this.subordinados = response;
        })
    }
}
</script>

<style>

</style>