export interface Weather {
  nearest_area: { areaName: { value: string }[] }[];
  current_condition: {
    temp_C: string;
    FeelsLikeC: string;
    windspeedKmph: string;
    pressure: string;
    humidity: string;
  }[];
}
