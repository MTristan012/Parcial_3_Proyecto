export async function getAPI(lat,lon) {
  const APIKey = "67a163bc37c83bcbda850c775bfa47e1";
  try {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
