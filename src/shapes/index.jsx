import DefaultShape from "./Default";
import { useSelector } from "react-redux";
import { DEFAULT_SHAPE, T_SHAPE } from "../utils/enum";
import TShape from "./TShape";

const AppShapes = () => {
  const currentShape = useSelector((state) => state?.ShapeSlice?.shape);
  return (
    <div>
      {currentShape === DEFAULT_SHAPE && <DefaultShape />}
      {currentShape === T_SHAPE && <TShape />}
    </div>
  );
};

export default AppShapes;
