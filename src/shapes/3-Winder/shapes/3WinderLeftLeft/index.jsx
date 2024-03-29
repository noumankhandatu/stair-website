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
import {
  selectDefaultValueTwo,
  selectedDefaultValue,
} from "../../../../toolkit/slices/singleFeatures";
import { useSelector } from "react-redux";
import { QUARTER_LANDING } from "../../../../utils/enum";
import { GlobalSliceData } from "../../../../toolkit/globalSlice";

const ThreeWinderLeftLeft = () => {
  // states
  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  const firstSelectDefaultValueRedux = useSelector(selectedDefaultValue);
  const secondSelectDefaultValueRedux = useSelector(selectDefaultValueTwo);

  const { threadTurnOne, threadTurnTwo, threadTurnThree, individualGoing, widthRun1, widthRun2 } =
    useSelector(GlobalSliceData);
  console.log(individualGoing, "individualGoingindividualGoing");
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

  // The Width Runs Manipulation
  const compressWidthRunsOne = -0.2 + 0.0002 * widthRun1 + 0.23;
  const compressWidthRunsTwo = -0.2 + 0.0002 * widthRun2 + 0.23;

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
          <svg style={{ position: "relative", left: 200 }} width={"100%"} height={"100%"}>
            <defs>
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
                id="turn1_tread2"
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
                id="turn1_tread2"
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
                id="turn1_tread3"
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
                id="turn1_tread3"
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
            <g
              transform={`translate (392,524) rotate(180) scale(-${compressWidthRunsOne}, ${compressWidthRunsTwo})`}
            >
              {" "}
              <g>
                <g transform={`translate(${threadTurnTwo.length * 220} 1080)  rotate(180)`}>
                  {/* right bottom */}
                  <g transform="translate(220 0)  rotate(0)">
                    {threadTurnOne.map((items, index) => {
                      const id = threadTurnOne.length - index; // Calculate the reverse index
                      return (
                        <g key={index} transform={`translate(-413.5 ${items})  rotate(0)`}>
                          <rect
                            x={0}
                            y={-16}
                            width={827}
                            height={individualGoing}
                            fill="url(#mdf)"
                            style={{ stroke: "black", strokeWidth: 2 }}
                            id="run1_tread1"
                            className=""
                          />
                          <rect
                            x={0}
                            y={0}
                            width={827}
                            height={10}
                            fill="none"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_tread1"
                            className=""
                          />
                          <text
                            x="388.5"
                            y={131}
                            style={{
                              fontSize: 55,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              color: "black",
                            }}
                            transform="translate (800,0) rotate(0) scale(-1,1)"
                          >
                            #{id}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                  <g />{" "}
                </g>
                {/* right top center */}
                <g transform="translate(-220 0)  rotate(0)">
                  <g transform={`translate(${threadTurnTwo.length * 220} 888)  rotate(0)`}>
                    <g transform="translate(0 0)  rotate(0)">
                      {" "}
                      <polyline
                        points="-418.5,-16,418.5,-16,418.5,499.41,-374,40,-418.5,40"
                        fill="url(#turn1_tread1)"
                        stroke={"black"}
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
                        fill="url(#turn1_tread1)"
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
                        #{threadTurnOne.length + 1}
                      </text>
                    </g>
                    <g transform="translate(0 0)  rotate(0)">
                      {" "}
                      <polyline
                        points="-374,21.51,418.5,480.91,418.5,861,66.91,861,-419,55.5"
                        fill="url(#turn1_tread2)"
                        stroke={
                          firstSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
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
                        points="-374,40,418.5,499.41,418.5,510.97,-374,51.56"
                        fill="url(#turn1_tread2)"
                        stroke={
                          firstSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
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
                        x={-173}
                        y={-280}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #{threadTurnOne.length + 2}
                      </text>
                    </g>
                    <g transform="translate(0 0)  rotate(0)">
                      {" "}
                      <polyline
                        points="-400.31,55.5,85.59,861,-442.5,861,-442.5,24,-419,24"
                        fill="url(#turn1_tread3)"
                        stroke={
                          firstSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
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
                        points="-419,55.5,66.91,861,55.23,861,-430.68,55.5"
                        fill="url(#turn1_tread3)"
                        stroke={
                          firstSelectDefaultValueRedux === QUARTER_LANDING ? "transparent" : "black"
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
                        x={-346}
                        y={-400}
                        style={{
                          fontSize: 55,
                          fontFamily: "Arial, Helvetica, sans-serif",
                          color: "black",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                      >
                        #{threadTurnOne.length + 3}
                      </text>
                    </g>
                  </g>
                </g>
                {/* thread two -center */}
                <g transform="translate(1080 1330.5)  rotate(90)">
                  <g>
                    {threadTurnTwo.map((items, index) => {
                      const id = threadTurnOne.length - index;
                      return (
                        <g key={id} transform={`translate(-413.5 ${items})  rotate(0)`}>
                          {" "}
                          <rect
                            x={0}
                            y={-16}
                            width={827}
                            height={individualGoing}
                            fill="url(#mdf)"
                            style={{ stroke: "black", strokeWidth: 2 }}
                            id="run2_tread1"
                            className=""
                          />{" "}
                          <rect
                            x={0}
                            y={0}
                            width={827}
                            height={10}
                            fill="none"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run2_tread1"
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
                            #{threadTurnOne.length + index + 4}
                          </text>
                        </g>
                      );
                    })}
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
                {/* left top center */}
                <g transform="translate(-664.5 1330.5)  rotate(90)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-418.5,-16,418.5,-16,418.5,499.41,-374,40,-418.5,40"
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
                      points="-418.5,0,418.5,0,418.5,10,-418.5,10"
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
                      x="-69.2"
                      y={-100}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #{threadTurnOne.length + 5}
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-374,21.51,418.5,480.91,418.5,861,66.91,861,-419,55.5"
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
                      points="-374,40,418.5,499.41,418.5,510.97,-374,51.56"
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
                      x={-173}
                      y={-280}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #{threadTurnOne.length + 6}
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-400.31,55.5,85.59,861,-442.5,861,-442.5,24,-419,24"
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
                      points="-419,55.5,66.91,861,55.23,861,-430.68,55.5"
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
                      x={-346}
                      y={-400}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #{threadTurnOne.length + 7}
                    </text>
                  </g>
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                {/* left - bottom */}
                <g transform={"translate(-1100 1110)  rotate(180)"}>
                  {threadTurnThree.map((items, index) => {
                    const number = threadTurnOne.length + threadTurnTwo.length + 7 + index;
                    return (
                      <g key={index}>
                        <g transform={`translate(-413.5 ${items})  rotate(0)`}>
                          <g>
                            <rect
                              transform={`translate(0 -120 )   rotate(360)`}
                              x={0}
                              y={130}
                              width={827}
                              height={individualGoing}
                              fill="url(#mdf)"
                              style={{ stroke: "black", strokeWidth: 2 }}
                              id="nosing_tread"
                              className=""
                            />{" "}
                            <rect
                              x={0}
                              y={16}
                              width={827}
                              height={10}
                              fill="none"
                              style={{ stroke: "black", strokeWidth: 1 }}
                              id="nosing_tread"
                              className=""
                            />{" "}
                            <text
                              x="388.5"
                              y={-135}
                              style={{
                                fontSize: 55,
                                fontFamily: "Arial, Helvetica, sans-serif",
                                color: "black",
                              }}
                              transform="translate (840,300) rotate(0) scale(-1,1)"
                            >
                              #{number}
                            </text>
                          </g>
                        </g>
                      </g>
                    );
                  })}
                </g>
                <g />
              </g>
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                {/* right bottom borders */}
                <g transform="translate(-220 0)  rotate(0)">
                  <g transform={`translate(${threadTurnTwo.length * 220} 0)  rotate(0)`}>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-120}
                        width={27}
                        height="1031.5"
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
                        height="986.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_leftString"
                        className=""
                      />
                    </g>
                    <g />
                  </g>
                </g>
                {/* right top bottom border */}
                <g transform="translate(-220 0)  rotate(0)">
                  <g transform={`translate(${threadTurnTwo.length * 220} 888)  rotate(0)`}>
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
                    <g transform="translate(0 875)  rotate(90)">
                      {" "}
                      <rect
                        x={-30}
                        y={-419}
                        width={27}
                        height={threadTurnTwo.length * 420}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="turn1_string2"
                        className=""
                      />
                    </g>
                  </g>
                </g>
                <g transform="translate(-442.5 1330.5)  rotate(90)">
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y="-23.5"
                        width={27}
                        height={269}
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
                        height={179}
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run2_leftString"
                        className=""
                      />
                    </g>
                  </g>
                </g>
                <g transform="translate(-664.5 1330.5)  rotate(90)">
                  <g transform="translate(405.5 0)  rotate(0)">
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
                      y={-419}
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
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-1107 888)  rotate(180)">
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
                        height="365.5"
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
                        y="21.5"
                        width={27}
                        height="320.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
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
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-442.5 1330.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-664.5 1330.5)  rotate(90)">
                  <g transform="translate(405.5 0)  rotate(0)" />
                  <g transform="translate(0 875)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                  <g transform="translate(-419 23.5)  rotate(0)" />
                </g>
                <g transform="translate(-1107 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1107 666)  rotate(180)">
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
                <g transform="translate(-442.5 1330.5)  rotate(90)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-664.5 1330.5)  rotate(90)">
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
                      id="turn2_winderPost"
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
                      id="turn2_winderPost"
                      className="balustrade"
                    />
                  </g>
                </g>
                <g transform="translate(-1107 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(405.5 0)  rotate(0)" />
                    <g transform="translate(-432.5 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(-1107 666)  rotate(180)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>
              </g>
              <g>
                <g transform={`translate(${threadTurnTwo.length * 220} 0)`}>
                  <line
                    x1="532.5"
                    y1={-16}
                    x2="532.5"
                    y2={1763}
                    stroke="black"
                    strokeWidth={3}
                    markerEnd="url(#endarrow)"
                    markerStart="url(#startarrow)"
                    className=""
                  />{" "}
                  <rect
                    x="477.5"
                    y="863.5"
                    width={200}
                    height={100}
                    fill="white"
                    transform="translate (-20,-30)"
                    opacity="0.6"
                    className=""
                  />
                  <text
                    x="477.5"
                    y="-863.5"
                    style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                    className=""
                  >
                    1779
                  </text>{" "}
                </g>
                <line
                  x1="-1539.5"
                  y1={1863}
                  x2="432.5"
                  y2={1863}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-603.5"
                  y={1863}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-603.5"
                  y={-1843}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1972
                </text>{" "}
                <line
                  x1="-1669.5"
                  y1={656}
                  x2="-1669.5"
                  y2={1763}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-1724.5"
                  y="1199.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-1724.5"
                  y="-1199.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1107
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
        <Grid sx={{ zIndex: 99999 }} xs={2}>
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
