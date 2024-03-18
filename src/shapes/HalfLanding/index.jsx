import { useSelector } from "react-redux";
import HalfLandingLeft from "./shapes/HalfLandingLeft";
import { selectHalfLandingTurn } from "../../toolkit/slices/shapeTurns";
import {
  HalfLandingLeftLeftTurn,
  HalfLandingLeftTurn,
  HalfLandingRightRightTurn,
  HalfLandingRightTurn,
  TwoxHalfLandingLeft,
} from "../../utils/enum";
import HalfLandingRight from "./shapes/HalfLandingRight";
import HalfLandingLeftLeft from "./shapes/HalfLandingLeftLeft";
import TwoXHalfLandingLeft from "./shapes/2xHalfLandingLeft";
import ThreeWinderHalfLandingLeftLeftShape from "./shapes/3wHlLeftLeft";
import HalfLandingRightRight from "./shapes/HalfLandingRightRight";
import TwoXHalfLandingRight from "./shapes/2xHalfLandingRight";
import ThreeWinderHalfLandingRightRighttShape from "./shapes/3wHLRightRight";
import ThreeWinderHalfLandingLeftRightShape from "./shapes/3wHLLeftRight";
import HalfLandingThreeWinderLeftRightShape from "./shapes/Hl3wLeftRight";
import TwoHalfLandingLeftRight from "./shapes/2xHalfLandingLeftRight";
import HalfLandingThreeWinderLeftRight from "./shapes/Right-Left/Hl-3W-LeftRight";
import TwoHalfLadingLeftRight from "./shapes/Right-Left/2xHL-LeftRight";

// setHalfLandingTurn
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
      {shapeTurn === HalfLandingRightRightTurn && <HalfLandingRightRight />}
      {shapeTurn === "TwoxHalfLandingRight" && <TwoXHalfLandingRight />}
      {shapeTurn === "ThreeWinderHalfLandingRightRighttShape" && (
        <ThreeWinderHalfLandingRightRighttShape />
      )}
      {shapeTurn === "ThreeWinderHalfLandingLeftRightShape" && (
        <ThreeWinderHalfLandingLeftRightShape />
      )}
      {shapeTurn === "HalfLandingThreeWinderLeftRightShape" && (
        <HalfLandingThreeWinderLeftRightShape />
      )}
      {shapeTurn === "TwoHalfLandingLeftRight" && <TwoHalfLandingLeftRight />}

      {/* Left Right */}
      {shapeTurn === "TwoHalfLandingRightLeft" && <HalfLandingThreeWinderLeftRight />}
      {shapeTurn === "TwoHalfLandingRightLeftops" && <TwoHalfLadingLeftRight />}
    </>
  );
};

export default HalfLandingShape;
