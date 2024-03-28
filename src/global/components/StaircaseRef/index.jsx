import { useState } from "react";
import { TextField } from "@mui/material";
import { Appheading } from "../../../theme";

const AppStaircaseRef = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Appheading sx={{ mt: 2 }}> Staircase Ref</Appheading>
      <TextField
        size="small"
        id="textInput"
        variant="outlined"
        fullWidth
        value={text}
        onChange={handleChange}
        placeholder="Your Ref e.g plot 4"
      />
    </div>
  );
};

export default AppStaircaseRef;
