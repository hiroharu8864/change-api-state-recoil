/**
 * from:
 * https://covid19.mathdro.id/api/
 */
export type CovidData = {
  confirmed: {
    value: number;
    detail: string;
  };
  recovered: {
    value: number;
    detail: string;
  };
  deaths: {
    value: number;
    detail: string;
  };
  dailySummary: string;
  dailyTimeSeries: {
    pattern: string;
    example: string;
  };
  image: string;
  source: string;
  countries: string;
  countryDetail: {
    pattern: string;
    example: string;
  };
  lastUpdate: string;
};
