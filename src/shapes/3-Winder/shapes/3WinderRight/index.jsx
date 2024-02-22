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

const ThreeWinderRight = () => {
  // states

  const ArrowHeightRedux = useSelector(ArrowHeight);
  const WindRun1Redux = useSelector(WindRun1);
  const WindRun2Redux = useSelector(WindRun2);

  const [showStairsLayout, setshowStairsLayout] = useState(true);
  const [showMaterialConstruction, setshowMaterialConstruction] = useState(false);
  const [appState, setAppState] = useState({
    svgInsideContainer: {
      height: "200vh",
      width: "100wh",
    },
    svgRiser: {
      color: "mdf",
      positions: [],
      rightRisers: [],
      bottomRisers: [],
      width: -0.2040416047548291,
      height: 0.2540416047548291,
      translateX: 418,
      translateY: 389,
      rotation: 180,
      ceilingHeight: 236,
    },
    handRails: {
      color: "mdf",
      borderLeft: 270,
      borderRight: "",
      borderTop: "",
      borderBottom: 0,
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
          <svg
            width={appState.svgInsideContainer.width}
            height={appState.svgInsideContainer.height}
          >
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
              <pattern id="redwood" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/pine.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>
              <pattern id="whitewood" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/softwood.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>
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
              </pattern>
              <pattern id="false" patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/none.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>
              <pattern id={0} patternUnits="userSpaceOnUse" width="1000px" height="1000px">
                <image
                  style={{ MozUserSelect: "text" }}
                  href="https://cdn.stairbox.com/assets/stairbuilder/textures/none.jpg"
                  width="1000px"
                  height="1000px"
                  preserveAspectRatio="none"
                  transform="translate (0,0) rotate(0)"
                />
              </pattern>
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
              </pattern>
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
              </pattern>
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
              </pattern>
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
              </pattern>
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
              </pattern>
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
              </pattern>
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
              transform={`translate (${appState.svgRiser.translateX},${appState.svgRiser.translateY}) rotate(${appState.svgRiser.rotation}) scale(${appState.svgRiser.width},${appState.svgRiser.height})`}
            >
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 -0)  rotate(180)">
                  {/* bottom */}
                  {appState.svgRiser.bottomRisers.map((items, index) => {
                    const reversedIndex = appState.svgRiser.bottomRisers.length - index - 1;

                    return (
                      <g key={index} transform={`translate(-481 ${items})  rotate(0)`}>
                        <rect
                          x={0}
                          y={-216}
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
                          fill={`url(#${appState.svgRiser.color})`}
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run1_tread1"
                          className=""
                        />
                        <text
                          x={-500}
                          y={-70}
                          style={{
                            fontSize: 55,
                            fontFamily: "Arial, Helvetica, sans-serif",
                            color: "black",
                            zIndex: 99999,
                          }}
                          transform="translate (0,0) rotate(0) scale(-1,1)"
                        >
                          #{reversedIndex + 1}
                        </text>
                      </g>
                    );
                  })}
                </g>
                {/* center */}
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)">
                    <polyline
                      points="486,-16,-486,-16,-486,577.35,441.5,40,486,40"
                      fill={`url(#${appState.svgRiser.color})`}
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      x={30}
                      y={-100}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #{appState.svgRiser.bottomRisers.length + 1}
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    <polyline
                      points="441.5,21.51,-486,558.86,-486,996,-77.35,996,486.5,55.5"
                      fill={`url(#${appState.svgRiser.color})`}
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      x={150}
                      y={-280}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #{appState.svgRiser.bottomRisers.length + 2}
                    </text>
                  </g>
                  <g transform="translate(0 0)  rotate(0)">
                    <polyline
                      points="467.84,55.5,-96.01,996,510,996,510,24,486.5,24"
                      fill={`url(#${appState.svgRiser.color})`}
                      stroke="black"
                      strokeWidth={2}
                    />
                    <polyline
                      points="486.5,55.5,-77.35,996,-65.69,996,498.16,55.5"
                      fill={`url(#${appState.svgRiser.color})`}
                      stroke="black"
                      strokeWidth={1}
                    />
                    <text
                      x={350}
                      y={-400}
                      style={{
                        fontSize: 55,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        color: "black",
                      }}
                      transform="translate (0,0) rotate(180) scale(-1,1)"
                    >
                      #{appState.svgRiser.bottomRisers.length + 3}
                    </text>
                  </g>
                </g>
                {/* right side */}
                <g transform="translate(310 510)  rotate(-90)">
                  <g>
                    {appState.svgRiser.rightRisers.map((items, index) => {
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
                            fill={`url(#${appState.svgRiser.color})`}
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
                            # {appState.svgRiser.bottomRisers.length === 0 && index + 4}
                            {appState.svgRiser.bottomRisers.length > 0 &&
                              index + appState.svgRiser.bottomRisers.length + 4}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                </g>
              </g>
              {/* pencil borders */}
              <g>
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(-480 0)  rotate(180)">
                    <rect
                      x={0}
                      y={-1000}
                      width={27}
                      height={1000}
                      fill={`url(#${appState.handRails.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string1"
                      className=""
                    />
                    <rect
                      x={0}
                      y={0}
                      width={27}
                      height={appState.handRails.borderBottom}
                      fill={`url(#${appState.handRails.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string1"
                      className=""
                    />
                  </g>
                  <g transform="translate(240 1010)  rotate(-90)">
                    <rect
                      x={0}
                      y={-750}
                      width={27}
                      height={1000}
                      fill={`url(#${appState.handRails.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string2"
                      className=""
                    />
                    <rect
                      x={0}
                      y={-500}
                      width={27}
                      height={appState.handRails.borderLeft}
                      fill={`url(#${appState.handRails.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_string2"
                      className=""
                    />
                  </g>
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(486.5 23.5)  rotate(0)" />
                  <g transform="translate(486.5 23.5)  rotate(0)" />
                </g>
                <g transform="translate(510 510)  rotate(-90)">
                  <g>
                    <g transform="translate(-481 0)  rotate(0)" />
                    <g transform="translate(-481 228)  rotate(0)" />
                    <g transform="translate(-481 456)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(473 0)  rotate(0)">
                      <rect
                        x={0}
                        y="21.5"
                        width={27}
                        height={appState.handRails.borderLeft}
                        fill={`url(#${appState.handRails.color})`}
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run2_rightString"
                        className=""
                      />
                    </g>
                    <g transform="translate(-500 0)  rotate(0)">
                      <rect
                        x={0}
                        y="-23.5"
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
              </g>
              {/* dot */}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(-500 0)  rotate(0)" />
                  <g transform="translate(0 1010)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(486.5 23.5)  rotate(0)">
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill={`url(#${appState.handRails.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_winderPost"
                      className="balustrade"
                    />
                  </g>
                  <g transform="translate(486.5 23.5)  rotate(0)">
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={90}
                      fill={`url(#${appState.handRails.color})`}
                      style={{ stroke: "black", strokeWidth: 1 }}
                      id="turn1_winderPost"
                      className="balustrade"
                    />
                  </g>
                </g>
                <g transform="translate(510 510)  rotate(-90)">
                  <g>
                    <g transform="translate(-481 0)  rotate(0)" />
                    <g transform="translate(-481 228)  rotate(0)" />
                    <g transform="translate(-481 456)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(473 0)  rotate(0)" />
                    <g transform="translate(-500 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(1194 510)  rotate(-90)">
                  <g transform="translate(-481 0)  rotate(0)" />
                </g>
              </g>
              {/* arrows */}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g transform="translate(-500 0)  rotate(0)" />
                  <g transform="translate(0 1010)  rotate(-90)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(486.5 23.5)  rotate(0)" />
                  <g transform="translate(486.5 23.5)  rotate(0)" />
                </g>
                <g transform="translate(510 510)  rotate(-90)">
                  <g>
                    <g transform="translate(-481 0)  rotate(0)" />
                    <g transform="translate(-481 228)  rotate(0)" />
                    <g transform="translate(-481 456)  rotate(0)" />
                  </g>
                  <g>
                    <g transform="translate(473 0)  rotate(0)" />
                    <g transform="translate(-500 0)  rotate(0)" />
                  </g>
                  <g />
                </g>
                <g transform="translate(1194 510)  rotate(-90)">
                  <g transform="translate(-481 0)  rotate(0)" />
                </g>
                <line
                  x1={500}
                  y1={-1916}
                  x2={-400}
                  y2={-1916}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />
                <text
                  x={-10}
                  y={1940}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  {WindRun2Redux}
                </text>
                <line
                  x1={-600}
                  y1={-16}
                  x2={-600}
                  y2={1010}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />
                <rect
                  x={-655}
                  y={487}
                  width={200}
                  height={100}
                  fill={`url(#white)`}
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={-655}
                  y={-487}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  {WindRun1Redux}
                </text>
                <line
                  x1={-500}
                  y1={1110}
                  x2={1204}
                  y2={1110}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />
                <rect
                  x={302}
                  y={1110}
                  width={200}
                  height={100}
                  fill={`url(#white)`}
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={302}
                  y={-1090}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  {ArrowHeightRedux - 99}
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

export default ThreeWinderRight;
