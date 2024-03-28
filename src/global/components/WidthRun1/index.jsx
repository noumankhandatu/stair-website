import { Select, MenuItem } from "@mui/material";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";

const AppWidthRun1 = () => {
  const options = [];

  // Generate options from 665mm to 1000mm
  for (let i = 665; i <= 1000; i++) {
    options.push({
      label: `${i}mm`,
      value: i,
    });
  }

  const defaultValue = 865; // Default value

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Width (Run 1)</Appheading>
      <Select
        defaultValue={defaultValue} // Set the default value to 865mm
        MenuProps={floorHeightStyleProps}
        sx={floorHeightStyle}
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default AppWidthRun1;
