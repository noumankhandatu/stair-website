import { useSelector } from "react-redux";
import HalfLandingLeft from "./shapes/HalfLandingLeft";
import { selectHalfLandingTurn } from "../../toolkit/slices/shapeTurns";
import { HalfLandingLeftTurn, HalfLandingRightTurn } from "../../utils/enum";
import HalfLandingRight from "./shapes/HalfLandingRight";

const HalfLandingShape = () => {
  const shapeTurn = useSelector(selectHalfLandingTurn);
  return (
    <>
      {/* left turn */}
      {shapeTurn === HalfLandingLeftTurn && <HalfLandingLeft />}

      {/* right turn */}
      {shapeTurn === HalfLandingRightTurn && <HalfLandingRight />}
    </>
  );
};

export default HalfLandingShape;
