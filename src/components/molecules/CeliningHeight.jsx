import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Appheading } from "../../theme";

const CeilingHeight = () => {
  const options = [];
  for (let i = 2000; i <= 3000; i++) {
    options.push(i);
  }

  return (
    <div>
      <Appheading sx={{ mt: 1 }}>Ceiling Height</Appheading>
      <Select defaultValue={options[350]} fullWidth sx={{ height: 40, mt: 1 }}>
        <MenuItem value="" disabled>
          Select a height
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option} mm
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CeilingHeight;
