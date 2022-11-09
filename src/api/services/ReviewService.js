import apiService from "../apiManager";

class ReviewService {
 
    async saveReview(reviewInfo){
        return await apiService.apiPOST("/review/saveReview", reviewInfo);
    }
}

export default new ReviewService();