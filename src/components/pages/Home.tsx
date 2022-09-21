import { FC, memo, Suspense } from "react";
import { Typography } from "@material-ui/core";

const ResultCountsComponent = () => {
  return (
    <>
      <p>test</p>
      <p>test</p>
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
