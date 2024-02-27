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
import { useSelector } from "react-redux";
import { markersData, patternsData } from "../../utils/data";
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
import { leftFeatureStep, rightFeatureStep } from "../../toolkit/slices/featureSteps";
import { selectDivisble } from "../../toolkit/slices/singleFeatures";

const TShape = () => {
  const widhtArrow = useSelector((state) => state?.stairHeightWidthSlice?.width);
  const heightArrow = useSelector((state) => state?.stairHeightWidthSlice?.height);
  const rightArrow = useSelector((state) => state?.stairHeightWidthSlice?.rightArrow);
  const reduxLeftStep = useSelector(leftFeatureStep);
  const reduxRightStep = useSelector(rightFeatureStep);
  const reduxSelectDivisble = useSelector(selectDivisble);

  // states
  const [appState, setAppState] = useState({
    svgRiser: {
      color: "mdf",
      allRisers: [220, 440, 660, 880, 1100, 1320],
      positionsLeft: [220, 440, 660, 880, 1100, 1320, 1540],
      positionsRight: [220, 440, 660, 880, 1100, 1320, 1540],
      positionsBottom: [220, 440, 660, 880],

      translateY: 385,
      translateX: 540,
      height: 0.13,
      width: -0.13,
      ceilingHeight: 236,
    },
    handRails: {
      color: "mdf",
      borderLeft: 1670,
      borderBottom: 1000,
    },
  });
  // fns
  const [showStairsLayout, setshowStairsLayout] = useState(true);
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
          )}
        </Grid>
        <Grid sx={{ textAlign: "center" }} xs={9}>
          <div>
            <svg width={"100wh"} height={"100vh"}>
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
                    <polygon points="0 0, 10 3.5, 0 7" fill={`url(#${appState.handRails.color})`} />
                  </marker>
                ))}
              </defs>
              <g
                transform={`translate (${appState.svgRiser.translateX},${appState.svgRiser.translateY}) rotate(180) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
              >
                <g>
                  {/* bottom  */}
                  <g transform={`translate(0 1130)  rotate(180)`}>
                    {appState.svgRiser.positionsBottom.map((items, index) => {
                      const reversedIndex = appState.svgRiser.positionsBottom.length - index - 1;
                      return (
                        <g key={index} transform={`translate(-421 ${items})  rotate(0)`}>
                          <rect
                            x={0}
                            y={-16}
                            width={852}
                            height={290}
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
                            transform="translate (940,270) rotate(360) scale(-1,1)"
                          >
                            #{reversedIndex + 1}
                          </text>
                          {reversedIndex === 1 && (
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
                                    #{reversedIndex}
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
                                  <g transform="translate(872.5 540)  rotate(180)">
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
                                  <g transform="translate(854.5 540)  rotate(180)">
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
                                  <g transform="translate(862.5 540)  rotate(180)">
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
                        height={290}
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
                        #{appState.svgRiser.positionsBottom.length + 1}
                      </text>
                    </g>
                    <g transform="translate(-419 -2.5)  rotate(0)" />
                    <g transform="translate(419 -2.5)  rotate(0)" />
                  </g>
                  {/* left */}
                  <g transform="translate(-118.5 1004.5)  rotate(90)">
                    {appState.svgRiser.positionsLeft.map((items, index) => {
                      const isLastIndex = index === appState.svgRiser.positionsLeft.length - 1;

                      return (
                        <g key={index} transform={`translate(-140 ${items})  rotate(0)`}>
                          <rect
                            x={0}
                            y={-18}
                            width={862}
                            height={290}
                            fill={`url(#${appState.svgRiser.color})`}
                            style={{ stroke: "black", strokeWidth: 2 }}
                            id="run1_tread1"
                            className=""
                          />
                          <text
                            x={406}
                            y={-100}
                            style={{
                              fontSize: 55,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              color: "black",
                            }}
                            transform="translate (0,0) rotate(180) scale(-1,1)"
                          >
                            # {appState.svgRiser.positionsBottom.length === 0 && index + 4}
                            {appState.svgRiser.positionsBottom.length > 0 &&
                              index + appState.svgRiser.positionsBottom.length + 2}
                          </text>
                          {isLastIndex && reduxSelectDivisble && (
                            <g transform="translate(10.5 241)  rotate(0)">
                              <rect
                                x={0}
                                y={-16}
                                width={842}
                                height={86}
                                fill={`url(#${appState.svgRiser.color})`}
                                style={{ stroke: "black", strokeWidth: 2 }}
                                id="nosing_tread"
                                className=""
                              />{" "}
                              <text
                                x="408"
                                y={-55}
                                style={{
                                  fontSize: 55,
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  color: "black",
                                }}
                                transform="translate (0,0) rotate(180) scale(-1,1)"
                              >
                                #{index + 7}
                              </text>
                            </g>
                          )}
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
                      transform="translate (250,0) rotate(180) scale(-1,1)"
                    >
                      run2
                    </text>
                  </g>
                  {/* right */}
                  <g transform="translate(160 1304.5)  rotate(-90)">
                    {appState.svgRiser.positionsRight.map((items, index) => {
                      const isLastIndex = index === appState.svgRiser.positionsRight.length - 1;

                      return (
                        <g key={index} transform={`translate(-420 ${items})  rotate(0)`}>
                          <rect
                            x={0}
                            y={-16}
                            width={842}
                            height={290}
                            fill={`url(#${appState.svgRiser.color})`}
                            style={{ stroke: "black", strokeWidth: 2 }}
                            id="run1_tread1"
                            className=""
                          />

                          <rect
                            x={0}
                            y={0}
                            width={852}
                            height={10}
                            fill="none"
                            style={{ stroke: "black", strokeWidth: 1 }}
                            id="run1_tread1"
                            className=""
                          />
                          <text
                            x={406}
                            y={-100}
                            style={{
                              fontSize: 55,
                              fontFamily: "Arial, Helvetica, sans-serif",
                              color: "black",
                            }}
                            transform="translate (0,0) rotate(180) scale(-1,1)"
                          >
                            # {appState.svgRiser.positionsBottom.length === 0 && index + 4}
                            {appState.svgRiser.positionsBottom.length > 0 &&
                              index + appState.svgRiser.positionsBottom.length + 2}
                          </text>
                          {isLastIndex && reduxSelectDivisble && (
                            <g transform="translate(10.5 241)  rotate(0)">
                              <rect
                                x={0}
                                y={-16}
                                width={842}
                                height={86}
                                fill={`url(#${appState.svgRiser.color})`}
                                style={{ stroke: "black", strokeWidth: 2 }}
                                id="nosing_tread"
                                className=""
                              />{" "}
                              <text
                                x="408"
                                y={-55}
                                style={{
                                  fontSize: 55,
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  color: "black",
                                }}
                                transform="translate (0,0) rotate(180) scale(-1,1)"
                              >
                                #{index + 7}
                              </text>
                            </g>
                          )}
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
                      transform="translate (-40,0) rotate(180) scale(-1,1)"
                    >
                      run3
                    </text>
                  </g>
                </g>
                {/* pencil border */}
                <g>
                  {/* bottom border */}
                  <g transform="translate(30 163)  rotate(0)">
                    <g transform="translate(405.5 0)  rotate(180)">
                      <rect
                        x={0}
                        y={-720}
                        width={27}
                        height={appState.handRails.borderBottom}
                        fill={`url(#${appState.handRails.color})`}
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-432.5 0)  rotate(180)">
                      <rect
                        x={0}
                        y={-720}
                        width={27}
                        height={appState.handRails.borderBottom}
                        fill={`url(#${appState.handRails.color})`}
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_leftString"
                        className=""
                      />
                    </g>
                    <g />
                  </g>
                  {/* center top border */}
                  <g transform="translate(0 888)  rotate(0)">
                    <g transform="translate(0 849)  rotate(-90)">
                      <rect
                        x={0}
                        y="-416.5"
                        width={27}
                        height={833}
                        fill={`url(#${appState.handRails.color})`}
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="turn1_string1"
                        className=""
                      />
                    </g>
                    <g transform="translate(0 0)  rotate(0)" />
                    <g transform="translate(-419 -2.5)  rotate(0)" />
                    <g transform="translate(419 -2.5)  rotate(0)" />
                  </g>
                  {/* left borders */}
                  <g transform="translate(-416.5 1304.5)  rotate(90)">
                    <g>
                      <g transform="translate(405.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={0}
                          width={27}
                          height={appState.handRails.borderLeft}
                          fill={`url(#${appState.handRails.color})`}
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
                          height={appState.handRails.borderLeft}
                          fill={`url(#${appState.handRails.color})`}
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_leftString"
                          className=""
                        />
                      </g>
                    </g>
                    <g />
                  </g>
                  {/* right borders */}
                  <g transform="translate(416.5 1304.5)  rotate(-90)">
                    <g>
                      <g transform="translate(405.5 0)  rotate(0)">
                        <g transform="translate(0, -832.5)  rotate(0)">
                          {" "}
                          <rect
                            x="-45"
                            y="-45"
                            width="90"
                            height="90"
                            fill="url(#redwood)"
                            id="turn1_winderPostRight"
                          ></rect>
                        </g>
                        <rect
                          x="-45"
                          y="-45"
                          width="90"
                          height="90"
                          fill="url(#redwood)"
                          id="turn1_winderPostLeft"
                        ></rect>
                        <rect
                          x={0}
                          y={45}
                          width={27}
                          height={appState.handRails.borderLeft}
                          fill={`url(#${appState.handRails.color})`}
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
                          height={appState.handRails.borderLeft}
                          fill={`url(#${appState.handRails.color})`}
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_leftString"
                          className=""
                        />
                      </g>
                    </g>
                    <g />
                  </g>
                </g>
                {/* arrows */}
                <g>
                  {rightArrow && (
                    <>
                      <line
                        x1="-2035.5"
                        y1="726"
                        x2="-2035.5"
                        y2="1763"
                        stroke="black"
                        strokeWidth="3"
                        markerEnd="url(#endarrow)"
                        markerStart="url(#startarrow)"
                      ></line>
                      <text
                        x="-2035.5"
                        y="-1230.5"
                        style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                        className=""
                      >
                        {rightArrow}
                      </text>
                    </>
                  )}
                  {widhtArrow && (
                    <>
                      <line
                        x1="355.5"
                        y1="-563"
                        x2="-355.5"
                        y2="-563"
                        stroke="black"
                        strokeWidth="3"
                        markerEnd="url(#endarrow)"
                        markerStart="url(#startarrow)"
                      ></line>
                      <text
                        x="-35.5"
                        y="540.5"
                        style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                        transform="translate (0,0) rotate(180) scale(-1,1)"
                        className=""
                      >
                        {widhtArrow}
                      </text>
                    </>
                  )}
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
                  />{" "}
                  <text
                    x={-50}
                    y={-1817}
                    style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                    transform="translate (0,0) rotate(180) scale(-1,1)"
                    className=""
                  >
                    {heightArrow}
                  </text>
                </g>
              </g>
            </svg>
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
    </>
  );
};

export default TShape;
