import { createSlice } from "@reduxjs/toolkit";

export const savePromoterSlice = createSlice({
    name: "savePromoter",
    initialState: {
        fullName: "",
        nameWithInit: "",
        dob: "",
        gender: "",
        nic: "",
        address: "",
        postcode: "",
        mobile: "",
        province: "",
        language: "",
        educationalCategory: "",
        platforms: {
            whatsapp: {
                whatsappChecked: false,
                minAccessibleViews: 0,
                genderAudience: {
                    malePercentage: 0,
                    femalePercentage: 0,
                },
                ageCategories: [],
                educationCategories: [],
                regionCategories:[],
                languageCategories: [],
            },
            facebook: {
                facebookChecked: false,
                minAccessibleViews: 0,
                genderAudience: {
                    malePercentage: 0,
                    femalePercentage: 0,
                },
                ageCategories: [],
                educationCategories: [],
                regionCategories:[],
                languageCategories: [],
            },
            instagram: {
                instagramChecked: false,
                minAccessibleViews: 0,
                genderAudience: {
                    malePercentage: 0,
                    femalePercentage: 0,
                },
                ageCategories: [],
                educationCategories: [],
                regionCategories:[],
                languageCategories: [],
            },
        },
    },
    reducers: {
        changePersonalDetails: (state, action) => {
            state.fullName = action.payload.fullName;
            state.nameWithInit = action.payload.nameWithInit;
            state.dob = action.payload.dob;
            state.gender = action.payload.gender;
            state.nic = action.payload.nic;
            state.address = action.payload.address;
            state.postcode = action.payload.postcode;
            state.mobile = action.payload.mobile;
            state.province = action.payload.province;
            state.language = action.payload.language;
            state.educationalCategory = action.payload.educationalCategory;
        },
        changePromoterAccessibilityData: (state, action) => {
            state.platforms = action.payload.platforms;
        },
    }
})

export const {
    changePersonalDetails,
    changePromoterAccessibilityData,
} = savePromoterSlice.actions;
export default savePromoterSlice.reducer;