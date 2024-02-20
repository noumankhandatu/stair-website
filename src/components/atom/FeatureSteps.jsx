import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { Appheading } from "../../theme";
import Div from "./Div";
import {
  LEFT_D_STEP,
  LEFT_CURTAIL,
  LEFT_BULLNOSE,
  LEFT_CURTAIL_BULLNOSE,
  NONE_STEP_RIGHT,
  RIGHT_D_STEP,
  RIGHT_CURTAIL,
  RIGHT_BULLNOSE,
  RIGHT_CURTAIL_BULLNOSE,
  NONE_STEP_LEFT,
} from "../../utils/enum";

const FeatureSteps = () => {
  const [leftValue, setLeftValue] = useState(NONE_STEP_LEFT);
  const [rightValue, setRightValue] = useState(NONE_STEP_RIGHT);

  const handleLeftChange = (event) => {
    const selectedValue = event.target.value;
    setLeftValue(selectedValue);
    // Reset right dropdown if "NONE" is selected in the left dropdown
    if (selectedValue === NONE_STEP_LEFT) {
      setRightValue(NONE_STEP_RIGHT);
    }
  };

  const handleRightChange = (event) => {
    const selectedValue = event.target.value;
    setRightValue(selectedValue);
    // Reset left dropdown if "NONE" is selected in the right dropdown
    if (selectedValue === NONE_STEP_RIGHT) {
      setLeftValue(NONE_STEP_LEFT);
    }
  };

  const getLeftOptions = () => {
    switch (rightValue) {
      case RIGHT_D_STEP:
        return [NONE_STEP_LEFT, LEFT_D_STEP];
      case RIGHT_CURTAIL:
        return [NONE_STEP_LEFT, LEFT_CURTAIL];
      case RIGHT_BULLNOSE:
        return [NONE_STEP_LEFT, LEFT_BULLNOSE];
      case RIGHT_CURTAIL_BULLNOSE:
        return [NONE_STEP_LEFT, LEFT_CURTAIL_BULLNOSE];
      default:
        return [NONE_STEP_LEFT, LEFT_D_STEP, LEFT_CURTAIL, LEFT_BULLNOSE, LEFT_CURTAIL_BULLNOSE];
    }
  };

  const getRightOptions = () => {
    switch (leftValue) {
      case LEFT_D_STEP:
        return [NONE_STEP_RIGHT, RIGHT_D_STEP];
      case LEFT_CURTAIL:
        return [NONE_STEP_RIGHT, RIGHT_CURTAIL];
      case LEFT_BULLNOSE:
        return [NONE_STEP_RIGHT, RIGHT_BULLNOSE];
      case LEFT_CURTAIL_BULLNOSE:
        return [NONE_STEP_RIGHT, RIGHT_CURTAIL_BULLNOSE];
      default:
        return [
          NONE_STEP_RIGHT,
          RIGHT_D_STEP,
          RIGHT_CURTAIL,
          RIGHT_BULLNOSE,
          RIGHT_CURTAIL_BULLNOSE,
        ];
    }
  };

  return (
    <Div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 1,
        alignItems: "center",
      }}
    >
      <Div>
        <Appheading>Left Feature Step</Appheading>
        <Select
          sx={{ height: 40, width: 100, fontSize: 10 }}
          value={leftValue}
          onChange={handleLeftChange}
        >
          {getLeftOptions().map((option) => (
            <MenuItem sx={{ fontSize: 10 }} key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Div>
      <Div>
        <Appheading>Right Feature Step</Appheading>
        <Select
          sx={{ height: 40, width: 100, fontSize: 10 }}
          value={rightValue}
          onChange={handleRightChange}
        >
          {getRightOptions().map((option) => (
            <MenuItem sx={{ fontSize: 10 }} key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Div>
    </Div>
  );
};

export default FeatureSteps;
