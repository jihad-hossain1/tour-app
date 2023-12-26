import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
  GET_CITIE,
  GET_COUNTIRES,
  GET_DIVISIONS,
} from "../../../queries/countriesQuery";
import { useQuery } from "@apollo/client";

const CountrySelection = ({ handleChange, formData }) => {
  const {
    loading: cload,
    error: cError,
    data: countries,
  } = useQuery(GET_COUNTIRES);

  const { loading: dload, data: divisions } = useQuery(GET_DIVISIONS);
  const { loading: ciload, data: cities } = useQuery(GET_CITIE);

  return (
    <div className="flex flex-col gap-3">
      {/* select country  */}
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          className="w-full"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="countryId"
          defaultValue={formData?.countryId}
          onChange={handleChange}
          label="Country"
        >
          {!cload &&
            countries?.countries?.map((country) => (
              <MenuItem key={country?.id} value={country?.id}>
                {country?.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {/* select division  */}
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-standard-label2">
          Division
        </InputLabel>
        <Select
          className="w-full"
          labelId="demo-simple-select-standard-label2"
          id="demo-simple-select-standard2"
          name="divisionId"
          defaultValue={formData?.divisionId}
          onChange={handleChange}
          label="Division"
        >
          {!cload &&
            divisions?.divisions?.map((division) => (
              <MenuItem key={division?.id} value={division?.id}>
                {division?.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {/* select cities  */}
      <FormControl variant="outlined" style={{ marginBottom: "8px" }}>
        <InputLabel id="demo-simple-select-standard-label3">city</InputLabel>
        <Select
          className="w-full"
          labelId="demo-simple-select-standard-label3"
          id="demo-simple-select-standard3"
          name="cityId"
          defaultValue={formData?.cityId}
          onChange={handleChange}
          label="city"
        >
          {!ciload &&
            cities?.cities?.map((city) => (
              <MenuItem key={city?.id} value={city?.id}>
                {city?.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CountrySelection;
