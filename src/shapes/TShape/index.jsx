import { Divider, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { iconCol } from "../Default";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RefreshIcon from "@mui/icons-material/Refresh";
import FeatureCard from "../../components/molecules/FeatureCard";
import { useState } from "react";
import Div from "../../components/atom/Div";
import { AppMainheading } from "../../theme";
import StairsLayout from "./tabs/stairsLayout";
import MaterialConstruction from "./tabs/materialConstrction";

const patternsData = [
  {
    id: "mdf",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg",
  },
  {
    id: "oak",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/oak.jpg",
  },
  {
    id: "redwood",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/pine.jpg",
  },
  {
    id: "whitewood",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/softwood.jpg",
  },
  {
    id: "whiteprimed",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/whiteprimed.jpg",
  },
  {
    id: "false",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/none.jpg",
  },
  {
    id: "0",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/none.jpg",
  },
  {
    id: "turn1_tread1",
    href: "https://cdn.stairbox.com/assets/stairbuilder/textures/mdf.jpg",
  },
];

const markersData = [
  {
    id: "startarrow",
    markerWidth: 10,
    markerHeight: 7,
    refY: "3.5",
  },
  {
    id: "endarrow",
    markerWidth: 10,
    markerHeight: 7,
    refX: 10,
    refY: "3.5",
    markerUnits: "strokeWidth",
  },
];
const TShape = () => {
  // states
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "200vh",
      width: 900,
    },
    svgRiser: {
      color: "mdf",
      positionsBottom: [0, 220, 440, 660, 880, 1100, 1320],
      positionsLeft: [0, 220, 440, 660, 880, 1100, 1320],
      positionsRight: [0, 220, 440, 660, 880, 1100, 1320],

      translateY: 250,
      translateX: 440,
      height: 0.10497349154253975,
      width: -0.10497349154253975,

      ceilingHeight: 236,
    },
    leftRightPencilBorder: {
      height: 1760,
      towardsLeftRight: [473, -500],
      rotation: 0,
      color: "mdf",
    },
  });
  // fns
  const [showStairsLayout, setshowStairsLayout] = useState(false);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
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
          <Grid xs={2}>
            <FeatureCard
              title={"Stairs Layout"}
              showStairsLayout={showStairsLayout}
              handleshowStairLayout={handleshowStairLayout}
            />
            {showStairsLayout && <StairsLayout setAppState={setAppState} />}
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
        </Grid>
        <Grid sx={{ textAlign: "center" }} xs={8}>
          <div>
            <svg
              width={appState.svgInsideContainer.width}
              height={appState.svgInsideContainer.height}
            >
              <defs>
                {patternsData.map((pattern) => (
                  <pattern
                    key={pattern.id}
                    id={pattern.id}
                    patternUnits="userSpaceOnUse"
                    width="1000px"
                    height="1000px"
                  >
                    <image
                      href={pattern.href}
                      width="1000px"
                      height="1000px"
                      preserveAspectRatio="none"
                    />
                  </pattern>
                ))}

                {markersData.map((marker) => (
                  <marker
                    key={marker.id}
                    id={marker.id}
                    markerWidth={marker.markerWidth}
                    markerHeight={marker.markerHeight}
                    refX={marker.refX || 0}
                    refY={marker.refY}
                    orient={marker.orient || "auto"}
                    markerUnits={marker.markerUnits || "userSpaceOnUse"}
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="red" />
                  </marker>
                ))}
              </defs>
              <g
                transform={`translate (${appState.svgRiser.translateX},${appState.svgRiser.translateY}) rotate(180) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
              >
                <g>
                  {/* bottom  */}
                  <g transform={`translate(0 932)  rotate(180)`}>
                    {appState.svgRiser.positionsBottom.map((items, index) => {
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
                  {/* center */}
                  <g transform="translate(0 888)  rotate(0)">
                    <g transform="translate(0 849)  rotate(-90)" />
                    <g transform="translate(0 0)  rotate(0)">
                      <polyline
                        points="418.5,-16,-418.5,-16,-418.5,-2.5,-416.5,-2.5,-416.5,835,416.5,835,416.5,-2.5,418.5,-2.5"
                        stroke="black"
                        strokeWidth={2}
                        height={appState.svgRiser.ceilingHeight}
                        fill={`url(#${appState.svgRiser.color})`}
                      />

                      <polyline
                        points="418.5,0,-418.5,0,-418.5,10,418.5,10"
                        fill="url(#turn1_tread1)"
                        stroke="black"
                        strokeWidth={1}
                      />

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
                        #run1
                      </text>
                    </g>
                    <g transform="translate(-419 -2.5)  rotate(0)" />
                    <g transform="translate(419 -2.5)  rotate(0)" />
                  </g>
                  {/* left */}

                  <g transform="translate(-416.5 1304.5)  rotate(90)">
                    {appState.svgRiser.positionsLeft.map((items, index) => {
                      return (
                        <g key={index} transform={`translate(-540 ${items})  rotate(0)`}>
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
                      run2
                    </text>
                  </g>
                  {/* right */}
                  <g transform="translate(416.5 1304.5)  rotate(-90)">
                    {appState.svgRiser.positionsRight.map((items, index) => {
                      return (
                        <g key={index} transform={`translate(-420 ${items})  rotate(0)`}>
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
                </g>
                {/* pencil border */}
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
                        <rect
                          x={0}
                          y={-120}
                          width={27}
                          height={963}
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run1_rightString"
                          className=""
                        />
                      </g>
                      <g transform="translate(-432.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={-120}
                          width={27}
                          height={963}
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
                    <g transform="translate(0 849)  rotate(-90)">
                      <rect
                        x={0}
                        y="-416.5"
                        width={27}
                        height={833}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="turn1_string1"
                        className=""
                      />
                    </g>
                    <g transform="translate(0 0)  rotate(0)" />
                    <g transform="translate(-419 -2.5)  rotate(0)" />
                    <g transform="translate(419 -2.5)  rotate(0)" />
                  </g>
                  <g transform="translate(-416.5 1304.5)  rotate(90)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)" />
                      <g transform="translate(-413.5 222)  rotate(0)" />
                      <g transform="translate(-413.5 444)  rotate(0)" />
                      <g transform="translate(-413.5 666)  rotate(0)" />
                      <g transform="translate(-413.5 888)  rotate(0)" />
                      <g transform="translate(-413.5 1110)  rotate(0)" />
                      <g transform="translate(-413.5 1332)  rotate(0)" />
                    </g>
                    <g>
                      <g transform="translate(405.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={0}
                          width={27}
                          height={1674}
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_rightString"
                          className=""
                        />
                      </g>
                      <g transform="translate(-432.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={45}
                          width={27}
                          height={1629}
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_leftString"
                          className=""
                        />
                      </g>
                    </g>
                    <g />
                  </g>
                  <g transform="translate(-1970.5 1304.5)  rotate(90)">
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g transform="translate(416.5 1304.5)  rotate(-90)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)" />
                      <g transform="translate(-413.5 222)  rotate(0)" />
                      <g transform="translate(-413.5 444)  rotate(0)" />
                      <g transform="translate(-413.5 666)  rotate(0)" />
                      <g transform="translate(-413.5 888)  rotate(0)" />
                      <g transform="translate(-413.5 1110)  rotate(0)" />
                      <g transform="translate(-413.5 1332)  rotate(0)" />
                    </g>
                    <g>
                      <g transform="translate(405.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={45}
                          width={27}
                          height={1629}
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_rightString"
                          className=""
                        />
                      </g>
                      <g transform="translate(-432.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={0}
                          width={27}
                          height={1674}
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_leftString"
                          className=""
                        />
                      </g>
                    </g>
                    <g />
                  </g>
                  <g transform="translate(1970.5 1304.5)  rotate(-90)">
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                </g>
                {/* arrows */}
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
                    <g transform="translate(0 849)  rotate(-90)" />
                    <g transform="translate(0 0)  rotate(0)" />
                    <g transform="translate(-419 -2.5)  rotate(0)" />
                    <g transform="translate(419 -2.5)  rotate(0)" />
                  </g>
                  <g transform="translate(-416.5 1304.5)  rotate(90)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)" />
                      <g transform="translate(-413.5 222)  rotate(0)" />
                      <g transform="translate(-413.5 444)  rotate(0)" />
                      <g transform="translate(-413.5 666)  rotate(0)" />
                      <g transform="translate(-413.5 888)  rotate(0)" />
                      <g transform="translate(-413.5 1110)  rotate(0)" />
                      <g transform="translate(-413.5 1332)  rotate(0)" />
                    </g>
                    <g>
                      <g transform="translate(405.5 0)  rotate(0)" />
                      <g transform="translate(-432.5 0)  rotate(0)" />
                    </g>
                    <g />
                  </g>
                  <g transform="translate(-1970.5 1304.5)  rotate(90)">
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g transform="translate(416.5 1304.5)  rotate(-90)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)" />
                      <g transform="translate(-413.5 222)  rotate(0)" />
                      <g transform="translate(-413.5 444)  rotate(0)" />
                      <g transform="translate(-413.5 666)  rotate(0)" />
                      <g transform="translate(-413.5 888)  rotate(0)" />
                      <g transform="translate(-413.5 1110)  rotate(0)" />
                      <g transform="translate(-413.5 1332)  rotate(0)" />
                    </g>
                    <g>
                      <g transform="translate(405.5 0)  rotate(0)" />
                      <g transform="translate(-432.5 0)  rotate(0)" />
                    </g>
                    <g />
                  </g>
                  <g transform="translate(1970.5 1304.5)  rotate(-90)">
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <line
                    x1="-2080.5"
                    y1={-16}
                    x2="-2080.5"
                    y2={1737}
                    stroke="black"
                    strokeWidth={3}
                    markerEnd="url(#endarrow)"
                    markerStart="url(#startarrow)"
                    className=""
                  />
                  <rect
                    x="-2135.5"
                    y="850.5"
                    width={200}
                    height={100}
                    fill="white"
                    transform="translate (-20,-30)"
                    opacity="0.6"
                    className=""
                  />
                  <text
                    x="-2135.5"
                    y="-850.5"
                    style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                    className=""
                  >
                    1753
                  </text>
                  <line
                    x1="-1980.5"
                    y1={1837}
                    x2="1980.5"
                    y2={1837}
                    stroke="black"
                    strokeWidth={3}
                    markerEnd="url(#endarrow)"
                    markerStart="url(#startarrow)"
                    className=""
                  />
                  <rect
                    x={-50}
                    y={1837}
                    width={200}
                    height={100}
                    fill="white"
                    transform="translate (-20,-30)"
                    opacity="0.6"
                    className=""
                  />
                  <text
                    x={-50}
                    y={-1817}
                    style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                    className=""
                  >
                    3961
                  </text>
                </g>
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

export default TShape;
