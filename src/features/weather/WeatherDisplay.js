import WeatherCard from "./WeatherCard";
import WeatherHourCard from "./WeatherHourCard";

const WeatherDisplay = ({ data, celsiusStatus }) => {
  const { name, region, country } = data.location;
  const { current } = data;
  const [{ astro, day, hour: hourDatas }] = data.forecast.forecastday;
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-gray-600">{name}</h1>
          <p className="text-xl font-thin text-gray-400">
            {region}, {country}
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-8xl text-gray-600">
            {celsiusStatus
              ? Math.floor(current.temp_c) + "°C"
              : Math.floor(current.temp_f) + "°F"}
          </p>

          <div className="self-end">
            <img src={"https:" + current.condition.icon} className="w-full" />
          </div>
        </div>
      </div>
      <div className="p-8 bg-slate-200 rounded-xl mt-10">
        <p className="uppercase text-gray-400 mb-4">Today's forecast</p>
        <div className="flex gap-4 overflow-x-scroll">
          {hourDatas.map((hourData) => (
            <WeatherHourCard
              hourData={hourData}
              key={hourData.time.slice(-5)}
              celsiusStatus={celsiusStatus}
            />
          ))}
        </div>
      </div>
      <div className="p-8 bg-slate-200 rounded-xl mt-10">
        <p className="uppercase text-gray-400 mb-4">Weather Details</p>
        <div className="flex gap-4 m-auto flex-wrap">
          <WeatherCard
            data={{
              key: "Sunrise",
              value: astro.sunrise,
              imgUrl: "https://cdn-icons-png.flaticon.com/128/3920/3920639.png",
            }}
          />
          <WeatherCard
            data={{
              key: "Sunset",
              value: astro.sunset,
              imgUrl: "https://cdn-icons-png.flaticon.com/128/1852/1852515.png",
            }}
          />
          <WeatherCard
            data={{
              key: "Chances of rain",
              value: day.daily_chance_of_rain + "%",
              imgUrl: "https://cdn-icons-png.flaticon.com/128/606/606797.png",
            }}
          />
          <WeatherCard
            data={{
              key: "Pressure",
              value: current.pressure_mb + " mb",
              imgUrl: "https://cdn-icons-png.flaticon.com/128/5705/5705278.png",
            }}
          />
          <WeatherCard
            data={{
              key: "Wind",
              value: current.wind_mph + " km/h",
              imgUrl: "https://cdn-icons-png.flaticon.com/128/959/959711.png",
            }}
          />
          <WeatherCard
            data={{
              key: "UV Index",
              value: current.uv + " of 10",
              imgUrl:
                "https://cdn-icons-png.flaticon.com/128/12448/12448024.png",
            }}
          />
          <WeatherCard
            data={{
              key: "Feels like",
              value:
                (celsiusStatus ? current.feelslike_c : current.feelslike_f) +
                " °",
              imgUrl:
                "https://cdn-icons-png.flaticon.com/128/13171/13171419.png",
            }}
          />
          <WeatherCard
            data={{
              key: "Visibility",
              value: current.vis_km + " km",
              imgUrl:
                "https://cdn-icons-png.flaticon.com/128/11502/11502607.png",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
