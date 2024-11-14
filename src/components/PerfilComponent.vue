<template>
    <div class="m-3">
        <div class="card w-50">
            <div class="card-header pt-3">
                <h3 class="card-title">Información del Empleado</h3>
            </div>
            <div class="card-body pb-0">
                <p><strong>ID:</strong> {{ empleado.idEmpleado }}</p>
                <p><strong>Apellido:</strong> {{ empleado.apellido }}</p>
                <p><strong>Oficio:</strong> {{ empleado.oficio }}</p>
                <p><strong>Salario:</strong> {{ empleado.salario }}€</p>
                <p><strong>Director:</strong> {{ empleado.director }}</p>
            </div>
        </div>
        <router-link to="/" class="btn btn-secondary mt-3">Volver a Inicio</router-link>
    </div>
</template>

<script>
import EmpleadosService from '@/services/EmpleadosService';

const service = new EmpleadosService();

export default {
    data() {
        return {
            empleado: {
                idEmpleado: 0,
                apellido: '',
                oficio: '',
                salario: 0,
                director: ''
            }
        };
    },
    mounted(){
        service.getPerfil()
        .then(response => {
            this.empleado = response;
        })
    }
}
</script>

<style>

</style>