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

const ThreeWinderLeftRight = () => {
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
      positionsBottom: [0, 220, 440],
      positionsLeft: [0, 220],
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
                {/* bottom */}

                <g transform="translate(-30 190)  rotate(180)">
                  {appState.svgRiser.positionsBottom.map((items, index) => {
                    return (
                      <g key={index} transform={`translate(-461 ${items})  rotate(0)`}>
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
                {/* right bottom */}
                <g transform="translate(0 220)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-418.5,-16,418.5,-16,418.5,499.41,-374,40,-418.5,40"
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
                      #2
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-374,21.51,418.5,480.91,418.5,861,66.91,861,-419,55.5"
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
                      points="-374,40,418.5,499.41,418.5,510.97,-374,51.56"
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
                      #3
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-400.31,55.5,85.59,861,-442.5,861,-442.5,24,-419,24"
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
                      points="-419,55.5,66.91,861,55.23,861,-430.68,55.5"
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
                      #4
                    </text>
                  </g>
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-442.5 662.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={236}
                        fill={`url(#${appState.svgRiser.color})`}
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run2_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill={`url(#${appState.svgRiser.color})`}
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run2_tread1"
                        className=""
                      />{" "}
                      <text
                        x="388.5"
                        y={-130}
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
                    run2
                  </text>
                </g>
                {/* center */}
                <g transform="translate(-662.5 662.5)  rotate(90)">
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="418.5,-16,-418.5,-16,-418.5,499.41,374,40,418.5,40"
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
                      #6
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="374,21.51,-418.5,480.91,-418.5,861,-66.91,861,419,55.5"
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
                      points="374,40,-418.5,499.41,-418.5,510.97,374,51.56"
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
                      x={123}
                      y={-280}
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
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="400.31,55.5,-85.59,861,442.5,861,442.5,24,419,24"
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
                      points="419,55.5,-66.91,861,-55.23,861,430.68,55.5"
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
                      x={296}
                      y={-400}
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
                  <g transform="translate(419 23.5)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                </g>

                <g transform="translate(-942.5 1064.5)  rotate(0)">
                  <g>
                    {appState.svgRiser.positionsLeft.map((items, index) => {
                      return (
                        <g key={index} transform={`translate(-570 ${items})  rotate(0)`}>
                          <rect
                            x={0}
                            y={-16}
                            width={820}
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
              </g>
              {/* pencil borders */}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-120}
                        width={27}
                        height="363.5"
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
                        height="318.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(0 220)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)">
                    {" "}
                    <rect
                      x={0}
                      y="23.5"
                      width={27}
                      height="824.5"
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string1"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 875)  rotate(-90)">
                    {" "}
                    <rect
                      x={0}
                      y={-419}
                      width={27}
                      height="851.5"
                      fill="url(#whitewood)"
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string2"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-442.5 662.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="-23.5"
                        width={27}
                        height={222}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run2_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-432.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="21.5"
                        width={27}
                        height={222}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run2_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(-662.5 662.5)  rotate(90)">
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
                <g transform="translate(-1105 1105)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="21.5"
                        width={27}
                        height="318.5"
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
                        y="-23.5"
                        width={27}
                        height="363.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(-1105 1325)  rotate(0)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              {/* dots */}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(0 220)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)">
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
                  <g transform="translate(-419 23.5)  rotate(0)">
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
                <g transform="translate(-442.5 662.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-662.5 662.5)  rotate(90)">
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
                <g transform="translate(-1105 1105)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1105 1325)  rotate(0)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              {/* markers */}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(0 220)  rotate(0)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-442.5 662.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-662.5 662.5)  rotate(90)">
                  <g transform="translate(-432.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                  <g transform="translate(419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-1105 1105)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1105 1325)  rotate(0)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>{" "}
                <line
                  x1="532.5"
                  y1={-16}
                  x2="532.5"
                  y2={1095}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="477.5"
                  y="529.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="477.5"
                  y="-529.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1111
                </text>{" "}
                <line
                  x1="-1637.5"
                  y1={-16}
                  x2="-1637.5"
                  y2={1335}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-1692.5"
                  y="649.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-1692.5"
                  y="-649.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1351
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

export default ThreeWinderLeftRight;
