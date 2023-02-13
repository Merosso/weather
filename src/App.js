import {useState, useEffect} from 'react';
import {useAppSelector, useAppDispatch} from './hook.ts';
import {getWeatherThunk} from './redux/weatherSlice.ts';



function App() {

    const [city, setCity] = useState('Москва')
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.weather.data)
    const {error} = useAppSelector(state => state.weather.error)

    useEffect(() => {
        dispatch(getWeatherThunk(city))
    }, [dispatch])

  return (
    <div className="App">
      <div className='search_box'>
        <input
            type='text'
            className='search_input'
            placeholder='Введите название города'
            onChange={(event) => {setCity(event.target.value)}}
        />
        <button
            className='search_button'
            onClick={() => (dispatch(getWeatherThunk(city)))}
        >Search</button>
      </div>
      <div className='search__result'>
          {error && <h1>{error}</h1>}
        <h1 className='search__result_city'>{state.name}</h1>
        <strong className='search__result_temp'>{state.main.temp}</strong>
        <strong className='search__result_weather'>{state.weather}</strong>
      </div>
    </div>
  );
}

export default App;
