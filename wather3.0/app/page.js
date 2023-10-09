'use client'

import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import WeatherData from '@/components/WeatherData';
import Spinner from '@/components/Spinner';



const Weather = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;


  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setWeather(response.data);
      //  console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the weather data: ', error);
      })
      .finally(() => {
        setCity('');
        setLoading(false);
      });
  };

  return (
    <div>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
        {/* Background image */}
        <Image
          src='https://images.unsplash.com/photo-1696257810306-16abdcccde5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          layout='fill'
          className='object-cover'
        />
      
     

      {/* Search */}
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent backdrop-blur-lg border border-none text-white rounded-2xl'>
            <div>
                <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent  border-none text-white focus:outline-none placeholder:text-gray-100 text-2xl' 
                type='text' 
                placeholder='Search City'
                value={city}
                />
            </div>
            <button type="submit">
                <BsSearch size={20}/>
            </button>
        </form>
      </div>

      {/* Weather */}
      {loading ? <Spinner /> : weather.main && <WeatherData data={weather} />}
    </div>
  );
};

export default Weather;
