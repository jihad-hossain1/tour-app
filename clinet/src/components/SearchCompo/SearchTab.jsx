import { Box } from "@mui/material";
// import SerachForm from "./SerachForm";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import SerachForm from "./SearchForm";
import { motion } from "framer-motion";

const SearchTab = () => {
  const [value, setValue] = useState("tour");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="pt-4 ">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TabList
              onChange={handleChange}
              style={{ display: "flex", justifyItems: "center", gap: "10px" }}
              aria-label="search feild"
            >
              <Tab
                style={{
                  textTransform: "capitalize",
                  borderBottom: "1px solid #fff",
                }}
                label="Tour"
                value="tour"
              />
              <Tab
                style={{
                  textTransform: "capitalize",
                  borderBottom: "1px solid #fff",
                }}
                label="Hotels"
                value="hotels"
              />
              <Tab
                style={{
                  textTransform: "capitalize",
                  borderBottom: "1px solid #fff",
                }}
                label="Activity"
                value="activity"
              />
            </TabList>
          </Box>
          <TabPanel value="tour">
            <SerachForm />
          </TabPanel>
          <TabPanel value="hotels">
            <SerachForm />
          </TabPanel>
          <TabPanel value="activity">
            <SerachForm />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default SearchTab;
