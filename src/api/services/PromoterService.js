import apiService from "../apiManager";

class PromoterService {
 
    async savePromoter(promoterInfo){
        return await apiService.apiPOST("/promoter/savePromoter", promoterInfo);
    }

    async getPromotersList(requestBody){
        return await apiService.apiPOST("/promoter/getPromotersList", requestBody);
    }
}

export default new PromoterService();