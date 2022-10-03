import useSWR from "swr";
import { useRecoilState } from "recoil";

import { CovidData } from "../components/type/CovidData";
import { countryAtom } from "../store/countryAtom";

export const useGetCovidDataCountry = () => {
  // const [country, setCountry] = useRecoilState(countryAtom);
  // console.log(country);

  const covidDataApi = "https://covid19.mathdro.id/api/";
  // const covidDataCountryApi = `${covidDataApi}/countries/${country}`;

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    return response.json();
  };

  const { data, error } = useSWR<CovidData>(covidDataApi, fetcher, {
    suspense: true
  });
  return { data, error };
};
