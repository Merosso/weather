import {useState, useEffect} from 'react'


const [city, setCity] = useState('Москва')

function App() {
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
        >Search</button>
      </div>
      <div className='search__result'>
        <h1 className='search__result_city'></h1>
        <strong className='search__result_temp'></strong>
        <strong className='search__result_weather'></strong>
      </div>
    </div>
  );
}

export default App;
