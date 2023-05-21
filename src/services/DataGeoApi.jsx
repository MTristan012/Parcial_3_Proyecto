export async function getAPI(lat,lon) {
  const APIKey = "aa3396459513d0e7b566157a2ee45cb9";

  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
