import { Divider, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RefreshIcon from "@mui/icons-material/Refresh";
import { AppMainheading } from "../../../../theme";
import Div from "../../../../components/atom/Div";
import { iconCol } from "../../../Default";
import FeatureCard from "../../../../components/molecules/FeatureCard";
import { useState } from "react";
import MaterialConstruction from "./tabs/MaterialConstruction";
import StairLayout from "./tabs/stairsLayout";
import { useSelector } from "react-redux";
import { ArrowHeight, WindRun1, WindRun2 } from "../../../../toolkit/slices/stairHeightWidth";
import { leftFeatureStep, rightFeatureStep } from "../../../../toolkit/slices/featureSteps";
import {
  LEFT_BULLNOSE,
  LEFT_CURTAIL,
  LEFT_CURTAIL_BULLNOSE,
  LEFT_D_STEP,
  RIGHT_BULLNOSE,
  RIGHT_CURTAIL,
  RIGHT_CURTAIL_BULLNOSE,
  RIGHT_D_STEP,
  NONE_STEP_LEFT,
  QUARTER_LANDING,
} from "../../../../utils/enum";
import {
  selectDefaultValueTwo,
  selectDivisble,
  selectedDefaultValue,
} from "../../../../toolkit/slices/singleFeatures";
const HalfLandingRightRight = () => {
  // states

  const ArrowHeightRedux = useSelector(ArrowHeight);
  const WindRun1Redux = useSelector(WindRun1);
  const WindRun2Redux = useSelector(WindRun2);
  const reduxLeftStep = useSelector(leftFeatureStep);
  const reduxRightStep = useSelector(rightFeatureStep);
  const reduxSelectDivisble = useSelector(selectDivisble);
  const firstSelectDefaultValueRedux = useSelector(selectedDefaultValue);
  const secondSelectDefaultValueRedux = useSelector(selectDefaultValueTwo);

  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "200vh",
      width: "100wh",
    },
    svgRiser: {
      color: "mdf",
      positions: [220, 440, 660, 880, 1100],
      rightRisers: [220, 440, 660, 880, 1100],
      bottomRisers: [220, 440, 660, 880],
      width: -0.18,
      height: 0.18,
      translateX: 730,
      translateY: 289,
      rotation: 180,
      ceilingHeight: 236,
    },
    handRails: {
      color: "mdf",
      borderLeft: 1300,
      borderRight: "",
      borderTop: "",
      borderBottom: 1000,
    },
  });
  // fns
  const handleshowStairLayout = () => {
    setshowStairsLayout((prev) => !prev);
  };
  const handleshowMaterialConstruciton = () => {
    setshowMaterialConstruction((prev) => !prev);
  };

  return (
    <div>
      <AppMainheading sx={{ mt: 4 }}>
        Interactive EasyStairs Design Tool - StairBuilder®
      </AppMainheading>
      <Divider sx={{ mt: 1 }} />
      <Div height={40} />
      <Grid container>
        <Grid xs={2}>
          <FeatureCard
            title={"Stairs Layout"}
            showStairsLayout={showStairsLayout}
            handleshowStairLayout={handleshowStairLayout}
          />
          {showStairsLayout && <StairLayout setAppState={setAppState} appState={appState} />}
          <Div height={20} />
          <FeatureCard
            title={"Material & Construction"}
            showStairsLayout={showMaterialConstruction}
            handleshowStairLayout={handleshowMaterialConstruciton}
          />
          {showMaterialConstruction && (
            <MaterialConstruction appState={appState} setAppState={setAppState} />
          )}{" "}
        </Grid>
        <Grid sx={{ textAlign: "center" }} xs={9}>
          <svg width={981} height={700}>
            <defs>
              {" "}
              <pattern id="mdf" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern id="oak" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/oak.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern id="redwood" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/pine.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern id="whitewood" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/softwood.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="whiteprimed"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/whiteprimed.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern id="false" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/none.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern id={0} patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/none.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn1_tread1"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn1_tread1"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn2_tread1"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn2_tread1"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn2_tread2"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn2_tread2"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn2_tread3"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <pattern
                id="turn2_tread3"
                patternUnits="userSpaceOnUse"
                width="1000px"
                height="1000px"
              >
                <image
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>{" "}
              <marker
                id="startarrow"
                markerWidth={10}
                markerHeight={7}
                refX={0}
                refY="3.5"
                orient="auto"
              >
                <polygon points="10 0, 10 7, 0 3.5" fill="red" />
              </marker>
              <marker
                id="endarrow"
                markerWidth={10}
                markerHeight={7}
                refX={10}
                refY="3.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="red" />
              </marker>
            </defs>{" "}
            <g transform="translate (385.6291512915129,497.5876383763838) rotate(180) scale(-0.22601476014760144,0.22601476014760144)">
              {" "}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread1"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #1
                      </text>
                    </g>
                    <g transform="translate(-413.5 222)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread2"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread2"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #2
                      </text>
                    </g>
                    <g transform="translate(-413.5 444)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread3"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread3"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #3
                      </text>
                    </g>
                    <g transform="translate(-413.5 666)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread4"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread4"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #4
                      </text>
                    </g>
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />{" "}
                  <text
                    x={0}
                    y={-0}
                    style={{
                      fontSize: 55,
                      fontFamily: "Arial, Helvetica, sans-serif",
                      color: "black",
                    }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                  >
                    run1
                  </text>
                </g>
                <g transform="translate(0 888)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="387,-16,-418.5,-16,-418.5,835,1346.5,835,1346.5,16,541,16,541,29.5,416.5,29.5,387,29.5"
                      fill="url(#turn1_tread1)"
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="start"
                      transform="translate(-200,400) rotate(180) scale(-1,1)"
                    >
                      * Half Landings not supplied by StairBox *
                    </text>{" "}
                    <polyline
                      points="387,0,-418.5,0,-418.5,10,387,10"
                      fill="url(#turn1_tread1)"
                      stroke="black"
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="start"
                      transform="translate(-200,400) rotate(180) scale(-1,1)"
                    >
                      * Half Landings not supplied by StairBox *
                    </text>{" "}
                    <text
                      x="-69.2"
                      y={-100}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #5
                    </text>
                  </g>
                </g>
                <g transform="translate(923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread1"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #6
                      </text>
                    </g>
                    <g transform="translate(-413.5 222)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread2"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread2"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #7
                      </text>
                    </g>
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />{" "}
                  <text
                    x={0}
                    y={-0}
                    style={{
                      fontSize: 55,
                      fontFamily: "Arial, Helvetica, sans-serif",
                      color: "black",
                    }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                  >
                    run3
                  </text>
                </g>
                <g transform="translate(923 444)  rotate(180)">
                  <g transform="translate(-432.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="418.5,-16,-418.5,-16,-418.5,499.41,374,40,418.5,40"
                      fill="url(#turn2_tread1)"
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: "" }}
                      className="heavy"
                      textAnchor=""
                      transform="translate(0,400) rotate(0) scale(-1,1)"
                    />{" "}
                    <polyline
                      points="418.5,0,-418.5,0,-418.5,10,418.5,10"
                      fill="url(#turn2_tread1)"
                      stroke="black"
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: "" }}
                      className="heavy"
                      textAnchor=""
                      transform="translate(0,400) rotate(0) scale(-1,1)"
                    />{" "}
                    <text
                      x="19.2"
                      y={-100}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #8
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="374,21.51,-418.5,480.91,-418.5,861,-66.91,861,419,55.5"
                      fill="url(#turn2_tread2)"
                      stroke={
                        secondSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
                      }
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: "" }}
                      className="heavy"
                      textAnchor=""
                      transform="translate(0,400) rotate(0) scale(-1,1)"
                    />{" "}
                    <polyline
                      points="374,40,-418.5,499.41,-418.5,510.97,374,51.56"
                      fill="url(#turn2_tread2)"
                      stroke={
                        secondSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
                      }
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: "" }}
                      className="heavy"
                      textAnchor=""
                      transform="translate(0,400) rotate(0) scale(-1,1)"
                    />{" "}
                    <text
                      x={123}
                      y={-280}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #9
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="400.31,55.5,-85.59,861,442.5,861,442.5,24,419,24"
                      fill="url(#turn2_tread3)"
                      stroke={
                        secondSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
                      }
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: "" }}
                      className="heavy"
                      textAnchor=""
                      transform="translate(0,400) rotate(0) scale(-1,1)"
                    />{" "}
                    <polyline
                      points="419,55.5,-66.91,861,-55.23,861,430.68,55.5"
                      fill="url(#turn2_tread3)"
                      stroke={
                        secondSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
                      }
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: "" }}
                      className="heavy"
                      textAnchor=""
                      transform="translate(0,400) rotate(0) scale(-1,1)"
                    />{" "}
                    <text
                      x={296}
                      y={-400}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #10
                    </text>
                  </g>
                  <g transform="translate(419 23.5)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(480.5 1.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run4_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run4_tread1"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #11
                      </text>
                    </g>
                    <g transform="translate(-413.5 222)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run4_tread2"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run4_tread2"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-131}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #12
                      </text>
                    </g>
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />{" "}
                  <text
                    x={0}
                    y={-0}
                    style={{
                      fontSize: 55,
                      fontFamily: "Arial, Helvetica, sans-serif",
                      color: "black",
                    }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                  >
                    run4
                  </text>
                </g>
                <g transform="translate(36.5 1.5)  rotate(90)">
                  <g transform="translate(-413.5 0)  rotate(0)">
                    {" "}
                    <rect
                      x={0}
                      y={-16}
                      width={827}
                      height={86}
                      fill="url(#mdf)"
                      style={{ stroke: "black", strokeWidth: 2 }}
                      id="nosing_tread"
                      className=""
                    />{" "}
                    <rect
                      x={0}
                      y={0}
                      width={827}
                      height={10}
                      fill="none"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="nosing_tread"
                      className=""
                    />{" "}
                    <text
                      x="388.5"
                      y={-55}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #13
                    </text>
                  </g>
                </g>
              </g>
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-120}
                        width={27}
                        height="1005.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-432.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-120}
                        width={27}
                        height="1005.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(0 888)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="2.5"
                        width={27}
                        height={420}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-432.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="2.5"
                        width={27}
                        height={465}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(923 444)  rotate(180)">
                  <g transform="translate(-432.5 0)  rotate(0)">
                    {" "}
                    <rect
                      x={0}
                      y="23.5"
                      width={27}
                      height="824.5"
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn2_string1"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 875)  rotate(-90)">
                    {" "}
                    <rect
                      x={0}
                      y="-432.5"
                      width={27}
                      height="851.5"
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn2_string2"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(480.5 1.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="21.5"
                        width={27}
                        height="542.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run4_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-432.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="-23.5"
                        width={27}
                        height="587.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run4_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(36.5 1.5)  rotate(90)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width={80} height={80}>
                <path
                  d="M-20,20 l40,-40
      M0,80 l80,-80
      M60,100 l40,-40"
                  style={{ stroke: "grey", strokeWidth: 4 }}
                />
              </pattern>
              <path d="" fill="white" fillOpacity="0.3" />
              <path
                d=""
                fill="url(#diagonalHatch)"
                fillOpacity={1}
                strokeWidth={6}
                stroke="black"
              />
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(0 888)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(923 444)  rotate(180)">
                  <g transform="translate(-432.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(480.5 1.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(36.5 1.5)  rotate(90)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(0 888)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(923 444)  rotate(180)">
                  <g transform="translate(-432.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)">
                    {" "}
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill="url(#redwood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn2_winderPost"
                      className="balustrade"
                    />
                  </g>
                  <g transform="translate(419 23.5)  rotate(0)">
                    {" "}
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill="url(#redwood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn2_winderPost"
                      className="balustrade"
                    />
                  </g>
                </g>
                <g transform="translate(480.5 1.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(36.5 1.5)  rotate(90)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(0 888)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(923 444)  rotate(180)">
                  <g transform="translate(-432.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(480.5 1.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(36.5 1.5)  rotate(90)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>{" "}
                <line
                  x1="-532.5"
                  y1={-16}
                  x2="-532.5"
                  y2={1737}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-587.5"
                  y="850.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-587.5"
                  y="-850.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1753
                </text>{" "}
                <line
                  x1="-432.5"
                  y1={1837}
                  x2="1360.5"
                  y2={1837}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={414}
                  y={1837}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={414}
                  y={-1817}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1793
                </text>{" "}
                <line
                  x1="1460.5"
                  y1={-431}
                  x2="1460.5"
                  y2={1737}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="1405.5"
                  y={643}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="1405.5"
                  y={-643}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  2168
                </text>{" "}
                <line
                  x1="31.5"
                  y1={-531}
                  x2="1360.5"
                  y2={-531}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={646}
                  y={-531}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={646}
                  y={551}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1329
                </text>{" "}
                <line
                  x1="-432.5"
                  y1={-200}
                  x2="432.5"
                  y2={-200}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={-50}
                  y={-200}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={-50}
                  y={220}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  865
                </text>
              </g>
            </g>
          </svg>
        </Grid>
        <Grid xs={1}>
          <Tooltip title="New Design">
            <NoteAddIcon sx={iconCol} onClick={() => window.location.reload()} />
          </Tooltip>
          <Tooltip title="Refresh">
            <RefreshIcon
              onClick={() => window.location.reload()}
              sx={{
                ...iconCol,
                ml: 3,
              }}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default HalfLandingRightRight;
