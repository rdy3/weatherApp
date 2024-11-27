export async function fetchWeather(text: string) {
  const response = await fetch(`https://wttr.in/${text}?format=j1`);
  const weather = await response.json();
  return weather;
}
