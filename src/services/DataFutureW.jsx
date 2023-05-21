export async function getAPI(city) {
  const APIKey = "67a163bc37c83bcbda850c775bfa47e1";
  const Http = "https://";
  try {
    const response = await fetch(
      `${Http}api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
