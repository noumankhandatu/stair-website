import React from "react";
import { Appheading } from "../../../theme";
import { MenuItem, Select } from "@mui/material";
const positionOptions = [];

for (let i = 1; i <= 5000; i += 220) {
  positionOptions.push(i);
}
const StairsLayout = () => {
  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {positionOptions.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option + 79} mm
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default StairsLayout;
