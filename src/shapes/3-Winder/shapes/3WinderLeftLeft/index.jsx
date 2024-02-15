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
import StairsLayout from "./tabs/stairsLayout";
import { markersData, patternsData } from "../../../../utils/data";

const ThreeWinderLeftLeft = () => {
  // states
  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "200vh",
      width: 900,
    },
    svgRiser: {
      color: "mdf",
      positionsBottom: [0, 220, 440, 660, 880],
      positionsLeft: [0, 220, 440, 660, 880, 1100],
      width: -0.2040416047548291,
      height: 0.2540416047548291,
      translateX: 518,
      translateY: 489,
      rotation: 180,
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
        <Grid sx={{ textAlign: "center" }} xs={8}>
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
                {/* right */}
                <g transform="translate(0 0)  rotate(0)">
                  {/* right bottom */}
                  <g transform="translate(-50 50)  rotate(180)">
                    {appState.svgRiser.positionsBottom.map((items, index) => {
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
                      run1
                    </text>
                  </g>
                  {/* right center */}
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-418.5,-16,418.5,-16,418.5,499.41,-374,86,-418.5,86"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      points="-418.5,0,418.5,0,418.5,10,-418.5,10"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      x="-69.2"
                      y={-100}
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
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-374,67.95,418.5,481.36,418.5,907,66.91,907,-419,101.5"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      points="-374,86,418.5,499.41,418.5,510.69,-374,97.28"
                      fill="url(#turn1_tread2)"
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
                      x={-173}
                      y={-280}
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
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-400.31,101.5,85.59,907,-488.5,907,-488.5,70,-419,70"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      points="-419,101.5,66.91,907,55.23,907,-430.68,101.5"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      x={-346}
                      y={-400}
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
                </g>
                {/* left */}
                <g transform="translate(-488.5 488.5)  rotate(90)">
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-418.5,-16,418.5,-16,418.5,499.41,-374,37,-418.5,37"
                      fill={`url(#${appState.svgRiser.color})`}
                      stroke="black"
                      strokeWidth={2}
                    />
                    <polyline
                      points="-418.5,0,418.5,0,418.5,10,-418.5,10"
                      fill={`url(#${appState.svgRiser.color})`}
                      stroke="black"
                      strokeWidth={1}
                    />
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
                      #4
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-374,18.48,418.5,480.88,418.5,858,66.91,858,-419,52.5"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      points="-374,37,418.5,499.41,418.5,510.99,-374,48.58"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      x={-173}
                      y={-280}
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
                    {" "}
                    <polyline
                      points="-400.31,52.5,85.59,858,-442.5,858,-442.5,21,-419,21"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      points="-419,52.5,66.91,858,55.23,858,-430.68,52.5"
                      fill={`url(#${appState.svgRiser.color})`}
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
                      x={-346}
                      y={-400}
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
                  <g transform="translate(-419 20.5)  rotate(0)" />
                  <g transform="translate(-419 20.5)  rotate(0)" />
                </g>
                {/* left bottom */}
                <g transform="translate(-850 50)  rotate(180)">
                  {appState.svgRiser.positionsBottom.map((items, index) => {
                    return (
                      <g key={index} transform={`translate(-381 ${items})  rotate(0)`}>
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
                    run1
                  </text>
                </g>
              </g>
              {/* penceil border */}
              <g>
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)">
                    {" "}
                    <rect
                      x={0}
                      y={-150}
                      width={27}
                      height={1044}
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string1"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 921)  rotate(-90)">
                    {" "}
                    <rect
                      x={0}
                      y="-1333.5"
                      width={27}
                      height={1766}
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string2"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 69.5)  rotate(0)" />
                  <g transform="translate(-419 69.5)  rotate(0)" />
                </g>
                <g transform="translate(-488.5 488.5)  rotate(90)">
                  <g transform="translate(405.5 0)  rotate(0)">
                    {" "}
                    <rect
                      x={0}
                      y="2020.5"
                      width={27}
                      height={0}
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn2_string1"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 872)  rotate(-90)">
                    {" "}
                    <rect
                      x={0}
                      y={-569}
                      width={27}
                      height="1001.5"
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn2_string2"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 20.5)  rotate(0)" />
                  <g transform="translate(-419 20.5)  rotate(0)" />
                </g>
                <g transform="translate(-928 46)  rotate(180)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              {/* dot */}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 921)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 69.5)  rotate(0)">
                    {" "}
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill="url(#redwood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_winderPost"
                      className="balustrade"
                    />
                  </g>
                  <g transform="translate(-419 69.5)  rotate(0)">
                    {" "}
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill="url(#redwood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_winderPost"
                      className="balustrade"
                    />
                  </g>
                </g>
                <g transform="translate(-488.5 488.5)  rotate(90)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 872)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 20.5)  rotate(0)">
                    {" "}
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill="url(#redwood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="nosing_left"
                      className="balustrade"
                    />
                  </g>
                  <g transform="translate(-419 20.5)  rotate(0)">
                    {" "}
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill="url(#redwood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="nosing_left"
                      className="balustrade"
                    />
                  </g>
                </g>
                <g transform="translate(-928 46)  rotate(180)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 921)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 69.5)  rotate(0)" />
                  <g transform="translate(-419 69.5)  rotate(0)" />
                </g>
                <g transform="translate(-488.5 488.5)  rotate(90)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 872)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 20.5)  rotate(0)" />
                  <g transform="translate(-419 20.5)  rotate(0)" />
                </g>
                <g transform="translate(-928 46)  rotate(180)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>{" "}
                <line
                  x1="532.5"
                  y1={-16}
                  x2="532.5"
                  y2={921}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="477.5"
                  y="442.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="477.5"
                  y="-442.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  937
                </text>{" "}
                <line
                  x1="-1360.5"
                  y1={1021}
                  x2="432.5"
                  y2={1021}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={-514}
                  y={1021}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={-514}
                  y={-1001}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1793
                </text>{" "}
                <line
                  x1="-1490.5"
                  y1={36}
                  x2="-1490.5"
                  y2={921}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-1545.5"
                  y="468.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-1545.5"
                  y="-468.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  885
                </text>{" "}
              </g>
            </g>
          </svg>
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
    </div>
  );
};

export default ThreeWinderLeftLeft;
