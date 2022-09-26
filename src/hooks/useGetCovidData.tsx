import useSWR from "swr";

import { CovidData } from "../components/type/CovidData";

export const useGetCovidData = () => {
  const covidDataApi = "https://covid19.mathdro.id/api/";
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return response.json();
  };

  const { data, error } = useSWR<CovidData>(covidDataApi, fetcher, {
    suspense: true
  });
  return { data, error };
};
