import { Select, MenuItem } from "@mui/material";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";

const AppCeilingHeight = () => {
  const defaultValue = 2350; // Default value

  const options = [];
  for (let i = 300; i <= 4000; i += 5) {
    options.push(i);
  }

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Ceiling Height</Appheading>
      <Select
        MenuProps={floorHeightStyleProps}
        sx={floorHeightStyle}
        fullWidth
        defaultValue={defaultValue} // Set the default value
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default AppCeilingHeight;
