<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{id, name, email} in users" :key="id">
          <td>{{name}}</td>
          <td>{{email}}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Editar</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {useLoadUsers, deleteUser} from '../firebase'

export default{
  setup(){
    const users = useLoadUsers()
    return {users, deleteUser}
  }
}

</script>

