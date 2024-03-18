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
const TwoHalfLandingLeftRight = () => {
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
            <g transform="translate (721.439563230066,549.4591163026917) rotate(180) scale(-0.24885728796343318,0.24885728796343318)">
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
                      points="-522,-16,418.5,-16,418.5,835,-1346.5,835,-1346.5,0,-451,0,-451,-15.5,-432.5,-15.5,-522,-15.5"
                      fill="url(#turn1_tread1)"
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="end"
                      transform="translate(200,400) rotate(180) scale(-1,1)"
                    >
                      * Half Landings not supplied by StairBox *
                    </text>{" "}
                    <polyline
                      points="-522,0,418.5,0,418.5,10,-522,10"
                      fill="url(#turn1_tread1)"
                      stroke="black"
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="end"
                      transform="translate(200,400) rotate(180) scale(-1,1)"
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
                <g transform="translate(-923 888)  rotate(180)">
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
                <g transform="translate(-923 666)  rotate(180)">
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="387,-16,-418.5,-16,-418.5,835,1346.5,835,1346.5,16,541,16,541,29.5,416.5,29.5,387,29.5"
                      fill="url(#turn2_tread1)"
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="end"
                      transform="translate(-200,400) rotate(0) scale(-1,1)"
                    >
                      * Half Landings not supplied by StairBox *
                    </text>{" "}
                    <polyline
                      points="387,0,-418.5,0,-418.5,10,387,10"
                      fill="url(#turn2_tread1)"
                      stroke="black"
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="end"
                      transform="translate(-200,400) rotate(0) scale(-1,1)"
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
                      #7
                    </text>
                  </g>
                </g>
                <g transform="translate(-1846 666)  rotate(360)">
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
                        id="run5_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_tread1"
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
                        #8
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
                        id="run5_tread2"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_tread2"
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
                        #9
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
                        id="run5_tread3"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_tread3"
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
                        #10
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
                        id="run5_tread4"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_tread4"
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
                    <g transform="translate(-413.5 888)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run5_tread5"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_tread5"
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
                    run5
                  </text>
                </g>
                <g transform="translate(-1846 1776)  rotate(360)">
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
                <g transform="translate(-923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="2.5"
                        width={27}
                        height={217}
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
                        height={217}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(-923 666)  rotate(180)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-1846 666)  rotate(360)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                    <g transform="translate(-413.5 888)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="2.5"
                        width={27}
                        height="1227.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-432.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="2.5"
                        width={27}
                        height="1227.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run5_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(-1846 1776)  rotate(360)">
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
                <g transform="translate(-923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-923 666)  rotate(180)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-1846 666)  rotate(360)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                    <g transform="translate(-413.5 888)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1846 1776)  rotate(360)">
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
                <g transform="translate(-923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-923 666)  rotate(180)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-1846 666)  rotate(360)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                    <g transform="translate(-413.5 888)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1846 1776)  rotate(360)">
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
                <g transform="translate(-923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-923 666)  rotate(180)">
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-1846 666)  rotate(360)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                    <g transform="translate(-413.5 222)  rotate(0)" />
                    <g transform="translate(-413.5 444)  rotate(0)" />
                    <g transform="translate(-413.5 666)  rotate(0)" />
                    <g transform="translate(-413.5 888)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1846 1776)  rotate(360)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>{" "}
                <line
                  x1="532.5"
                  y1={-16}
                  x2="532.5"
                  y2={1737}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="477.5"
                  y="850.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="477.5"
                  y="-850.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1753
                </text>{" "}
                <line
                  x1="-1360.5"
                  y1={1887}
                  x2="432.5"
                  y2={1887}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={-514}
                  y={1887}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={-514}
                  y={-1867}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1793
                </text>{" "}
                <line
                  x1="-295.5"
                  y1={-183}
                  x2="-295.5"
                  y2={1737}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-350.5"
                  y={767}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-350.5"
                  y={-767}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1920
                </text>{" "}
                <line
                  x1="-2288.5"
                  y1={-283}
                  x2="-495.5"
                  y2={-283}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={-1442}
                  y={-283}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={-1442}
                  y={303}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1793
                </text>{" "}
                <line
                  x1="-2588.5"
                  y1={-183}
                  x2="-2588.5"
                  y2={1786}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-2643.5"
                  y="791.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-2643.5"
                  y="-791.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1969
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

export default TwoHalfLandingLeftRight;
