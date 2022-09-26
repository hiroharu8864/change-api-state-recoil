import useSWR from "swr";

import { CovidData } from "../components/type/CovidData";

type Props = {
  country: string;
};

export const useGetCovidDataCountry = (Props) => {
  const { country } = Props;

  const covidDataApi = "https://covid19.mathdro.id/api/";
  const covidDataCountryApi = `${covidDataApi}/countries/${country}`;

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return response.json();
  };

  const { data, error } = useSWR<CovidData>(covidDataCountryApi, fetcher, {
    suspense: true
  });
  return { data, error };
};
