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
        mobile: undefined,
        province: undefined,
        language: undefined,
        educationalCategory: undefined,
        platforms: {
            whatsapp: {
                minAccessibleViews: undefined,
                genderAudience: {
                    malePercentage: undefined,
                    femalePercentage: undefined,
                },
                ageCategories: [],
                educationCategories: [],
                regionCategories:[],
                languageCategories: [],
            },
            facebook: {
                minAccessibleViews: undefined,
                genderAudience: {
                    malePercentage: undefined,
                    femalePercentage: undefined,
                },
                ageCategories: [],
                educationCategories: [],
                regionCategories:[],
                languageCategories: [],
            },
            instagram: {
                minAccessibleViews: undefined,
                genderAudience: {
                    malePercentage: undefined,
                    femalePercentage: undefined,
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
    }
})

export const {
    changePersonalDetails,
} = savePromoterSlice.actions;
export default savePromoterSlice.reducer;