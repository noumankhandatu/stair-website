import { Select, MenuItem } from "@mui/material";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";

const AppNumberOfRisers = () => {
  const options = [];

  // Generate options from 13 @ 200.00mm to 15 @ 200.00mm
  for (let i = 13; i <= 15; i++) {
    options.push({
      label: `${i} @ 200.00mm`,
      value: i,
    });
  }

  const defaultValue = 13; // Default value

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Number of Risers</Appheading>
      <Select
        defaultValue={defaultValue} // Set the default value to 13
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

export default AppNumberOfRisers;
