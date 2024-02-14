import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AppDeleteIcon = () => {
  return (
    <IconButton
      onClick={() => {
        window.location.reload();
      }}
    >
      <DeleteIcon fontSize="small" sx={{ cursor: "pointer", color: "red" }} />
    </IconButton>
  );
};

export default AppDeleteIcon;
