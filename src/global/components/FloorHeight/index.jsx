import { useDispatch, useSelector } from "react-redux";
import { Select, MenuItem } from "@mui/material";
import { Appheading } from "../../../theme";
import { setFloorHeight } from "../../../toolkit/globalSlice";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";

const AppFloorHeight = () => {
  const dispatch = useDispatch();

  const options = [];
  for (let i = 300; i <= 4000; i += 5) {
    options.push(i);
  }

  const handleFloorHeightChange = (event) => {
    const newFloorHeight = event.target.value;
    dispatch(setFloorHeight(newFloorHeight));
  };
  const floorHeightRisers = useSelector((state) => state);
  console.log(floorHeightRisers.GlobalStairsLayoutSlice, "asdsad");

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select
        MenuProps={floorHeightStyleProps}
        sx={floorHeightStyle}
        fullWidth
        defaultValue={2600}
        onChange={handleFloorHeightChange}
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

export default AppFloorHeight;
