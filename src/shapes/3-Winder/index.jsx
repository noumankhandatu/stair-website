import { useSelector } from "react-redux";
import ThreeWinderRight from "./shapes/3WinderRight";
import {
  ThreeWinderLeftLeftTurn,
  ThreeWinderLeftRightTurn,
  ThreeWinderLeftTurn,
  ThreeWinderRightLeftTurn,
  ThreeWinderRightRightTurn,
  ThreeWinderRightTurn,
} from "../../utils/enum";
import ThreeWinderRightRight from "./shapes/3WinderRightRight";
import ThreeWinderLeft from "./shapes/3WinderLeft";
import ThreeWinderLeftLeft from "./shapes/3WinderLeftLeft/index";
import ThreeWinderLeftRight from "./shapes/3WinderLeftRight";
import ThreeWinderRightLeft from "./shapes/3WinderRightLeft";

const ThreeWinderShape = () => {
  const shapeTurn = useSelector((state) => state.shapeTurnSlice.shapeTurn);
  return (
    <div>

      {/* <--  Left Side */}
      {shapeTurn === ThreeWinderLeftTurn && <ThreeWinderLeft />}
      {shapeTurn === ThreeWinderLeftLeftTurn && <ThreeWinderLeftLeft />}
      {shapeTurn === ThreeWinderLeftRightTurn && <ThreeWinderLeftRight />}

      {/*  Right Side --> */}
      {shapeTurn === ThreeWinderRightTurn && <ThreeWinderRight />}
      {shapeTurn === ThreeWinderRightRightTurn && <ThreeWinderRightRight />}
      {shapeTurn === ThreeWinderRightLeftTurn && <ThreeWinderRightLeft />}
      
    </div>
  );
};

export default ThreeWinderShape;
