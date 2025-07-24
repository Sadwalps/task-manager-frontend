import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//add task
export const addtaskAPI = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/add`, reqBody)
}

//get task
export const gettaskAPI = async () => {
    return await commonAPI('GET', `${serverURL}/alltask`)
}

//delete task
export const removetaskAPI = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/removetask/${id}`)
}