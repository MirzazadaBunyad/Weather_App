const apiKey = "4e176c0ab1fb95605bdaf5523947d73e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locInp = document.getElementById("locInp");
const searchBtn = document.getElementById("searchBtn");
const locEl = document.getElementById("loc");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");

searchBtn.addEventListener("click", () => {
  const loc = locInp.value;
  if (loc) {
    weatherData(loc);
  }
});

async function weatherData(loc) {
  try {
    const url = `${apiUrl}?q=${loc}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.main) {
      locEl.textContent = `Region: ${data.name},${data.sys.country}`;
      tempEl.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
      descEl.textContent = `Description:
      ${data.weather[0].description
        .charAt(0)
        .toUpperCase()}${data.weather[0].description.slice(1).toLowerCase()}`;
    } else {
      console.error();
    }
  } catch (error) {
    console.error(error);
  }
}
