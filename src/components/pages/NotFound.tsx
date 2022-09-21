import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

export const NotFound: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom noWrap>
        404 Not Found
      </Typography>
      <Button
        onClick={onClickHome}
        className={classes.btnStyle}
        variant="contained"
      >
        top page
      </Button>
    </>
  );
});
