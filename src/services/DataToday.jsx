export async function getAPI(lat, lon) {
  const APIKey = "aa3396459513d0e7b566157a2ee45cb9";
  //https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={APIKey}&units=metric
  //https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={APIKey}&units=imperial

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}