import apiService from "../apiManager";

class UserService {
    async login(userInfo){
        return await apiService.apiPOST("/user/login", userInfo);
    }

    async saveUser(userInfo){
        return await apiService.apiPOST("/user/saveUser", userInfo);
    }
}

export default new UserService();