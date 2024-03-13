/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel, MenuItem, Paper, Select } from "@mui/material";
import { Appheading } from "../../../theme";
import { useState } from "react";

const Balustrade = ({ appBalustrade, setappBalustrade, setbalustradeStyles }) => {
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
  const balustradeStyleOptions = [
    "Newel Posts only (add your own rail & spindles)",
    "Square spindles (Square posts)",
    "Chamfer spindles (Square posts)",
    "Turned spindles (Turned posts)",
    "Embedded Glass (Square posts)",
    "Clamped Glass (Square posts)",
    "Oak Twist spindles (Square posts)",
  ];

  // State variables to track selected values
  const [balustradeStyleOpt, setBalustradeStyleOpt] = useState(balustradeStyleOptions[1]);
  const [balustradeValue, setBalustradeValue] = useState(balustradeOptions[0]);
  const [newelPostValue1, setNewelPostValue1] = useState(newelPostOptions[0]);
  const [newelPostValue2, setNewelPostValue2] = useState(newelPostOptions[0]);
  const [balustradeStyle, setbalustradeStyle] = useState(true);
  return (
    <div>
      {!balustradeStyle && (
        <>
          <Appheading sx={{ mt: 2 }}>Balustrade Style</Appheading>
          <div>
            <Select
              sx={{ height: 40, mt: 2 }}
              fullWidth
              value={balustradeStyleOpt}
              onChange={(e) => {
                setBalustradeStyleOpt(e.target.value);
                setbalustradeStyles(e.target.value);
              }}
            >
              <MenuItem disabled>No Balustrade</MenuItem>
              {balustradeStyleOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
        </>
      )}

      {/* blue paper */}
      {balustradeStyle && (
        <Paper sx={{ background: "#D1ECF1", p: 2, mt: 2, borderRadius: 3 }}>
          <p style={{ fontSize: 14, fontWeight: "bold" }}>
            You have not added any <br /> balustrade to your staircase.
          </p>
        </Paper>
      )}

      {/*  */}
      {!balustradeStyle && (
        <FormControlLabel
          sx={{ mt: 2, alignItems: "start" }}
          control={<Checkbox color="success" />}
          label="Factory assembled stair balustrade (recommended)"
        />
      )}

      {/* Yello paper */}
      {appBalustrade && (
        <Paper sx={{ background: "#FFF3CD", p: 2, mt: 2, borderRadius: 3 }}>
          <p style={{ fontSize: 14, fontWeight: "bold" }}>
            Add balustrade or posts to your staircase by clicking on the red <br /> items. <br />{" "}
            Remove balustrade or posts by clicking on the green items.
          </p>
        </Paper>
      )}
      {/* Green Button */}
      <Paper
        onClick={() => {
          setappBalustrade((prev) => !prev);
        }}
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
      {!balustradeStyle && (
        <FormControlLabel
          sx={{ mt: 2, alignItems: "start" }}
          control={<Checkbox color="success" />}
          label="Factory assembled stair balustrade (recommended)"
        />
      )}

      <div>
        <Select
          sx={{ height: 40, mt: 2 }}
          fullWidth
          value={balustradeValue}
          onChange={(e) => {
            setbalustradeStyle(false);
            setBalustradeValue(e.target.value);
          }}
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
