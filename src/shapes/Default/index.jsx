import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Divider, Paper, Radio, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useDispatch, useSelector } from "react-redux";
import { AppMainheading } from "../../theme";
import Div from "../../components/atom/Div";
import FeatureCard from "./../../components/molecules/FeatureCard";
import StairLayout from "./tabs/StairLayout";
import MaterialConstruction from "./tabs/MaterialConstruction";
import { myColorsAry } from "./../../style/global";
import { primary } from "../../theme/colors";
import { leftFeatureStep, rightFeatureStep } from "../../toolkit/slices/featureSteps";
import {
  LEFT_BULLNOSE,
  LEFT_CURTAIL,
  LEFT_CURTAIL_BULLNOSE,
  LEFT_D_STEP,
  RIGHT_BULLNOSE,
  RIGHT_CURTAIL,
  RIGHT_CURTAIL_BULLNOSE,
  RIGHT_D_STEP,
} from "../../utils/enum";
import { selectDivisble } from "../../toolkit/slices/singleFeatures";
import "./style.css";
import Balustrade from "./tabs/Balustrade";
import {
  headCheckerVerticalArrow,
  setheadCheckerVerticalArrow,
} from "../../toolkit/slices/stairHeightWidth";
const DefaultShape = () => {
  const dispatch = useDispatch();
  const widhtArrow = useSelector((state) => state?.stairHeightWidthSlice?.width);
  const heightArrow = useSelector((state) => state?.stairHeightWidthSlice?.height);
  const reduxLeftStep = useSelector(leftFeatureStep);
  const reduxRightStep = useSelector(rightFeatureStep);
  const reduxSelectDivisble = useSelector(selectDivisble);
  const headCheckerVerticalArrows = useSelector(headCheckerVerticalArrow);

  // states
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "100%",
      width: "100%",
    },
    svgRiser: {
      color: "mdf",
      positions: [220, 440, 660, 880, 1100, 1320, 1540, 1760, 1980, 2200, 2420, 2640],
      width: -0.25,
      height: 0.25,
      rotation: 180,
    },
    leftRightPencilBorder: {
      height: 3000,
      towardsLeftRight: [373, -500],
      rotation: 0,
      color: "mdf",
    },
  });
  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  const [individualState, setindividualState] = useState(208);
  const [showHeaderRoomChecker, setShowViewHeadRoomChecker] = useState(false);
  const [showBalustrade, setshowBalustrade] = useState(false);

  // fns
  const handleshowStairLayout = () => {
    setshowStairsLayout((prev) => !prev);
  };
  const handleshowMaterialConstruciton = () => {
    setshowMaterialConstruction((prev) => !prev);
  };
  const handleShowBalustrade = () => {
    setshowBalustrade((prev) => !prev);
  };
  // balustrade
  const [tower1, settower1] = useState(false);
  const [tower2, settower2] = useState(false);
  const [tower3, settower3] = useState(false);
  const [tower4, settower4] = useState(false);
  const [appBalustrade, setappBalustrade] = useState(true);
  const [leftLineBalustrade, setleftLineBalustrade] = useState(false);
  const [rightLineBalustrade, setrightLineBalustrade] = useState(false);
  const [balustradeStyles, setbalustradeStyles] = useState("Square spindles (Square posts)");
  const positionsLength = appState.svgRiser.positions.length;
  const increment = 135.5;

  const yCoordinates = [];
  for (let i = 0; i < positionsLength * 1.6; i++) {
    yCoordinates.push(89.75 + i * increment);
  }
  return (
    <>
      <AppMainheading sx={{ mt: 4 }}>
        Interactive EasyStairs Design Tool - StairBuilder®
      </AppMainheading>
      <Divider sx={{ mt: 1 }} />
      <Div height={40} />
      <Grid container>
        {/* first col */}
        <Grid xs={2}>
          {/* Stair Layout */}
          <FeatureCard
            title={"Stairs Layout"}
            showStairsLayout={showStairsLayout}
            handleshowStairLayout={handleshowStairLayout}
          />
          {showStairsLayout && (
            <StairLayout
              appState={appState}
              setAppState={setAppState}
              setindividualState={setindividualState}
            />
          )}
          {/* balustrade */}
          <Div height={20} />
          <FeatureCard
            title={"Balustrade"}
            showStairsLayout={showBalustrade}
            handleshowStairLayout={handleShowBalustrade}
          />
          {showBalustrade && (
            <Balustrade
              appBalustrade={appBalustrade}
              setappBalustrade={setappBalustrade}
              setbalustradeStyles={setbalustradeStyles}
            />
          )}
          {/* Material  */}
          <Div height={20} />
          <FeatureCard
            title={"Material & Construction"}
            showStairsLayout={showMaterialConstruction}
            handleshowStairLayout={handleshowMaterialConstruciton}
          />
          {showMaterialConstruction && (
            <MaterialConstruction appState={appState} setAppState={setAppState} />
          )}
        </Grid>
        {/* mid col */}
        <Grid sx={{ textAlign: "center", justifyContent: "center" }} xs={8}>
          <svg
            width={appState.svgInsideContainer.width}
            height={appState.svgInsideContainer.height}
          >
            {/* its colors inside */}
            <defs>
              {myColorsAry.map((id) => (
                <pattern
                  key={id}
                  id={id}
                  patternUnits="userSpaceOnUse"
                  width="1000px"
                  height="1000px"
                >
                  <image
                    style={{ MozUserSelect: "text" }}
                    href={`https://cdn.stairbox.com/assets/stairbuilder/textures/${id}.jpg`}
                    width="1000px"
                    height="1000px"
                    preserveAspectRatio="none"
                    transform="translate (0,0) rotate(0)"
                  />
                </pattern>
              ))}
              {/* tip of arrows */}
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
            </defs>
            {/* its the layout  */}
            <g
              transform={`translate (530.5,890) rotate(${appState.svgRiser.rotation}) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
            >
              {/* risers */}
              <g>
                {/* horizatinal stairs */}
                {appState.svgRiser.positions.map((items, index) => {
                  const isLastIndex = index === appState.svgRiser.positions.length - 1;
                  return (
                    <g key={index} transform={`translate(-481 ${items})  rotate(0)`}>
                      <rect
                        x={0}
                        y={106}
                        width={862}
                        height={296}
                        fill={`url(#${appState.svgRiser.color})`}
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread1"
                        className=""
                      />
                      <text
                        x={390}
                        y={-230}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #{index + 1}
                      </text>
                      {/* half layer */}
                      {isLastIndex && reduxSelectDivisble && (
                        <g transform="translate(10.5 360)  rotate(0)">
                          <rect
                            x={0}
                            y={-16}
                            width={857}
                            height={86}
                            fill={`url(#${appState.svgRiser.color})`}
                            style={{ stroke: "black", strokeWidth: 2 }}
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
                            #{index + 2}
                          </text>
                        </g>
                      )}

                      {/* featuer steps */}
                      <g transform="translate(852.5 300)  rotate(180)">
                        {index === 1 && (
                          <>
                            {reduxLeftStep === LEFT_D_STEP && (
                              <g transform="translate(832.5 420)  rotate(180)">
                                <path
                                  d="M 4 222 V 244 q -130 0 -130 -130 q 0 -130 130 -130 H 851 V 222 z"
                                  fill="url(#mdf)"
                                  style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                />
                                <text
                                  x="380.5"
                                  y={-85}
                                  style={{
                                    fontSize: 55,
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    color: "black",
                                  }}
                                  transform="translate (0,0) rotate(180) scale(-1,1)"
                                >
                                  #{index}
                                </text>
                              </g>
                            )}

                            {reduxRightStep === RIGHT_D_STEP && (
                              <g transform="translate(430 420)  rotate(180)">
                                <g transform="translate(-432.5 0)  rotate(0)">
                                  <path
                                    d="
                           M 4 222
                           V -16
                           H 856
                           q 130 0 130 130
                           q 0 130 -130 130
                           V 222
                           z"
                                    fill="url(#mdf)"
                                    style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                  />
                                  <path
                                    d="
                           M 14 0
                           H 856
                           q 114 0 114 114
                           q 0 114 -114 114
                           v -10
                           q 104 0 104 -104
                           q 0 -104 -104 -104
                           H 14
                           z"
                                    fill="none"
                                    style={{ stroke: "black", strokeWidth: 1, opacity: 1 }}
                                  />{" "}
                                  <text
                                    x="407.5"
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
                                <g transform="translate(419 222)  rotate(0)" />
                              </g>
                            )}
                            {reduxLeftStep === LEFT_CURTAIL && (
                              <>
                                <g transform="translate(0 0)  rotate(180)">
                                  <g transform="translate(-852.5 -430)  rotate(0)">
                                    {" "}
                                    <path
                                      d="
          M 0 222
          V 473
          h -0
          q -244.5 0 -244.5 -244.5
          q 0 -244.5 244.5 -244.5
          H 851
          V 222
          z"
                                      fill="url(#mdf)"
                                      style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                    />{" "}
                                    <path
                                      d="
          M 0 457
          q -228.5 0 -228.5 -228.5
          q 0 -228.5 228.5 -228.5
          H 851
          v 10
          H 0
          q -218.5 0 -218.5 218.5
          q 0 218.5 218.5 218.5
          z"
                                      fill="none"
                                      style={{ stroke: "black", strokeWidth: 1, opacity: 1 }}
                                    />{" "}
                                    <text
                                      x="407.5"
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
                                  <g transform="translate(-419 222)  rotate(0)" />
                                </g>
                              </>
                            )}
                            {reduxRightStep === RIGHT_CURTAIL && (
                              <>
                                <g transform="translate(842.5 440)  rotate(180)">
                                  <path
                                    d="
                            M 14 222
                            V -16
                            H 867.5
                            q 244.5 0 244.5 244.5
                            q 0 244.5 -244.5 244.5
                            h -30
                            V 222
                            z"
                                    fill="url(#mdf)"
                                    style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                  />
                                  <text
                                    x="407.5"
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
                              </>
                            )}
                            {reduxLeftStep === LEFT_BULLNOSE &&
                              reduxRightStep !== RIGHT_BULLNOSE && (
                                <g transform="translate(872.5 430)  rotate(180)">
                                  {" "}
                                  <path
                                    d="
          M 16 222
          v -137.5
          q 0 -100.5 100.5 -100.5
          H 851
          V 222
          z"
                                    fill="url(#mdf)"
                                    style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                  />{" "}
                                  <path
                                    d="
          M 32 222
          v -121.5
          q 0 -100.5 84.5 -100.5
          H 851
          v 10
          H 116.5
          q -74.5 0 -74.5 84.5
          V 222
          z
      "
                                    fill="none"
                                    style={{ stroke: "black", strokeWidth: 1, opacity: 1 }}
                                  />{" "}
                                  <text
                                    x="407.5"
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
                              )}
                            {reduxRightStep === RIGHT_BULLNOSE &&
                              reduxLeftStep !== LEFT_BULLNOSE && (
                                <g transform="translate(872.5 430)  rotate(180)">
                                  {" "}
                                  <path
                                    d="
          M 14 222
          V -16
          H 767
          q 100.5 0 100.5 100.5
          V 222
          z"
                                    fill="url(#mdf)"
                                    style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                  />{" "}
                                  <path
                                    d="
          M 14 0
          H 751
          q 100.5 0 100.5 100.5
          V 222
          h -10
          V 100.5
          q 0 -90.5 -90.5 -90.5
          H 14
          z"
                                    fill="none"
                                    style={{ stroke: "black", strokeWidth: 1, opacity: 1 }}
                                  />{" "}
                                  <text
                                    x="407.5"
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
                              )}
                            {reduxLeftStep === LEFT_BULLNOSE &&
                              reduxRightStep === RIGHT_BULLNOSE && (
                                <g transform="translate(872.5 430)  rotate(180)">
                                  <path
                                    d="
          M 16 222
          v -137.5
          q 0 -100.5 100.5 -100.5
          H 767
          q 100.5 0 100.5 100.5
          V 222
          z"
                                    fill="url(#mdf)"
                                    style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                  />
                                  <path
                                    d="
          M 32 222
          v -121.5
          q 0 -100.5 84.5 -100.5

          H 751
          q 100.5 0 100.5 100.5
          V 222
          h -10
          V 100.5
          q 0 -90.5 -90.5 -90.5
          H 116.5
          q -74.5 0 -74.5 84.5
          V 222
          z"
                                    fill="none"
                                    style={{ stroke: "black", strokeWidth: 1, opacity: 1 }}
                                  />{" "}
                                  <text
                                    x="407.5"
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
                              )}
                            {reduxLeftStep === LEFT_CURTAIL_BULLNOSE && (
                              <>
                                <g transform="translate(832.5 440)  rotate(180)">
                                  {" "}
                                  <path
                                    d="
          M 0 222
          V 473
          h -150
          q -244.5 0 -244.5 -244.5
          q 0 -244.5 244.5 -244.5
          H 851
          V 222
          z"
                                    fill="url(#mdf)"
                                    style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                  />{" "}
                                  <text
                                    x="407.5"
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
                              </>
                            )}
                            {reduxRightStep === RIGHT_CURTAIL_BULLNOSE && (
                              <>
                                <g>
                                  <g transform="translate(840 430)  rotate(180)">
                                    {" "}
                                    <path
                                      d="
          M 1 222
          V -16
          H 990
          q 244.5 0 244.5 244.5
          q 0 244.5 -244.5 244.5
          h -150
          V 222
          z"
                                      fill="url(#mdf)"
                                      style={{ stroke: "black", strokeWidth: 2, opacity: 1 }}
                                    />{" "}
                                    <text
                                      x="407.5"
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
                                </g>
                              </>
                            )}
                          </>
                        )}
                      </g>
                    </g>
                  );
                })}
              </g>
              {/* run */}
              <text
                x={-100}
                y={-350}
                style={{
                  fontSize: 55,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "black",
                }}
                transform={`translate (0,0) rotate(${appState.svgRiser.rotation}) scale(-1,1)`}
              >
                run1
              </text>
              {/* left &  right heing  pencil border*/}
              {appState.leftRightPencilBorder.towardsLeftRight.map((items, index) => {
                return (
                  <g
                    key={index}
                    transform={`translate(${items} 0)  rotate(${appState.leftRightPencilBorder.rotation})`}
                  >
                    <rect
                      x={0}
                      y={220}
                      width={27}
                      height={appState.leftRightPencilBorder.height}
                      fill={`url(#${appState.leftRightPencilBorder.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="run1_rightString"
                      className=""
                    />
                  </g>
                );
              })}
              {/* head checker */}
              {showHeaderRoomChecker && (
                <g>
                  <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width={80} height={80}>
                    <path
                      d="M-20,20 l40,-40
                     M0,80 l80,-80
                     M60,100 l40,-40"
                      style={{ stroke: "grey", strokeWidth: 4 }}
                    />
                  </pattern>
                  <g></g>
                  {individualState !== 0 && (
                    <path
                      d={`M-500 550 L-500 ${
                        individualState * (appState.svgRiser.positions.length + 2.5) + 10
                      }  L400  ${
                        individualState * (appState.svgRiser.positions.length + 2.5) + 10
                      } L400 550 L-500 550`}
                      fill="url(#diagonalHatch)"
                      fillOpacity={1}
                      strokeWidth={6}
                      stroke="black"
                    />
                  )}
                  {individualState === 0 && (
                    <path
                      d={`M-500 550 L-500 ${
                        165 * (appState.svgRiser.positions.length + 2.5) + 10
                      }  L400  ${
                        165 * (appState.svgRiser.positions.length + 2.5) + 10
                      } L400 550 L-500 550`}
                      fill="url(#diagonalHatch)"
                      fillOpacity={1}
                      strokeWidth={6}
                      stroke="black"
                    />
                  )}
                  {individualState !== 0 && (
                    <path
                      d={`M-500 550 L-500 ${
                        individualState * (appState.svgRiser.positions.length + 2.5) + 10
                      }  L400  ${
                        individualState * (appState.svgRiser.positions.length + 2.5) + 10
                      } L400 550 L-500 550`}
                      fill="white"
                      fillOpacity="0.3"
                    />
                  )}
                  {individualState === 0 && (
                    <path
                      d={`M-500 550 L-500 ${
                        165 * (appState.svgRiser.positions.length + 2.5) + 10
                      }  L400  ${
                        165 * (appState.svgRiser.positions.length + 2.5) + 10
                      } L400 550 L-500 550`}
                      fill="white"
                      fillOpacity="0.3"
                    />
                  )}
                </g>
              )}
              {/* balustrade lines */}
              {showBalustrade && appBalustrade && (
                <g transform="translate(-50 370)  rotate(0)">
                  {/* the two lines */}
                  <g transform="translate(0 0)  rotate(0)">
                    <g
                      onClick={() => setleftLineBalustrade(!leftLineBalustrade)}
                      transform="translate(-419 45)  rotate(0)"
                    >
                      <rect
                        x="-29.5"
                        y={0}
                        width={59}
                        height={individualState * (appState.svgRiser.positions.length + 0.9) + 10}
                        fill="url(#redwood)"
                        className={!leftLineBalustrade ? "balLeftLight" : "balLeftLightDef"}
                        id="run1_leftBalustrade"
                      />
                    </g>
                    <g
                      onClick={() => setrightLineBalustrade(!rightLineBalustrade)}
                      transform="translate(419 45)  rotate(0)"
                    >
                      <rect
                        x="-29.5"
                        y={0}
                        width={59}
                        height={individualState * (appState.svgRiser.positions.length + 0.9) + 10}
                        fill="url(#redwood)"
                        className={!rightLineBalustrade ? "balRightLine" : "balRightLineDef"}
                        id="run1_rightBalustrade"
                      />
                    </g>
                  </g>
                  {/* towers */}
                  <g transform={"translate(0 150)  rotate(0)"}>
                    <g onClick={() => settower1(!tower1)} transform="translate(-419 0)  rotate(0)">
                      {" "}
                      <rect
                        x={-45}
                        y={-45}
                        width={90}
                        height={90}
                        fill="url(#redwood)"
                        className={!tower1 ? "tower1" : "tower1Def"}
                        id="stair_start_left"
                      />
                    </g>
                    <g onClick={() => settower2(!tower2)} transform="translate(419 0)  rotate(0)">
                      {" "}
                      <rect
                        x={-45}
                        y={-45}
                        width={90}
                        height={90}
                        fill="url(#redwood)"
                        className={!tower2 ? "tower2" : "tower2Def"}
                        id="stair_start_right"
                      />
                    </g>
                  </g>
                  {/* dots */}

                  {balustradeStyles === "Square spindles (Square posts)" && (
                    <g transform="translate(0 120)  rotate(0)">
                      <g>
                        <g transform="translate(-419 45)  rotate(0)">
                          <g
                            onClick={() => {
                              settower1(!tower1);
                              settower3(!tower3);
                              setleftLineBalustrade(!leftLineBalustrade);
                            }}
                          >
                            {yCoordinates.map((y, index) => (
                              <rect
                                key={index}
                                x="-20.5"
                                y={y}
                                width={41}
                                height={41}
                                fill="lightgrey"
                                style={{ stroke: "black", strokeWidth: 3 }}
                                className="balustradeMode"
                              />
                            ))}
                          </g>
                          <g />
                        </g>
                        <g
                          onClick={() => {
                            settower2(!tower2);
                            settower4(!tower4);
                            setrightLineBalustrade(!rightLineBalustrade);
                          }}
                          transform="translate(419 45)  rotate(0)"
                        >
                          {yCoordinates.map((y, index) => (
                            <rect
                              key={index}
                              x="-20.5"
                              y={y}
                              width={41}
                              height={41}
                              fill="lightgrey"
                              style={{ stroke: "black", strokeWidth: 3 }}
                              className="balustradeMode"
                            />
                          ))}
                          <g />
                        </g>
                      </g>
                    </g>
                  )}
                  {balustradeStyles === "Chamfer spindles (Square posts)" && (
                    <g transform="translate(0 120)  rotate(0)">
                      <g>
                        <g transform="translate(-419 45)  rotate(0)">
                          <g
                            onClick={() => {
                              settower1(!tower1);
                              settower3(!tower3);
                              setleftLineBalustrade(!leftLineBalustrade);
                            }}
                          >
                            {yCoordinates.map((y, index) => (
                              <rect
                                key={index}
                                x="-20.5"
                                y={y}
                                width={41}
                                height={41}
                                fill="lightgrey"
                                style={{ stroke: "black", strokeWidth: 3 }}
                                className="balustradeMode"
                              />
                            ))}
                          </g>
                          <g />
                        </g>
                        <g
                          onClick={() => {
                            settower2(!tower2);
                            settower4(!tower4);
                            setrightLineBalustrade(!rightLineBalustrade);
                          }}
                          transform="translate(419 45)  rotate(0)"
                        >
                          {yCoordinates.map((y, index) => (
                            <rect
                              key={index}
                              x="-20.5"
                              y={y}
                              width={41}
                              height={41}
                              fill="lightgrey"
                              style={{ stroke: "black", strokeWidth: 3 }}
                              className="balustradeMode"
                            />
                          ))}
                          <g />
                        </g>
                      </g>
                    </g>
                  )}
                  {balustradeStyles === "Oak Twist spindles (Square posts)" && (
                    <g transform="translate(0 120)  rotate(0)">
                      <g>
                        <g transform="translate(-419 45)  rotate(0)">
                          <g
                            onClick={() => {
                              settower1(!tower1);
                              settower3(!tower3);
                              setleftLineBalustrade(!leftLineBalustrade);
                            }}
                          >
                            {yCoordinates.map((y, index) => (
                              <rect
                                key={index}
                                x="-20.5"
                                y={y}
                                width={41}
                                height={41}
                                fill="lightgrey"
                                style={{ stroke: "black", strokeWidth: 3 }}
                                className="balustradeMode"
                              />
                            ))}
                          </g>
                          <g />
                        </g>
                        <g
                          onClick={() => {
                            settower2(!tower2);
                            settower4(!tower4);
                            setrightLineBalustrade(!rightLineBalustrade);
                          }}
                          transform="translate(419 45)  rotate(0)"
                        >
                          {yCoordinates.map((y, index) => (
                            <rect
                              key={index}
                              x="-20.5"
                              y={y}
                              width={41}
                              height={41}
                              fill="lightgrey"
                              style={{ stroke: "black", strokeWidth: 3 }}
                              className="balustradeMode"
                            />
                          ))}
                          <g />
                        </g>
                      </g>
                    </g>
                  )}
                  {balustradeStyles === "Turned spindles (Turned posts)" && (
                    <g transform="translate(0 120)  rotate(0)">
                      <g>
                        <g transform="translate(-419 45)  rotate(0)">
                          <g
                            onClick={() => {
                              settower1(!tower1);
                              settower3(!tower3);
                              setleftLineBalustrade(!leftLineBalustrade);
                            }}
                          >
                            {yCoordinates.map((y, index) => (
                              <>
                                <rect
                                  key={index}
                                  x="-20.5"
                                  y={y}
                                  width={41}
                                  height={41}
                                  fill="lightgrey"
                                  style={{ stroke: "black", strokeWidth: 3, fill: "lightgrey" }}
                                  className="balustradeMode"
                                />
                                <circle
                                  cx="-0.5"
                                  key={index}
                                  cy={y + 18}
                                  r={10}
                                  fill="none"
                                  stroke="black"
                                  strokeWidth="2px"
                                />
                              </>
                            ))}
                          </g>
                          <g />
                        </g>
                        <g
                          onClick={() => {
                            settower2(!tower2);
                            settower4(!tower4);
                            setrightLineBalustrade(!rightLineBalustrade);
                          }}
                          transform="translate(419 45)  rotate(0)"
                        >
                          {yCoordinates.map((y, index) => (
                            <>
                              <rect
                                key={index}
                                x="-20.5"
                                y={y}
                                width={41}
                                height={41}
                                fill="lightgrey"
                                style={{ stroke: "black", strokeWidth: 3, fill: "lightgrey" }}
                                className="balustradeMode"
                              />
                              <circle
                                cx="-0.5"
                                key={index}
                                cy={y + 18}
                                r={10}
                                fill="none"
                                stroke="black"
                                strokeWidth="2px"
                              />
                            </>
                          ))}
                          <g />
                        </g>
                      </g>
                    </g>
                  )}
                  {balustradeStyles === "Embedded Glass (Square posts)" && (
                    <g transform="translate(0 120)  rotate(0)">
                      <g>
                        <g transform="translate(-419 45)  rotate(0)">
                          <g
                            onClick={() => {
                              settower1(!tower1);
                              settower3(!tower3);
                              setleftLineBalustrade(!leftLineBalustrade);
                            }}
                          >
                            {yCoordinates.map((y, index) => (
                              <rect
                                key={index}
                                x={-4}
                                y={100 * index}
                                width={8}
                                height="791.33333333333"
                                fill="#868992"
                                id=""
                                className="balustradeMode"
                              />
                            ))}
                          </g>
                          <g />
                        </g>
                        <g
                          onClick={() => {
                            settower2(!tower2);
                            settower4(!tower4);
                            setrightLineBalustrade(!rightLineBalustrade);
                          }}
                          transform="translate(419 45)  rotate(0)"
                        >
                          {yCoordinates.map((y, index) => (
                            <rect
                              key={index}
                              x={-4}
                              y={100 * index}
                              width={8}
                              height="791.33333333333"
                              fill="#868992"
                              id=""
                              className="balustradeMode"
                            />
                          ))}
                          <g />
                        </g>
                      </g>
                    </g>
                  )}
                  {balustradeStyles === "Clamped Glass (Square posts)" && (
                    <g transform="translate(0 120)  rotate(0)">
                      <g>
                        <g transform="translate(-419 45)  rotate(0)">
                          <g
                            onClick={() => {
                              settower1(!tower1);
                              settower3(!tower3);
                              setleftLineBalustrade(!leftLineBalustrade);
                            }}
                          >
                            {yCoordinates.map((y, index) => (
                              <rect
                                key={index}
                                x={-4}
                                y={100 * index}
                                width={8}
                                height="791.33333333333"
                                fill="#868992"
                                id=""
                                className="balustradeMode"
                              />
                            ))}
                          </g>
                          <g />
                        </g>
                        <g
                          onClick={() => {
                            settower2(!tower2);
                            settower4(!tower4);
                            setrightLineBalustrade(!rightLineBalustrade);
                          }}
                          transform="translate(419 45)  rotate(0)"
                        >
                          {yCoordinates.map((y, index) => (
                            <rect
                              key={index}
                              x={-4}
                              y={100 * index}
                              width={8}
                              height="791.33333333333"
                              fill="#868992"
                              id=""
                              className="balustradeMode"
                            />
                          ))}
                          <g />
                        </g>
                      </g>
                    </g>
                  )}
                  {/* towers */}
                  <g transform={`translate(0 ${yCoordinates.length * 145})  rotate(0)`}>
                    <g
                      onClick={() => settower3(!tower3)}
                      transform={"translate(-419 0)  rotate(0)"}
                    >
                      {" "}
                      <rect
                        x={-45}
                        y={-45}
                        width={90}
                        height={90}
                        fill="url(#redwood)"
                        className={!tower3 ? "tower3" : "tower3Def"}
                        id="nosing_left"
                      />
                    </g>
                    <g onClick={() => settower4(!tower4)} transform="translate(419 0)  rotate(0)">
                      <rect
                        x={-45}
                        y={-45}
                        width={90}
                        height={90}
                        fill="url(#redwood)"
                        className={!tower4 ? "tower4" : "tower4Def"}
                        id="nosing_right"
                      />
                    </g>
                  </g>
                </g>
              )}

              {/* make this dynamic */}
              <g transform={`translate(0 0)  rotate(0)`}>
                {[600, -500].map((items, index) => {
                  return (
                    <g key={index}>
                      <g
                        transform={`translate(0 1220)  rotate(0)`}
                        style={{ position: "relative" }}
                      >
                        {heightArrow && (
                          <line
                            x1={500}
                            y1={individualState * (appState.svgRiser.positions.length - 3) + 10}
                            x2={500}
                            y2={-700}
                            stroke="black"
                            strokeWidth={3}
                            markerEnd="url(#endarrow)"
                            markerStart="url(#startarrow)"
                            className=""
                          />
                        )}
                        <g
                          transform={`translate(0 ${
                            individualState * (appState.svgRiser.positions.length - 3) + 10
                          })  rotate(0)`}
                        >
                          <text
                            x={545}
                            y={230}
                            style={{
                              fontSize: 75,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              position: "absolute",
                              top: "50%",
                            }}
                            transform="translate (0,0) rotate(180) scale(-1,1)"
                          >
                            {headCheckerVerticalArrows ? headCheckerVerticalArrows : heightArrow}
                          </text>
                        </g>
                      </g>
                      {widhtArrow && (
                        <line
                          x1={-500}
                          y1={-250}
                          x2={500}
                          y2={-250}
                          stroke="black"
                          strokeWidth={3}
                          markerEnd="url(#endarrow)"
                          markerStart="url(#startarrow)"
                          className=""
                        />
                      )}

                      <rect
                        x={-50}
                        y={-250}
                        width={200}
                        height={100}
                        fill="white"
                        transform="translate (-20,-30)"
                        opacity="0.6"
                        className=""
                      />
                      <text
                        x={-50}
                        y={270}
                        style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                        className=""
                      >
                        {widhtArrow}
                        {/* {Math.floor(Math.abs(appState.svgRiser.width) * 1000)} */}
                      </text>
                    </g>
                  );
                })}
              </g>
            </g>
          </svg>
        </Grid>
        {/* third col */}
        <Grid xs={2}>
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
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: primary,
                color: "black",
                mt: 3,
                mb: 3,
                textTransform: "capitalize",
              }}
            >
              Details
            </Button>
            <Paper sx={{ p: 2 }}>
              <Radio />
              Show More Dimensions
            </Paper>
            <Button
              onClick={() => {
                setShowViewHeadRoomChecker(!showHeaderRoomChecker);
                dispatch(!showHeaderRoomChecker && setheadCheckerVerticalArrow(heightArrow - 225));
              }}
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: primary,
                color: "black",
                mt: 3,
                mb: 3,
                textTransform: "capitalize",
              }}
            >
              View stair-well Opening (headroom checker)
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default DefaultShape;

export const iconCol = {
  background: ` ${primary}`,
  height: 40,
  p: 1,
  width: 40,
  borderRadius: 1,
  cursor: "pointer",
};
