import { useState } from "react";
import { myColorsAry } from "./../style/global";
import { AppMainheading } from "../theme";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Tooltip } from "@mui/material";
import FeatureCard from "../components/molecules/FeatureCard";
import RefreshIcon from "@mui/icons-material/Refresh";
import { primary } from "../theme/colors";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import StairsWidthHeightSliders from "../components/tabs/StairsWidthHeightSliders";
import Div from "./../components/atom/Div";
import StairsMaterialConstruciton from "../components/tabs/StairsMaterialConstruciton";
import { useSelector } from "react-redux";
const Home = () => {
  const widhtArrow = useSelector((state) => state?.stairHeightWidthSlice?.width);
  const heightArrow = useSelector((state) => state?.stairHeightWidthSlice?.height);

  // states
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "200vh",
      width: 900,
    },
    svgRiser: {
      color: "whitewood",
      positions: [0, 220, 440, 660, 880, 1100, 1320],
      width: -0.3040416047548291,
      // height: 0.3540416047548291,
      height: 0.1540416047548291,

      rotation: 180,
      ceilingHeight: 236,
    },
    leftRightPencilBorder: {
      height: 1760,
      towardsLeftRight: [473, -500],
      rotation: 0,
      color: "whitewood",
    },
  });
  const [showStairsLayout, setshowStairsLayout] = useState(false);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  // fns
  const handleshowStairLayout = () => {
    setshowStairsLayout((prev) => !prev);
  };
  const handleshowMaterialConstruciton = () => {
    setshowMaterialConstruction((prev) => !prev);
  };
  const polylineData = [
    {
      points: "451,-16,-451,-16,-452,856.03,489,37,37",
      fill: "url(#turn1_tread1)",
      strokeWidth: 2,
      textContent: "#5",
      textPosition: { x: 70, y: -100 },
    },
    {
      points: "489,18.47,-451,847.5,-460,1488,-136.03,1488,454,55",
      fill: "url(#turn1_tread2)",
      strokeWidth: 2,
      textContent: "#6",
      textPosition: { x: 250, y: -280 },
    },
    {
      points: "415.4,55,-134.63,1488,457,1488,477,26,334,26",
      fill: "url(#turn1_tread3)",
      strokeWidth: 2,
      textContent: "#7",
      textPosition: { x: 550, y: -400 },
    },
  ];
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
          {showStairsLayout && (
            <StairsWidthHeightSliders appState={appState} setAppState={setAppState} />
          )}
          <Div height={20} />
          <FeatureCard
            title={"Material & Construction"}
            showStairsLayout={showMaterialConstruction}
            handleshowStairLayout={handleshowMaterialConstruciton}
          />
          {showMaterialConstruction && (
            <StairsMaterialConstruciton appState={appState} setAppState={setAppState} />
          )}
        </Grid>
        <Grid xs={8}>
          <div>
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
                transform={`translate (418.5,589.1753343239227) rotate(${appState.svgRiser.rotation}) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
              >
                {/* risers */}
                <g>
                  <g transform="translate(-13 1600)  rotate(-0.3)">
                    <g transform="translate(0 0)  rotate(0)">
                      <polyline
                        points="451,-16,-451,-16,-452,856.03,489,37,37"
                        fill="url(#turn1_tread1)"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <text
                        style={{ fontSize: "" }}
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      <polyline
                        points="431,0,-431,0,-431,10,451,10"
                        fill="url(#turn1_tread1)"
                        stroke="black"
                        strokeWidth={1}
                      />
                      <text
                        style={{ fontSize: "" }}
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      <text
                        x={70}
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
                    <g transform="translate(0 0)  rotate(0)">
                      <polyline
                        points="489,18.47,-451,847.5,-460,1488,-136.03,1488,454,55"
                        fill="url(#turn1_tread2)"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <text
                        style={{ fontSize: "" }}
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      {/* <polyline
                        points="689,37,-731,866.03,-731,877.6,689,48.58"
                        fill="url(#turn1_tread2)"
                        stroke="black"
                        strokeWidth={1}
                      /> */}
                      <text
                        style={{ fontSize: "" }}
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      <text
                        x={250}
                        y={-280}
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
                    <g transform="translate(0 0)  rotate(0)">
                      <polyline
                        points="415.4,55,-134.63,1488,457,1488,477,26,334,26"
                        fill="url(#turn1_tread3)"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <text
                        style={{ fontSize: "" }}
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      <polyline
                        points="434,55,-116.03,1488,-104.4,1488,434.63,55"
                        fill="url(#turn1_tread3)"
                        stroke="black"
                        strokeWidth={1}
                      />
                      <text
                        style={{ fontSize: "" }}
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      <text
                        x={550}
                        y={-400}
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
                  {/* horizatinal stairs */}
                  {appState.svgRiser.positions.map((items, index) => {
                    return (
                      <g key={index} transform={`translate(-481 ${items})  rotate(0)`}>
                        <rect
                          x={0}
                          y={-16}
                          width={962}
                          height={appState.svgRiser.ceilingHeight}
                          fill={`url(#${appState.svgRiser.color})`}
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run1_tread1"
                          className=""
                        />

                        <rect
                          x={0}
                          y={0}
                          width={962}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run1_tread1"
                          className=""
                        />
                        <text
                          x={456}
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
                        y={-120}
                        width={27}
                        height={heightArrow * 1.2}
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
                        y2={heightArrow}
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
                        fill="white"
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
                        {/* {Math.floor(appState.svgRiser.height * 1000)} */}
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
          </div>
        </Grid>
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
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const iconCol = {
  background: ` ${primary}`,
  height: 40,
  p: 1,
  width: 40,
  borderRadius: 1,
  cursor: "pointer",
};
