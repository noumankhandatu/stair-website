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
import {
  selectDefaultValueTwo,
  selectedDefaultValue,
} from "../../../../toolkit/slices/singleFeatures";
import { useSelector } from "react-redux";
import { QUARTER_LANDING } from "../../../../utils/enum";

const ThreeWinderRightRight = () => {
  // states
  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  const firstSelectDefaultValueRedux = useSelector(selectedDefaultValue);
  const secondSelectDefaultValueRedux = useSelector(selectDefaultValueTwo);

  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "100",
      width: "100%",
    },
    svgRiser: {
      // risers
      positions: [220, 440, 660, 880],
      leftBottomRisers: [220, 440, 660, 880],
      centerRightRisers: [220, 440, 660, 880],
      rightBottomRisers: [220, 440],
      // layout
      width: -0.25,
      height: 0.25,
      translateY: 500,
      color: "mdf",
    },
    handRails: {
      height: 1760,
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
          {showStairsLayout && <StairsLayout setAppState={setAppState} appState={appState} />}
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
          <div className="b-overlay-wrap position-relative" id="svgWrap">
            <div>
              <svg width={1000} height={"200vh"}>
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
                  </pattern>
                  <pattern id="oak" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                    <image
                      style={{ MozUserSelect: "text" }}
                      href="https://cdn.stairbox.com/assets/stairbuilder/textures/oak.jpg"
                      width="1000px"
                      height="1000px"
                      preserveAspectRatio="none"
                      transform="translate (0,0) rotate(0)"
                    />
                  </pattern>
                  <pattern
                    id="redwood"
                    patternUnits="userSpaceOnUse"
                    width="1000px"
                    height="1000px"
                  >
                    <image
                      style={{ MozUserSelect: "text" }}
                      href="https://cdn.stairbox.com/assets/stairbuilder/textures/pine.jpg"
                      width="1000px"
                      height="1000px"
                      preserveAspectRatio="none"
                      transform="translate (0,0) rotate(0)"
                    />
                  </pattern>{" "}
                  <pattern
                    id="whitewood"
                    patternUnits="userSpaceOnUse"
                    width="1000px"
                    height="1000px"
                  >
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
                </defs>
                <g
                  transform={`translate (319 ,${appState.svgRiser.translateY}) rotate(180) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
                >
                  {/* risers */}
                  <g>
                    {/* left bottom */}
                    <g transform="translate(0 0)  rotate(180)">
                      {appState.svgRiser.leftBottomRisers.map((items, index) => {
                        const reversedIndex = appState.svgRiser.leftBottomRisers.length - index - 1;

                        return (
                          <g key={index} transform={`translate(413 ${items})  rotate(180)`}>
                            <rect
                              x={0}
                              y={856}
                              width={827}
                              height={290}
                              fill="url(#mdf)"
                              style={{ stroke: "black", strokeWidth: 2 }}
                              id="run1_tread1"
                              className=""
                            />{" "}
                            <text
                              x="388.5"
                              y={-1000}
                              style={{
                                fontSize: 55,
                                fontFamily: "Arial, Helvetica, sans-serif",
                                color: "black",
                              }}
                              transform="translate (0,0) rotate(180) scale(-1,1)"
                            >
                              #{reversedIndex + 1}
                            </text>
                          </g>
                        );
                      })}
                      <g />
                    </g>
                    {/* left center  dont touch*/}
                    <g transform="translate(0 888)  rotate(0)">
                      <g transform="translate(0 0)  rotate(0)">
                        {" "}
                        <polyline
                          points="418.5,-16,-418.5,-16,-418.5,499.41,374,40,418.5,40"
                          fill="url(#turn1_tread1)"
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
                          fill="url(#turn1_tread1)"
                          stroke={
                            firstSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          x="19.2"
                          y={-100}
                          style={{
                            fontSize: 55,
                            fontFamily: "Arial, Helvetica, sans-serif",
                            color: "black",
                          }}
                          transform="translate (0,0) rotate(180) scale(-1,1)"
                        >
                          #{appState.svgRiser.leftBottomRisers.length + 1}
                        </text>
                      </g>
                      <g transform="translate(0 0)  rotate(0)">
                        {" "}
                        <polyline
                          points="374,21.51,-418.5,480.91,-418.5,861,-66.91,861,419,55.5"
                          fill="url(#turn1_tread2)"
                          stroke={
                            firstSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          fill="url(#turn1_tread2)"
                          stroke={
                            firstSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          #{appState.svgRiser.leftBottomRisers.length + 2}
                        </text>
                      </g>
                      <g transform="translate(0 0)  rotate(0)">
                        {" "}
                        <polyline
                          points="400.31,55.5,-85.59,861,442.5,861,442.5,24,419,24"
                          fill="url(#turn1_tread3)"
                          stroke={
                            firstSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          fill="url(#turn1_tread3)"
                          stroke={
                            firstSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          #{appState.svgRiser.leftBottomRisers.length + 3}
                        </text>
                      </g>
                      <g transform="translate(419 23.5)  rotate(0)" />
                      <g transform="translate(419 23.5)  rotate(0)" />
                    </g>
                    {/* center-center */}
                    <g transform="translate(442.5 1330.5)  rotate(-90)">
                      {appState.svgRiser.centerRightRisers.map((items, index) => {
                        return (
                          <g key={index}>
                            <g>
                              <g transform={`translate(-413.5 ${items})  rotate(0)`}>
                                {" "}
                                <rect
                                  x={0}
                                  y={-276}
                                  width={827}
                                  height={278}
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
                                  y={131}
                                  style={{
                                    fontSize: 55,
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    color: "black",
                                  }}
                                  transform="translate (0,0) rotate(180) scale(-1,1)"
                                >
                                  #{appState.svgRiser.leftBottomRisers.length + 4 + index}
                                </text>
                              </g>
                            </g>
                            <g />
                          </g>
                        );
                      })}
                    </g>

                    {/* right center  */}
                    <g
                      transform={`translate(${
                        appState.svgRiser.centerRightRisers.length * 220 + 440
                      } 1330.5)  rotate(-90)`}
                    >
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
                          #{appState.svgRiser.leftBottomRisers.length + 9}
                        </text>
                      </g>
                      <g transform="translate(0 0)  rotate(0)">
                        {" "}
                        <polyline
                          points="374,21.51,-418.5,480.91,-418.5,861,-66.91,861,419,55.5"
                          fill="url(#turn2_tread2)"
                          stroke={
                            secondSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                            secondSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          #{appState.svgRiser.leftBottomRisers.length + 10}
                        </text>
                      </g>
                      <g transform="translate(0 0)  rotate(0)">
                        {" "}
                        <polyline
                          points="400.31,55.5,-85.59,861,442.5,861,442.5,24,419,24"
                          fill="url(#turn2_tread3)"
                          stroke={
                            secondSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                            secondSelectDefaultValueRedux === QUARTER_LANDING
                              ? "transparent"
                              : "black"
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
                          #{appState.svgRiser.leftBottomRisers.length + 11}
                        </text>
                      </g>
                      <g transform="translate(419 23.5)  rotate(0)" />
                      <g transform="translate(419 23.5)  rotate(0)" />
                    </g>
                    {/* right bottom */}
                    <g
                      transform={`translate(${
                        appState.svgRiser.centerRightRisers.length * 220 + 880
                      } 888)  rotate(-180)`}
                    >
                      <g>
                        {appState.svgRiser.rightBottomRisers.map((items, index) => {
                          return (
                            <g key={index} transform={`translate(-413.5 ${items})  rotate(0)`}>
                              <rect
                                x={0}
                                y={-274}
                                width={827}
                                height={278}
                                fill="url(#mdf)"
                                style={{ stroke: "black", strokeWidth: 2 }}
                                id="run3_tread1"
                                className=""
                              />
                              <text
                                x="-450"
                                y={-131}
                                style={{
                                  fontSize: 55,
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  color: "black",
                                }}
                                transform="translate (0,0) rotate(360) scale(-1,1)"
                              >
                                #{appState.svgRiser.leftBottomRisers.length + 12 + index}
                              </text>
                            </g>
                          );
                        })}
                      </g>
                      <g />
                    </g>
                    {/* half riser */}
                    {/* <g
                      transform={`translate(${
                        appState.svgRiser.centerRightRisers.length * 220 + 880
                      } 666)  rotate(-180)`}
                    >
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
                    </g> */}
                  </g>
                  {/* checkposts */}
                  <g>
                    {/* left tower */}
                    <g transform="translate(419 903.5)  rotate(0)">
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
                    {/* right tower */}
                    <g
                      transform={`translate(${
                        appState.svgRiser.centerRightRisers.length * 220 + 460
                      } 903.5)  rotate(0)`}
                    >
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
                  {/* borders */}
                  <g>
                    <g transform="translate(0 0)  rotate(0)">
                      <g>
                        {/* left right arrow */}
                        <g transform="translate(405.5 0)  rotate(180)">
                          {" "}
                          <rect
                            x={-30}
                            y={-860}
                            width={27}
                            height={230 * appState.svgRiser.leftBottomRisers.length}
                            fill="url(#whitewood)"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_rightString"
                            className=""
                          />
                        </g>
                        {/* right left arrow */}
                        <g transform="translate(405.5 0)  rotate(180)">
                          {/* {" "}right left arrow */}
                          <rect
                            x={-960}
                            y={-860}
                            width={27}
                            height={240 * appState.svgRiser.rightBottomRisers.length}
                            fill="url(#whitewood)"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_rightString"
                            className=""
                          />
                        </g>
                        {/* left bottom rrow */}
                        <g transform="translate(-432.5 0)  rotate(180)">
                          {" "}
                          <rect
                            x={-20}
                            y={-1760}
                            width={27}
                            height={230 * appState.svgRiser.leftBottomRisers.length}
                            fill="url(#whitewood)"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_rightString"
                            className=""
                          />
                          <rect
                            x={-20}
                            y={-860}
                            width={27}
                            height={230 * appState.svgRiser.leftBottomRisers.length}
                            fill="url(#whitewood)"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_rightString"
                            className=""
                          />
                        </g>
                        {/* right bottom arrow */}
                        <g transform="translate(-432.5 0)  rotate(180)">
                          {" "}
                          <rect
                            x={-20}
                            y={-1760}
                            width={27}
                            height={230 * appState.svgRiser.leftBottomRisers.length}
                            fill="url(#whitewood)"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_rightString"
                            className=""
                          />
                          <rect
                            x={-2630}
                            y={-920}
                            width={27}
                            height={260 * appState.svgRiser.rightBottomRisers.length}
                            fill="url(#whitewood)"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_rightString"
                            className=""
                          />
                        </g>
                      </g>
                      <g />
                    </g>
                    {/* top arrow */}
                    <g transform="translate(0 888)  rotate(0)">
                      <g transform="translate(0 875)  rotate(-90)">
                        {" "}
                        <rect
                          x={0}
                          y="-432.5"
                          width={27}
                          height={appState.svgRiser.centerRightRisers.length * 220 + 1740}
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="turn1_string2"
                          className=""
                        />
                      </g>
                    </g>
                    {/* right center arrow */}
                    <g
                      transform={`translate(${
                        appState.svgRiser.centerRightRisers.length * 220
                      } 1330.5)  rotate(-90)`}
                    >
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
                          x={-appState.svgRiser.centerRightRisers.length - 440}
                          y="-432.5"
                          width={27}
                          height="851.5"
                          fill="url(#whitewood)"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="turn2_string2"
                          className=""
                        />
                      </g>
                    </g>
                  </g>
                  {/* arrows */}
                  <g>
                    <g transform="translate(0 0)  rotate(0)" />
                    {/* left */}
                    <line
                      x1="-582.5"
                      y1={-16}
                      x2="-582.5"
                      y2={1763}
                      stroke="black"
                      strokeWidth={3}
                      markerEnd="url(#endarrow)"
                      markerStart="url(#startarrow)"
                      className=""
                    />{" "}
                    <rect
                      x="-637.5"
                      y="863.5"
                      width={200}
                      height={100}
                      fill="white"
                      transform="translate (-20,-30)"
                      opacity="0.6"
                      className=""
                    />
                    <text
                      x="-637.5"
                      y="-863.5"
                      style={{
                        fontSize: 75,
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                      className=""
                    >
                      1779
                    </text>{" "}
                    <line
                      x1="-432.5"
                      y1={1863}
                      x2="1539.5"
                      y2={1863}
                      stroke="black"
                      strokeWidth={3}
                      markerEnd="url(#endarrow)"
                      markerStart="url(#startarrow)"
                      className=""
                    />{" "}
                    {/* top */}
                    <rect
                      x="503.5"
                      y={1863}
                      width={200}
                      height={100}
                      fill="white"
                      transform="translate (-20,-30)"
                      opacity="0.6"
                      className=""
                    />
                    <text
                      x="503.5"
                      y={-1843}
                      style={{
                        fontSize: 75,
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                      className=""
                    >
                      1972
                    </text>{" "}
                    <line
                      x1={appState.svgRiser.centerRightRisers.length * 220 + 1680}
                      y1={656}
                      x2={appState.svgRiser.centerRightRisers.length * 220 + 1680}
                      y2={1763}
                      stroke="black"
                      strokeWidth={3}
                      markerEnd="url(#endarrow)"
                      markerStart="url(#startarrow)"
                      className=""
                    />{" "}
                    <rect
                      x={appState.svgRiser.centerRightRisers.length * 220 + 1480}
                      y="1199.5"
                      width={200}
                      height={100}
                      fill="white"
                      transform="translate (-20,-30)"
                      opacity="0.6"
                      className=""
                    />
                    <text
                      x={appState.svgRiser.centerRightRisers.length * 220 + 1480}
                      y="-1199.5"
                      style={{
                        fontSize: 75,
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                      className=""
                    >
                      1107
                    </text>{" "}
                    <g>
                      <line
                        x1="-432.5"
                        y1={-100 * appState.svgRiser.leftBottomRisers.length}
                        x2="432.5"
                        y2={-100 * appState.svgRiser.leftBottomRisers.length}
                        stroke="black"
                        strokeWidth={3}
                        markerEnd="url(#endarrow)"
                        markerStart="url(#startarrow)"
                        className=""
                      />{" "}
                      <text
                        x={-50}
                        y={100 * appState.svgRiser.leftBottomRisers.length}
                        style={{
                          fontSize: 75,
                          fontFamily: "Arial, Helvetica, sans-serif",
                        }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                        className=""
                      >
                        865
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
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

export default ThreeWinderRightRight;
