import DefaultShape from "./Default";
import { useSelector } from "react-redux";
import { DEFAULT_SHAPE, THREE_WINDER, T_SHAPE } from "../utils/enum";
import TShape from "./TShape";
import ThreeWinderShape from "./3-Winder";

const AppShapes = () => {
  const currentShape = useSelector((state) => state?.ShapeSlice?.shape);
  return (
    <div>
      <ThreeWinderShape />
      {/* {currentShape === DEFAULT_SHAPE && <DefaultShape />}
      {currentShape === T_SHAPE && <TShape />}
      {currentShape === THREE_WINDER && <ThreeWinderShape />} */}
    </div>
  );
};

export default AppShapes;
