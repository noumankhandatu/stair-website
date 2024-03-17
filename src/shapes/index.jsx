import DefaultShape from "./Default";
import { useSelector } from "react-redux";
import { DEFAULT_SHAPE, HALF_LANDING, QUARTER_LANDING, THREE_WINDER, T_SHAPE } from "../utils/enum";
import TShape from "./TShape";
import ThreeWinderShape from "./3-Winder";
import HalfLandingShape from "./HalfLanding";
// setShape
const AppShapes = () => {
  const currentShape = useSelector((state) => state?.ShapeSlice?.shape);
  return (
    <div>
      {currentShape === DEFAULT_SHAPE && <DefaultShape />}
      {currentShape === T_SHAPE && <TShape />}
      {(currentShape === THREE_WINDER || currentShape === QUARTER_LANDING) && <ThreeWinderShape />}
      {currentShape === HALF_LANDING && <HalfLandingShape />}
    </div>
  );
};

export default AppShapes;
