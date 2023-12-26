import { TextField } from "@mui/material";

const OthersInputField = ({ handleChange, formData }) => {
  return (
    <>
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.perfectTourTime}
        name="perfectTourTime"
        className="w-full"
        id="outlined-basic4"
        label="perfectTourTime"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.howToGoThere}
        name="howToGoThere"
        className="w-full"
        id="outlined-basic4"
        label="howToGoThere"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.howToStayThere}
        name="howToStayThere"
        className="w-full"
        id="outlined-basic4"
        label="howToStayThere"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.howDoHere}
        name="howDoHere"
        className="w-full"
        id="outlined-basic4"
        label="howDoHere"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.whereToEat}
        name="whereToEat"
        className="w-full"
        id="outlined-basic4"
        label="whereToEat"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.tourTipsGuide}
        name="tourTipsGuide"
        className="w-full"
        id="outlined-basic4"
        label="tourTipsGuide"
        variant="outlined"
      />
      <TextField
        style={{ marginBottom: "8px" }}
        type="text"
        multiline
        onChange={handleChange}
        defaultValue={formData?.topTourPlace}
        name="topTourPlace"
        className="w-full"
        id="outlined-basic4"
        label="topTourPlace"
        variant="outlined"
      />
    </>
  );
};

export default OthersInputField;
