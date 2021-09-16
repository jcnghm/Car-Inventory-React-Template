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
        chooseModel: (state, action) => { state.model = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseTrim: (state, action) => { state.trim = action.payload},
        chooseOptions: (state, action) => { state.added_options = action.payload},
        chooseDimensions: (state, action) => { state.dimensions = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseModel, choosePrice, chooseTrim, chooseOptions, chooseDimensions, chooseWeight } = rootSlice.actions;