import apiService from "../apiManager";

class PromoterService {
 
    async savePromoter(promoterInfo){
        return await apiService.apiPOST("/promoter/savePromoter", promoterInfo);
    }
}

export default new PromoterService();