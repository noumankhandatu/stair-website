/* eslint-disable react/prop-types */
import { Appheading } from "../../theme/index";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "../../toolkit/slices/stairHeightWidth";
import Div from "../atom/Div";
import { Paper } from "@mui/material";

const StairsWidthHeightSliders = ({ setAppState, appState }) => {
  const dispatch = useDispatch();

  //number of Rises
  const positionOptions = [];
  for (let i = 1; i <= 5000; i += 220) {
    positionOptions.push(i);
  }

  const handlePositionChange = (event) => {
    const selectedPosition = parseInt(event.target.value);
    let updatedPositions = [];
    if (selectedPosition !== "") {
      updatedPositions = positionOptions.filter((pos) => pos <= selectedPosition);
    }
    if (selectedPosition >= 1 && selectedPosition < 1400) {
      setAppState((prevState) => ({
        ...prevState,
        svgPlates: {
          ...prevState.svgPlates,
          positions: updatedPositions,
          height: 0.3540416047548291,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgPlates: {
          ...prevState.svgPlates,
          positions: updatedPositions,
          height: 0.1840416047548291,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition >= 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgPlates: {
          ...prevState.svgPlates,
          positions: updatedPositions,
          height: 0.1140416047548291,
        },
      }));
    }
    // update states here
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: updatedPositions,
      },
    }));
  };

  const addRiser = () => {
    console.log(appState, "appState");
    const lastPosition = appState.svgPlates.positions[appState.svgPlates.positions.length - 1];
    const newPositions = [...appState.svgPlates.positions, lastPosition + 230];
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: newPositions,
        height: prevState.svgPlates.height - 0.02,
      },
      leftRightPencilBorder: {
        ...prevState.leftRightPencilBorder,
        height: prevState.leftRightPencilBorder.height + 230,
      },
    }));
  };

  const removePlate = () => {
    const newPositions = [...appState.svgPlates.positions];
    newPositions.pop();
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: newPositions,
        height: prevState.svgPlates.height + 0.02,
      },
      leftRightPencilBorder: {
        ...prevState.leftRightPencilBorder,
        height: prevState.leftRightPencilBorder.height - 230,
      },
    }));
  };

  const handleWidthChange = (newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        width: newValue,
      },
    }));
  };
  return (
    <div>
      {/* drop of riser */}
      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }} onChange={handlePositionChange}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {positionOptions.map((option, index) => (
          <MenuItem onClick={() => dispatch(setHeight(option + 79))} key={index} value={option}>
            {option + 79} mm
          </MenuItem>
        ))}
      </Select>

      {/* width */}
      <Appheading sx={{ mt: 2 }}>Floor Width</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        // value={appState.svgPlates.width}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {[
          -0.2040416047548291, -0.2240416047548291, -0.2440416047548291, -0.2640416047548291,
          -0.2840416047548291, -0.3040416047548291, -0.3240416047548291, -0.3440416047548291,
          -0.3640416047548291, -0.3840416047548291, -0.4040416047548291, -0.4240416047548291,
          -0.4440416047548291, -0.4640416047548291, -0.4840416047548291, -0.5040416047548291,
          -0.5240416047548291, -0.5440416047548291, -0.5640416047548291,
        ].map((value, index) => (
          <MenuItem
            onClick={() => dispatch(setWidth(index * 50 + 300))}
            key={index}
            value={value.toString()}
          >
            {index === 0 ? null : <> {index * 50 + 300} mm</>}
          </MenuItem>
        ))}
      </Select>
      {/* hign height */}

      {/* Riser */}
      <Appheading sx={{ mt: 2 }}>Remove Add Riser</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 2 }}
        value=""
        onChange={(e) => {
          const action = e.target.value;
          if (action === "add") {
            addRiser();
          } else if (action === "remove") {
            removePlate();
          }
        }}
      >
        <MenuItem value="" disabled>
          Select an action
        </MenuItem>
        <MenuItem value="add">Add Riser</MenuItem>
        <MenuItem value="remove">Remove Riser</MenuItem>
      </Select>
      <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>
      <Div sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Paper className="turnLeft" sx={{ p: 3, textAlign: "center" }}>
          <p style={textT}>
            add a left <br />
            turn
          </p>
        </Paper>
        <Paper className="turnRight" sx={{ p: 3, textAlign: "center" }}>
          <p style={textT}>
            add a Right <br />
            turn
          </p>
        </Paper>
      </Div>
    </div>
  );
};

export default StairsWidthHeightSliders;
const textT = { fontSize: 15, fontWeight: "bolder", cursor: "pointer" };
// const handleHeightChange = (newValue) => {
//   setAppState((prevState) => ({
//     ...prevState,
//     svgPlates: {
//       ...prevState.svgPlates,
//       height: newValue,
//     },
//   }));
// };

{
  /* height */
}
{
  /* <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        value={appState.svgPlates.height}
        onChange={(e) => handleHeightChange(parseFloat(e.target.value))}
      >
        {[
          0.1940416047548291, 0.2140416047548291, 0.2340416047548291, 0.2540416047548291,
          0.2740416047548291, 0.2840416047548291, 0.3040416047548291, 0.3240416047548291,
        ].map((value, index) => (
          <MenuItem key={index} value={value.toString()}>
            {index} mm
          </MenuItem>
        ))}
      </Select> */
}

{
  /* <Appheading sx={{ mt: 2 }}>Hinges Height</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        value={appState.svgPlates.leftRightPencilBorder}
        onChange={(e) => {
          const action = parseInt(e.target.value);
          if (!isNaN(action)) {
            // Check if the selected value is a number
            const updatedHeight = action;
            setAppState((prevState) => ({
              ...prevState,
              leftRightPencilBorder: {
                ...prevState.leftRightPencilBorder,
                height: updatedHeight,
              },
            }));
          }
        }}
      >
        <MenuItem value="" disabled>
          Select a height
        </MenuItem>
        <MenuItem value="1260">180</MenuItem>
        <MenuItem value="1460">254</MenuItem>
        <MenuItem value="1660">304</MenuItem>
        <MenuItem value="1760">324</MenuItem>
        <MenuItem value="1795">410</MenuItem>
      </Select> */
}
