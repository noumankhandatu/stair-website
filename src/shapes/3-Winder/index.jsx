import { useSelector } from "react-redux";
import ThreeWinderRight from "./shapes/3WinderRight";
import {
  ThreeWinderLeftTurn,
  ThreeWinderRightRightTurn,
  ThreeWinderRightTurn,
} from "../../utils/enum";
import ThreeWinderRightRight from "./shapes/3WinderRightRight";

const ThreeWinderShape = () => {
  const shapeTurn = useSelector((state) => state.shapeTurnSlice.shapeTurn);
  return (
    <div>
      {/* <ThreeWinderRightRight /> */}

      {/* <-- */}
      {shapeTurn === ThreeWinderLeftTurn && <ThreeWinderRightRight />}

      {/* --> */}
      {shapeTurn === ThreeWinderRightTurn && <ThreeWinderRight />}
      {shapeTurn === ThreeWinderRightRightTurn && <ThreeWinderRightRight />}
    </div>
  );
};

export default ThreeWinderShape;
