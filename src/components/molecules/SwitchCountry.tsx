import { FC, React, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";
import { useRecoilState } from "recoil";

import { useCountryList } from "../../hooks/useCountryList";
import { countryAtom } from "../../store/countryAtom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320
  }
}));

export const SwitchCountry: FC = memo(() => {
  const classes = useStyles();
  const countries = useCountryList();
  const [country, setCountry] = useRecoilState(countryAtom);
  console.log(country);

  return (
    <>
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCountry(e.target.value)
          }
        >
          <option value="">select country</option>
          {countries.map((country, i: number) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
});
