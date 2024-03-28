import { Select, MenuItem } from "@mui/material";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";

const AppIndividualGoing = () => {
  const options = [];
  // Start from 280 mm and decrement by 1 mm until reaching 222 mm
  for (let i = 280; i >= 222; i--) {
    options.push({
      mm: i,
      degree: (42 - ((i - 222) * (42 - 35.5)) / (280 - 222)).toFixed(1),
    });
  }
  const defaultValue = 222; // Default value

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Individual Going</Appheading>
      <Select
        defaultValue={defaultValue} // Set the default value
        MenuProps={floorHeightStyleProps}
        sx={floorHeightStyle}
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.mm} value={option.mm}>
            {`${option.mm}mm (${option.degree}°)`}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default AppIndividualGoing;
