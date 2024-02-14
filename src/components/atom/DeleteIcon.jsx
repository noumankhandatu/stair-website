import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AppDeleteIcon = () => {
  return (
    <IconButton>
      <DeleteIcon
        fontSize="small"
        sx={{ cursor: "pointer", color: "red" }}
        onClick={() => {
          window.location.reload();
        }}
      />
    </IconButton>
  );
};

export default AppDeleteIcon;
