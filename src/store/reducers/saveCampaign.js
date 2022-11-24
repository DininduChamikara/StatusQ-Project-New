import { createSlice } from "@reduxjs/toolkit";

export const saveCampaignSlice = createSlice({
  name: "saveCampaign",
  initialState: {
    platform: "",
    education: {
      olCat: false,
      alCat: false,
      alSubCat: {
        subMaths: false,
        subBio: false,
        subCommerce: false,
        subArt: false,
        subTechnology: false,
      },
      undergraduateCat: false,
      postgraduateCat: false,
    },
    age: {
      ageGroup_13_15: false,
      ageGroup_16_18: false,
      ageGroup_19_25: false,
      ageGroup_26_35: false,
      ageGroup_36_60: false,
      ageGroup_over_60: false,
    },
    region: {
      western: false,
      uva: false,
      sabaragamuwa: false,
      central: false,
      nothern: false,
      northernWestern: false,
      southern: false,
      eastern: false,
      northCentral: false,
    },
    language: {
      sinhala: false,
      tamil: false,
      english: false,
    },
    gender: {
      male: false,
      female: false,
    },
  },
  reducers: {
    changeCampaignAudienceDetails: (state, action) => {
      state.platform = action.payload.platform;
      state.education = action.payload.education;
      state.age = action.payload.age;
      state.region = action.payload.region;
      state.language = action.payload.language;
      state.gender = action.payload.gender;
    },
  },
});

export const { changeCampaignAudienceDetails } = saveCampaignSlice.actions;
export default saveCampaignSlice.reducer;
