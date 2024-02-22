import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useSelector } from "react-redux";
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

const DefaultShape = () => {
  const widhtArrow = useSelector((state) => state?.stairHeightWidthSlice?.width);
  const heightArrow = useSelector((state) => state?.stairHeightWidthSlice?.height);
  const reduxLeftStep = useSelector(leftFeatureStep);
  const reduxRightStep = useSelector(rightFeatureStep);
  // states
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "200vh",
      width: "100wh",
    },
    svgRiser: {
      color: "mdf",
      positions: [220, 440, 660, 880, 1100, 1320],
      width: -0.3040416047548291,
      height: 0.3540416047548291,
      rotation: 180,
      ceilingHeight: 236,
    },
    leftRightPencilBorder: {
      height: 1760,
      towardsLeftRight: [373, -500],
      rotation: 0,
      color: "mdf",
    },
  });
  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  // fns
  const handleshowStairLayout = () => {
    setshowStairsLayout((prev) => !prev);
  };
  const handleshowMaterialConstruciton = () => {
    setshowMaterialConstruction((prev) => !prev);
  };

  return (
    <>
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
          {showStairsLayout && <StairLayout appState={appState} setAppState={setAppState} />}
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
        <Grid sx={{ textAlign: "center", justifyContent: "center" }} xs={9}>
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
            {/* entire height can be set from here */}
            <g
              transform={`translate (438.5,589.1753343239227) rotate(${appState.svgRiser.rotation}) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
            >
              {/* risers */}
              <g>
                {/* horizatinal stairs */}
                {appState.svgRiser.positions.map((items, index) => {
                  return (
                    <g key={index} transform={`translate(-481 ${items})  rotate(0)`}>
                      <rect
                        x={0}
                        y={-16}
                        width={862}
                        height={appState.svgRiser.ceilingHeight}
                        fill={`url(#${appState.svgRiser.color})`}
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread1"
                        className=""
                      />

                      <text
                        x={386}
                        y={-130}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #{index + 1}
                      </text>

                      <g transform="translate(852.5 180)  rotate(180)">
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
                x={0}
                y={-0}
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

              {/* make this dynamic */}
              {[600, -500].map((items, index) => {
                return (
                  <g key={index}>
                    <line
                      x1={600}
                      y1={-16}
                      x2={600}
                      height={appState.leftRightPencilBorder.height}
                      stroke="black"
                      strokeWidth={3}
                      markerEnd="url(#endarrow)"
                      markerStart="url(#startarrow)"
                      className=""
                    />
                    <rect
                      x={545}
                      y={647}
                      width={200}
                      height={100}
                      fill="transparent"
                      transform="translate (-20,-30)"
                      opacity="0.6"
                      className=""
                    />
                    <text
                      x={545}
                      y={-647}
                      style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                      className=""
                    >
                      {heightArrow}
                    </text>
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
