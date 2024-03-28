import { Select, MenuItem } from "@mui/material";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";

const AppRegulation = () => {
  const options = [
    { label: "UK Domestic", value: "UK Domestic" },
    { label: "UK Domestic (Standard)", value: "UK Domestic (Standard)" },
    { label: "Scottish Domestic", value: "Scottish Domestic" },
    { label: "UK Commercial", value: "UK Commercial" },
    { label: "No Regulation", value: "No Regulation" },
  ];

  const defaultValue = "UK Domestic (Standard)"; // Default value

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Regulations</Appheading>
      <Select
        defaultValue={defaultValue} // Set the default value
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

export default AppRegulation;
