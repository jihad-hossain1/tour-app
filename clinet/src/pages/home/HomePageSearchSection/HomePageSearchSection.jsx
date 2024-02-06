import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const HomePageSearchSection = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  if (searchValue) {
    console.log(searchValue);
  }
  return (
    <div className="flex justify-center mt-3">
      <Stack
        spacing={2}
        sx={{
          minWidth: { xs: 300, md: 600 },
          backgroundColor: "#fff",
          borderRadius: "6px",
          paddingLeft: { xs: "8px", md: "12px" },
          paddingRight: { xs: "8px", md: "12px" },
          paddingTop: { xs: "8px", md: "12px" },
          paddingBottom: { xs: "8px", md: "12px" },
        }}
      >
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={countries.map(
            (option) => option.label || option.code || option.phone
          )}
          renderInput={(params) => (
            <TextField
              fullWidth
              //   onKeyDown={(event) => {
              //     if (event.key === "Enter") {
              //       // Prevent's default 'Enter' behavior.
              //       event.defaultMuiPrevented = true;
              //       // your handler code
              //     }
              //   }}
              sx={{
                borderRadius: "20px",
                // paddingLeft: { xs: "8px", md: "15px" },
                // paddingRight: { xs: "8px", md: "15px" },
                // paddingTop: { xs: "3px", md: "5px" },
                // paddingBottom: { xs: "3px", md: "5px" },
              }}
              {...params}
              defaultValue={searchValue}
              onChange={handleSearch}
              name="search"
              variant="standard"
              placeholder="Where to go ?"
              //   label="Where to go ?"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default HomePageSearchSection;
