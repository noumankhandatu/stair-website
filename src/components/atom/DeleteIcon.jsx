import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AppDeleteIcon = () => {
  return (
    <IconButton
      onClick={() => {
        window.location.reload();
      }}
    >
      <span style={{ color: "red", fontSize: 15 }}>remove</span>
      <DeleteIcon fontSize="small" sx={{ cursor: "pointer", color: "red" }} />
    </IconButton>
  );
};

export default AppDeleteIcon;
