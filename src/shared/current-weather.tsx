import { Weather } from "./model/weather-interface";

export interface CurrentWeatherProps {
  weatherResponse: Weather | undefined;
}

export function CurrentWeather(props: CurrentWeatherProps) {
  const { weatherResponse } = props;

  return (
    <div className="grid grid-cols-[600px,320px_minmax(auto,320px)] gap-5 m-5 ">
      <div className="grid grid-cols-[600px,320px_minmax(auto,320px)] gap-5 m-5 ">
        <div className="grid-cols-2">
          <div>{weatherResponse?.nearest_area[0]?.areaName[0]?.value}</div>
          <div>{weatherResponse?.current_condition[0].temp_C}</div>

          <div className="flex justify-between relative">
            <div className="text-slate-700 pr-5 before:border-b-2 before:border-dotted before:border-slate-700 before:absolute before:bottom-1 before:left-0 before:w-full before:h-px bg-white before:-z-10">
              По ощущению
            </div>
            <div className="pl-5 bg-white">
              {weatherResponse?.current_condition[0].FeelsLikeC}
            </div>
          </div>
          <div className="flex justify-between relative">
            <div className="text-slate-700 pr-5 before:border-b-2 before:border-dotted before:border-slate-700 before:absolute before:bottom-1 before:left-0 before:w-full before:h-px bg-white before:-z-10">
              Ветер
            </div>
            <div className="pl-5 bg-white">
              {weatherResponse?.current_condition[0].windspeedKmph} км/ч
            </div>
          </div>
          <div className="flex justify-between relative">
            <div className="text-slate-700 pr-5 before:border-b-2 before:border-dotted before:border-slate-700 before:absolute before:bottom-1 before:left-0 before:w-full before:h-px bg-white before:-z-10">
              Давление
            </div>
            <div className="pl-5 bg-white">
              {weatherResponse?.current_condition[0].pressure} мб
            </div>
          </div>
          <div className="flex justify-between relative">
            <div className="text-slate-700 pr-5 before:border-b-2 before:border-dotted before:border-slate-700 before:absolute before:bottom-1 before:left-0 before:w-full before:h-px bg-white before:-z-10">
              Влажность
            </div>
            <div className="pl-5 bg-white">
              {weatherResponse?.current_condition[0].humidity} %
            </div>
          </div>
          <div>asd</div>
        </div>
      </div>
    </div>
  );
}
