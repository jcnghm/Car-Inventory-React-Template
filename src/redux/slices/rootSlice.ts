import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Toyota',
        model: 'Tacoma',
        price: 50000.00,
        trim: 'TRD PRO',
        added_options: 'Premium PKG',
        dimensions: '180',
        weight: '5000'
    },
    reducers: {
        chooseName: (state, action) => { state.make = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;