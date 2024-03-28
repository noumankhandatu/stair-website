import { Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";
import { setWidthRun2 } from "../../../toolkit/globalSlice";
const defaultValue = 865;

const AppWidthRun2 = () => {
  const dispatch = useDispatch();

  const options = [];

  for (let i = 665; i <= 1000; i++) {
    options.push({
      label: `${i}mm`,
      value: i,
    });
  }

  const handleWidthChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setWidthRun2(selectedValue));
  };

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Width (Run 2)</Appheading>
      <Select
        defaultValue={defaultValue}
        MenuProps={floorHeightStyleProps}
        sx={floorHeightStyle}
        fullWidth
        onChange={handleWidthChange}
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

export default AppWidthRun2;
