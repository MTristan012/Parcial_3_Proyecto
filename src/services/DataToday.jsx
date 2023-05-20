export async function getAPI(city) {
  const APIKey = "aa3396459513d0e7b566157a2ee45cb9";
  //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}