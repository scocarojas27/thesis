import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertProfesor = payload => api.post(`/Profesor`, payload)
export const getAllProfesores = () => api.get(`/Profesores`)
export const updateProfesorById = (id, payload) => api.put(`/Profesor/${id}`, payload)
export const deleteProfesorById = id => api.delete(`/Profesor/${id}`)
export const getProfesorById = id => api.get(`/Profesor/${id}`)
export const validateProfesor = payload => api.put(`/ProfesorLogin`, payload)

export const insertCurso = payload => api.post(`/Curso`, payload)
export const getAllCursos = () => api.get(`/Cursos`)
export const updateCursoById = (id, payload) => api.put(`/Curso/${id}`, payload)
export const deleteCursoById = id => api.delete(`/Curso/${id}`)
export const getCursoById = id => api.get(`/Curso/${id}`)

export const insertNoticia = payload => api.post(`/Noticia`, payload)
export const getAllNoticias = () => api.get(`/Noticias`)
export const updateNoticiaById = (id, payload) => api.put(`/Noticia/${id}`, payload)
export const deleteNoticiaById = id => api.delete(`/Noticia/${id}`)
export const getNoticiaById = id => api.get(`/Noticia/${id}`)


const apis = {
    insertProfesor,
    getAllProfesores,
    updateProfesorById,
    deleteProfesorById,
    getProfesorById,
    validateProfesor,
    insertCurso,
    getAllCursos,
    updateCursoById,
    deleteCursoById,
    getCursoById,
    insertNoticia,
    getAllNoticias,
    updateNoticiaById,
    deleteNoticiaById,
    getNoticiaById,
}

export default apis