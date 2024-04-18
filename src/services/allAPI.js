import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

// register api - called by component auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}

export const getRegisterAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/register`, "")
}

