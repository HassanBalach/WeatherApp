
import CloudImg from '../Assets/Cloud.png'; // Remove curly braces from CloudImg

const WeatherApp =  () => {
 
  const api_key = "fc739660c6c5491b3c0e437abd0cccbc";
  const btn = async ()=>{
    const btnSearch = document.getElementsByClassName('btnSearch');
    console.log(btnSearch)
    if(btnSearch[0].value === ""){
      return 0 ;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${btnSearch[0].value}&appid=${api_key}`
    let response = await fetch(url);
    let data = await response.json();


    let humidity = document.getElementsByClassName('humidity')
    let windSpeed = document.getElementsByClassName('windSpeed')
    let cityName = document.getElementsByClassName('cityName')
    let temperature = document.getElementsByClassName('temperature')

    humidity[0].innerHTML = data.main.humidity;
    windSpeed[0].innerHTML = data.wind.speed;
    cityName[0].innerHTML = data.name;
    temperature[0].innerHTML = data.main.temp;


  }
  return (
    <div>
      <div className='bg-gray-700 w-1/2 m-auto p-1 h-auto '>
        <div className='relative m-10'>
          <input  className='p-1 w-full rounded-sm' type="text" placeholder='Search' />
          <button  type='submit' className=" btnSearch bg-black text-white p-1 absolute top-0 right-0" >Search</button>
        </div>
      <div>
        {/* Corrected image import */}
        <img className='w-1/3 m-auto' src={CloudImg} alt="" />
        <h1 className='temperature text-6xl text-white text-center'>24°C </h1>
        <h1 className=' cityName text-3xl text-white text-center'>Landon</h1>
      </div>
      <div className='flex justify-between text-white '>
        <div>
        <p className='humidity'>64%</p>
        <p>Humidity</p>
        </div>
        <div>
        <p className='windSpeed'>18 km/h</p>
        <p className=''>wind Speed</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default WeatherApp;
