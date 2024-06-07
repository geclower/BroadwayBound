import api from "./apiConfig.js"

//get

export const getShows = async () => {
    try {
        const response = await api.get("/shows")
        return response.data
    } catch (error) {
        console.error("Error getting shows:", error)
    }
}

export const getClosing = async () => {
    try {
        const response = await api.get("/shows/closing")
        return response.data
    } catch (error) {
        console.error("Error getting shows:", error)
    }
}

export const getMusicals = async () => {
    try {
        const response = await api.get("/shows/musicals")
        return response.data
    } catch (error) {
        console.error("Error getting shows:", error)
    }
}

export const getNonMusicals = async () => {
    try {
        const response = await api.get("/shows/nonmusicals")
        return response.data
    } catch (error) {
        console.error("Error getting shows:", error)
    }
}

export const getShow = async (name) => {
    try {
        const response = await api.get(`/shows/${name}`)
        return response.data
    } catch (error) {
        console.error("Error getting show:", error)
    }
}

export const getShowById = async (id) => {
    try {
        const response = await api.get(`/shows/${id}`)
        return response.data
    } catch (error) {
        console.error("Error getting show:", error)
    }
}

//create

export const createShow = async (showData) => {
    try {
        const response = await api.post(`/shows`, showData)
        return response.data
    } catch (error) {
        console.error("Error creating show:", error)
    }
}

//update

export const editShow = async (name, showData) => {
    try {
        const response = await api.put(`shows/${name}`, showData)
        return response.data
    } catch (error) {
        console.error("Error updating show:", error)
    }
}

export const editShowById = async (id, showData) => {
    try {
        const response = await api.put(`shows/${id}`, showData)
        return response.data
    } catch (error) {
        console.error("Error updating show:", error)
    }
}

//delete

export const deleteshow = async (name) => {
    try {
        const response = await api.delete(`shows/${name}`)
        return response.data
        
    } catch (error) {
        console.error("Error deleteing show:", error)
    }
}

export const deleteshowById = async (id) => {
    try {
        const response = await api.delete(`shows/${id}`)
        return response.data
        
    } catch (error) {
        console.error("Error deleteing show:", error)
    }
}