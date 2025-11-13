async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const infoDiv = document.getElementById("weatherInfo");

  if (!city) {
    infoDiv.innerHTML = "<p>Por favor, escribe una ciudad.</p>";
    return;
  }


  const API_KEY = "11e218d668916c936961f264c6b22639";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      infoDiv.innerHTML = "<p>Ciudad no encontrada.</p>";
      return;
    }

    const { main, weather, sys, dt, name } = data;
    const condition = weather[0].main;
    const temp = Math.round(main.temp);
    const sunrise = sys.sunrise;
    const sunset = sys.sunset;
    const isDay = dt >= sunrise && dt < sunset;

    //cambia el bkground según clima y hora
    let bg;
    if (condition === "Rain") bg = "linear-gradient(to bottom, #2c3e50, #4ca1af)";
    else if (condition === "Clouds") bg = "linear-gradient(to bottom, #757f9a, #d7dde8)";
    else if (condition === "Clear" && isDay) bg = "linear-gradient(to bottom, #56ccf2, #2f80ed)";
    else if (condition === "Clear" && !isDay) bg = "linear-gradient(to bottom, #141e30, #243b55)";
    else bg = "linear-gradient(to bottom, #606c88, #3f4c6b)";

    document.body.style.background = bg; //lo aplica al dc

    infoDiv.innerHTML = `
      <div class="city">${name}, ${sys.country}</div>
      <div class="temp">${temp}°C</div>
      <div class="desc">${condition} · ${isDay ? "☀️ Día" : "🌙 Noche"}</div>
    `;
  } catch (err) {
    infoDiv.innerHTML = "<p>Error al obtener el clima.</p>";
    console.error(err);
  }
}
