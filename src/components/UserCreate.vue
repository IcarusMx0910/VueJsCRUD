<template>
    <div class="card card-body mt-4">
        <h2>------------ Registro de Usuarios -----------</h2>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label>Nombre: </label>
                <input v-model="form.name" class="form-control" required />
            </div>
            <div class="form-group mt-3">
                <label>Correo: </label>
                <input v-model="form.email" class="form-control" type="email" required>
            </div>
            <button type="sudmit" class="btn btn-success mt-3">
                Crear Usuario
            </button>
        </form>
    </div>
</template>
//Script que será llamado al pulsar el boton enviar del formulario
<script>
import { createUser } from '../firebase'
import {reactive} from 'vue'

export default {
    setup(){
        const form = reactive ({name: '', email: ''})
        const onSubmit = async () => {
            await createUser({ ...form })
            form.name = ''
            form.email = ''
        }

        return {form, onSubmit}
    }
}
</script>
