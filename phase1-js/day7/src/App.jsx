import { useState } from 'react'

function App() {
  const [city, setCity] = useState("Lagos")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const getWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError("")
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`
      )
      const data = await res.json()
      if (data.cod !== 200) throw new Error(data.message)
      setWeather(data)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeather} disabled={loading}>
        {loading ? "Loading..." : "Get Weather"}
      </button>
      
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      {weather && (
        <div>
          <h2>{weather.name}: {weather.main.temp}°C</h2>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default App