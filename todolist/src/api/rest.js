import axios from 'axios'

const baseUrl = axios.create({
    baseURL: 'http://localhost:3000/todo'
});
//funcion para traer los datos
export const getTask = async() => {
    const result = await baseUrl.get('/')
    return result.data
};

//funcion para enviar datos
export const postTask = (id) =>  baseUrl.post('/', id);

//eliminamos las tareas
export const deleteTask =(id)=> baseUrl.delete(`/${id}`);

//editar la tareas en la
export const putTask = (product) => baseUrl.put(`/${product.id}`,product);