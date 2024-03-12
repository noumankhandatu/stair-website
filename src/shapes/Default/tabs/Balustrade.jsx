/* eslint-disable react/prop-types */
import { MenuItem, Paper, Select } from "@mui/material";
import { Appheading } from "../../../theme";
import { useState } from "react";

const Balustrade = ({ appBalustrade, setappBalustrade }) => {
  const newelPostOptions = [
    "1 Landing Full newel post (1500mm)",
    "2 Landing Full newel post (1500mm)",
    "3 Landing Full newel post (1500mm)",
    "4 Landing Full newel post (1500mm)",
    "5 Landing Full newel post (1500mm)",
    "6 Landing Full newel post (1500mm)",
  ];

  const balustradeOptions = [
    "No extra balustrade required",
    "500mm (including spindles)",
    "1000mm (including spindles)",
    "1500mm (including spindles)",
    "2000mm (including spindles)",
    "2500mm (including spindles)",
    "3000mm (including spindles)",
    "3500mm (including spindles)",
    "4000mm (including spindles)",
    "4100mm (including spindles)",
  ];

  // State variables to track selected values
  const [balustradeValue, setBalustradeValue] = useState(balustradeOptions[0]);
  const [newelPostValue1, setNewelPostValue1] = useState(newelPostOptions[0]);
  const [newelPostValue2, setNewelPostValue2] = useState(newelPostOptions[0]);

  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Balustrade Style</Appheading>
      <Paper sx={{ background: "#D1ECF1", p: 2, mt: 2, borderRadius: 3 }}>
        <p style={{ fontSize: 14, fontWeight: "bold" }}>
          You have not added any <br /> balustrade to your staircase.
        </p>
      </Paper>
      {appBalustrade && (
        <Paper sx={{ background: "#FFF3CD", p: 2, mt: 2, borderRadius: 3 }}>
          <p style={{ fontSize: 14, fontWeight: "bold" }}>
            Add balustrade or posts to your staircase by clicking on the red <br /> items. <br />{" "}
            Remove balustrade or posts by clicking on the green items.
          </p>
        </Paper>
      )}

      <Paper
        onClick={() => setappBalustrade((prev) => !prev)}
        sx={{
          background: !appBalustrade ? "#007BFF" : "#28A745",
          p: 2,
          mt: 2,
          borderRadius: 3,
          textAlign: "center",
          mb: 3,
        }}
      >
        {!appBalustrade ? (
          <p style={{ fontWeight: "bold", color: "white" }}>Alter staircase balustrade</p>
        ) : (
          <p style={{ fontWeight: "bold", color: "white" }}>
            Finished adding stair case
            <br />
            balustrade
          </p>
        )}
      </Paper>
      {/* Select for Additional Landing Balustrade */}
      <p style={{ fontSize: 16, fontWeight: "bold" }}>Additional Landing Balustrade</p>
      <div>
        <Select
          sx={{ height: 40, mt: 2 }}
          fullWidth
          value={balustradeValue}
          onChange={(e) => setBalustradeValue(e.target.value)}
        >
          {balustradeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Select for Additional Landing Newel Posts */}
      <p style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
        Additional Landing Newel Posts
      </p>
      <div>
        <Select
          sx={{ height: 40, mt: 2 }}
          fullWidth
          value={newelPostValue1}
          onChange={(e) => setNewelPostValue1(e.target.value)}
        >
          {newelPostOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Select
          sx={{ height: 40, mt: 2 }}
          fullWidth
          value={newelPostValue2}
          onChange={(e) => setNewelPostValue2(e.target.value)}
        >
          {newelPostOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Balustrade;
