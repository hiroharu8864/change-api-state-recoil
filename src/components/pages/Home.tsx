import { FC, memo, Suspense } from "react";
import { Typography } from "@material-ui/core";
import { useRecoilState } from "recoil";

import { SwitchCountry } from "../molecules/SwitchCountry";
import { useGetCovidData } from "../../hooks/useGetCovidData";
import { useGetCovidDataCountry } from "../../hooks/useGetCovidDataCountry";
import { countryAtom } from "../../store/countryAtom";

const ResultCountsComponent = () => {
  /** Recoilデータ有無で処理を分ける */
  const [country, setCountry] = useRecoilState(countryAtom);

  if (country === "") {
    const { data } = useGetCovidData();
    console.log(data + "Data");
  } else {
    const { data } = useGetCovidDataCountry();
    console.log(data + "DataCountry");
  }

  // const { data } = useGetCovidData();

  return (
    <>
      <p>test</p>
      <SwitchCountry />
    </>
  );
};

export const Home: FC = memo(() => {
  /** カスタムフック経由でAPI呼び出し */

  return (
    <>
      <Typography
        color="primary"
        variant="h6"
        align="center"
        gutterBottom
        noWrap
      >
        API Test Page
      </Typography>
      <Suspense fallback={<p>データ取得中....</p>}>
        <ResultCountsComponent />
      </Suspense>
    </>
  );
});
