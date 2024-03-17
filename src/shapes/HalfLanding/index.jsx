import { useSelector } from "react-redux";
import HalfLandingLeft from "./shapes/HalfLandingLeft";
import { selectHalfLandingTurn } from "../../toolkit/slices/shapeTurns";
import {
  HalfLandingLeftLeftTurn,
  HalfLandingLeftTurn,
  HalfLandingRightTurn,
  TwoxHalfLandingLeft,
} from "../../utils/enum";
import HalfLandingRight from "./shapes/HalfLandingRight";
import HalfLandingLeftLeft from "./shapes/HalfLandingLeftLeft";
import TwoXHalfLandingLeft from "./shapes/2xHalfLandingLeft";
import ThreeWinderHalfLandingLeftLeftShape from "./shapes/3wHlLeftLeft";

const HalfLandingShape = () => {
  const shapeTurn = useSelector(selectHalfLandingTurn);
  return (
    <>
      {/* left turn */}
      {shapeTurn === HalfLandingLeftTurn && <HalfLandingLeft />}
      {shapeTurn === HalfLandingLeftLeftTurn && <HalfLandingLeftLeft />}
      {shapeTurn === TwoxHalfLandingLeft && <TwoXHalfLandingLeft />}
      {shapeTurn === "3winderhalflandingleftleft" && <ThreeWinderHalfLandingLeftLeftShape />}

      {/* right turn */}
      {shapeTurn === HalfLandingRightTurn && <HalfLandingRight />}
    </>
  );
};

export default HalfLandingShape;
