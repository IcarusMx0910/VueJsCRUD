import firebase from 'firebase'
import { ref, onUnmounted } from 'vue' //33.7K (gzipped: 13.2K)

//---------Inicialización del servicio-------------
const firebaseApp = firebase.initializeApp(require('./FirebaseConfigs').credentials)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')
//---------- Crear --------------
export const createUser = user => {
    return usersCollection.add(user)
}
//----------Consultar 1-------------
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data(): null
}
//--------- Actualizar --------------
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}
//----------- Eliminar ---------------
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}
//---------- Consultar todo ----------
export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
}