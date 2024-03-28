import { Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { Appheading } from "../../../theme";
import { floorHeightStyle, floorHeightStyleProps } from "../../styles";
import { setIndividualGoing } from "../../../toolkit/globalSlice";
const defaultValue = 222;

const AppIndividualGoing = () => {
  const dispatch = useDispatch();

  const options = [];
  for (let i = 280; i >= 222; i--) {
    options.push({
      mm: i,
      degree: (42 - ((i - 222) * (42 - 35.5)) / (280 - 222)).toFixed(1),
    });
  }

  const handleIndividualGoingChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setIndividualGoing(selectedValue));
  };

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Individual Going</Appheading>
      <Select
        defaultValue={defaultValue}
        MenuProps={floorHeightStyleProps}
        sx={floorHeightStyle}
        fullWidth
        onChange={handleIndividualGoingChange}
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
