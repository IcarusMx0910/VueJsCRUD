<template>
  <div class="card card-body mt-4">
    <h3>Editar Usuarios</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Nombre: </label>
        <input v-model="form.name" class="form-control" required />
      </div>
      <div class="form-group mt-3">
        <label>Correo: </label>
        <input v-model="form.email" class="form-control" type="email" required />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Actualizar</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '../firebase'
//--------Script que se llama presionar el boton----------
export default {
  setup(){
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({name: '', email: ''})
    onMounted(async() => {
      const user = await getUser(userId.value)
      form.name = user.name
      form.email = user.email
    })

    const update = async () => {
      await updateUser(userId.value, {...form})
      router.push('/')
      form.name = ''
      form.email = ''
    }

    return {form, update}
  }
}

</script>
