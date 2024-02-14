import { MenuItem, Select } from "@mui/material";
import {
  DEFAULT_SHAPE,
  HALF_LANDING,
  QUARTER_LANDING,
  THREE_WINDER,
  T_SHAPE,
} from "../../utils/enum";

// eslint-disable-next-line react/prop-types
const ShapesSelect = ({ handleSelectShape }) => {
  return (
    <div>
      <Select
        onChange={handleSelectShape}
        sx={{ height: 30 }}
        size="small"
        // onChange={handleChange} // Add onChange handler if needed
      >
        <MenuItem value={T_SHAPE}>T Shape</MenuItem>
        <MenuItem value={THREE_WINDER}>3 Winder</MenuItem>
        <MenuItem value={DEFAULT_SHAPE}>Default</MenuItem>
        <MenuItem value={QUARTER_LANDING}>Quarter Landing</MenuItem>
        <MenuItem value={HALF_LANDING}>Half Landing</MenuItem>
      </Select>
    </div>
  );
};

export default ShapesSelect;
