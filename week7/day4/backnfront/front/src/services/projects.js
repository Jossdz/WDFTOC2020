import axios from 'axios'

const baseURL = 'http://localhost:3000/api/projects'

// Creamos una instacia del servicio mediante axios.create (ahora hacemos get con el servicio)
const projectsService = axios.create({ baseURL })

// Resolvemos la promesa en el servicio en vez del componente
// export const getAllProjects = async () => {
//   const { data } = await projectsService.get()
//   return data
// } 

export const getAllProjects = () => projectsService.get('')

export const getSingleProject = id => projectsService.get(`/${id}`)

export const createProject = project => projectsService.post('', project)

export const updateProject = (id, project) => projectsService.put(`/${id}`, project)

export const deleteProject = id => projectsService.delete(`/${id}`) 