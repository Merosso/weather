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

const absoluteNull = -273.15

export const getWeatherThunk = createAsyncThunk<Data, string, {rejectValue: string}>(
    'weatherSlice/getWeatherThunk',
    async function (city, {rejectWithValue}) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=f647678a68e3dc3b05d2543d2b18708f`)
        if (response.status !== 200) {
            return rejectWithValue('Что-то пошло не так')
        }
        const data = response.json()
        return data
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherThunk.fulfilled, (state, action) => {
                state.data.status = 'resolved'
                state.data.name = action.payload.name
                state.data.weather = action.payload.weather[0].description
                state.data.main.temp = Math.ceil(absoluteNull + action.payload.main.temp)
            })
            .addCase(getWeatherThunk.rejected, (state, action) => {
                state.data.status = 'rejected'
                state.error = action.payload
            })
    }
})

export default weatherSlice.reducer