/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme/index";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "../../../toolkit/slices/stairHeightWidth";
import Div from "../../../components/atom/Div";
import { Paper } from "@mui/material";
import { ceilingArray, stairWidth } from "../../../utils/data/index";

const MaterialConstruction = ({ setAppState, appState }) => {
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
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.3540416047548291,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.1840416047548291,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition >= 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.1140416047548291,
        },
      }));
    }
    // update states here
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        positions: updatedPositions,
      },
    }));
  };

  const handleWidthChange = (newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        width: newValue,
      },
    }));
  };
  const handleCelingsHeight = (newHeight) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        ceilingHeight: newHeight,
      },
    }));
  };
  console.log(appState, "appState");
  return (
    <div>
      {/* Floor Height */}
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
      <Appheading sx={{ mt: 1 }}>Floor Width</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        // value={appState.svgRiser.width}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {stairWidth.map((value, index) => (
          <MenuItem
            onClick={() => dispatch(setWidth(index * 50 + 300))}
            key={index}
            value={value.toString()}
          >
            {index === 0 ? null : <> {index * 50 + 300} mm</>}
          </MenuItem>
        ))}
      </Select>
      {/* Celling Height */}
      <Appheading sx={{ mt: 1 }}>Ceiling Height</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {ceilingArray.map((option, index) => (
          <MenuItem
            onClick={() => handleCelingsHeight(parseFloat(option))}
            key={index}
            value={option}
          >
            {option} mm
          </MenuItem>
        ))}
      </Select>
      {/* Riser */}
      <Appheading sx={{ mt: 2 }}>Number of Rises</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }} onChange={handlePositionChange}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {appState.svgRiser.positions.map((option, index) => (
          <MenuItem key={index} value={option}>
            {index + 1} @ {option + 79} mm
          </MenuItem>
        ))}
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

export default MaterialConstruction;

const textT = { fontSize: 15, fontWeight: "bolder", cursor: "pointer" };
// const handleHeightChange = (newValue) => {
//   setAppState((prevState) => ({
//     ...prevState,
//     svgRiser: {
//       ...prevState.svgRiser,
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
        value={appState.svgRiser.height}
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
        value={appState.svgRiser.leftRightPencilBorder}
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
