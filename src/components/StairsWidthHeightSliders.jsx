/* eslint-disable react/prop-types */
import { Appheading } from "../theme";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const StairsWidthHeightSliders = ({ setAppState, appState }) => {
  const positionOptions = [];
  for (let i = 0; i <= 1600; i += 220) {
    positionOptions.push(i);
  }

  const handlePositionChange = (event) => {
    const selectedPosition = parseInt(event.target.value);
    let updatedPositions = [];

    if (selectedPosition !== "") {
      updatedPositions = positionOptions.filter((pos) => pos <= selectedPosition);
    }

    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: updatedPositions,
      },
    }));
  };

  const addRiser = () => {
    const lastPosition = appState.svgPlates.positions[appState.svgPlates.positions.length - 1];
    const newPositions = [...appState.svgPlates.positions, lastPosition + 220];
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
  const handleHeightChange = (newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        height: newValue,
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
      {/* height */}
      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
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
            {/* {value.toString()} */}
            {index} mm
          </MenuItem>
        ))}
      </Select>
      {/* width */}
      <Appheading sx={{ mt: 2 }}>Floor Width</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        value={appState.svgPlates.width}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {[
          -0.2040416047548291, -0.2240416047548291, -0.2440416047548291, -0.2640416047548291,
          -0.2840416047548291, -0.3040416047548291, -0.3240416047548291, -0.3440416047548291,
          -0.3640416047548291, -0.3840416047548291, -0.4040416047548291,
        ].map((value, index) => (
          <MenuItem key={index} value={value.toString()}>
            {/* {value.toString()} */}
            {index} mm
          </MenuItem>
        ))}
      </Select>
      {/* hign height */}

      <Appheading sx={{ mt: 2 }}>Hinges Height</Appheading>
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
      </Select>
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
        {/* drop of riser */}
      <Appheading sx={{ mt: 2 }}>Number of Risers</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 2 }} value="" onChange={handlePositionChange}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {positionOptions.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default StairsWidthHeightSliders;
