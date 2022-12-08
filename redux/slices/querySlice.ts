import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { filteredProperty } from "../../model/filteredProperty";

export interface CounterState {
  value: number;
}

const initialState: filteredProperty = {
  purpose: "",
  rentFrequency: "",
  categoryExternalID: "",
  minPrice: "",
  maxPrice: "",
  areaMax: "",
  roomsMin: "",
  bathsMin: "",
  sort: "",
  locationExternalIDs: "",
  furnishingStatus: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setPurpose(state, action: PayloadAction<string>) {
      state.purpose = action.payload;
    },
    setRentFreq(state, action: PayloadAction<string>) {
      state.rentFrequency = action.payload;
    },
    setCatExId(state, action: PayloadAction<string>) {
      state.categoryExternalID = action.payload;
    },
    setMinP(state, action: PayloadAction<string>) {
      state.minPrice = action.payload;
    },
    setMaxP(state, action: PayloadAction<string>) {
      state.maxPrice = action.payload;
    },
    setMaxA(state, action: PayloadAction<string>) {
      state.areaMax = action.payload;
    },
    setRoom(state, action: PayloadAction<string>) {
      state.roomsMin = action.payload;
    },
    setBath(state, action: PayloadAction<string>) {
      state.bathsMin = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setFurnished(state, action: PayloadAction<string>) {
      state.furnishingStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const queryAction = querySlice.actions;

export default querySlice.reducer;
