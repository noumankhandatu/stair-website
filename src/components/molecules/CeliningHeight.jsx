import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Appheading } from "../../theme";

const CeilingHeight = () => {
  const ceilingArray = Array.from({ length: Math.ceil(2240 / 220) }, (_, i) => (i + 1) * 220);

  return (
    <div>
      <Appheading sx={{ mt: 1 }}>Ceiling Height</Appheading>
      <Select defaultValue={ceilingArray[0]} fullWidth sx={{ height: 40, mt: 1 }}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {ceilingArray.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option} mm
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CeilingHeight;
