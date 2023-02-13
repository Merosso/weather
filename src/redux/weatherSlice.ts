import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

type Data = {
    status: string;
    name: string;
    weather: string | any;
    main: {
        temp: number | any;
    };
}

type DataState = {
    data: Data;
    error: string | undefined;
}

const initialState: DataState = {
    data: {
        status: '',
        name: '',
        weather: null,
        main: {
            temp: null
        }
    },
    error: ''
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
})

export default weatherSlice.reducer