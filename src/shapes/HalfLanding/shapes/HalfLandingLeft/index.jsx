import Grid from "@mui/material/Unstable_Grid2/Grid2";
import StairboxLayout from "./tabs/StairboxLayout";

const HalfLandingLeft = () => {
  return (
    <Grid container>
      <Grid xs={2}>
        <StairboxLayout />
      </Grid>
      <Grid xs={8}>
        <div>
          <svg width={1034} height={700}>
            <defs>
              {" "}
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
            <g transform="translate (611.2229589722338,457.72689598010777) rotate(180) scale(-0.2030667219229175,0.2030667219229175)">
              {" "}
              <g>
                <g transform="translate(0 0)  rotate(0)" />
                <g transform="translate(0 0)  rotate(0)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread1"
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
                        #1
                      </text>
                    </g>
                    <g transform="translate(-413.5 222)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread2"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread2"
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
                        #2
                      </text>
                    </g>
                    <g transform="translate(-413.5 444)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread3"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread3"
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
                        #3
                      </text>
                    </g>
                    <g transform="translate(-413.5 666)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run1_tread4"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run1_tread4"
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
                        #4
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
                    run1
                  </text>
                </g>
                <g transform="translate(0 888)  rotate(0)">
                  <g transform="translate(0 0)  rotate(0)">
                    {" "}
                    <polyline
                      points="-522,-16,418.5,-16,418.5,835,-1346.5,835,-1346.5,0,-451,0,-451,-15.5,-432.5,-15.5,-522,-15.5"
                      fill="url(#turn1_tread1)"
                      stroke="black"
                      strokeWidth={2}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="end"
                      transform="translate(200,400) rotate(180) scale(-1,1)"
                    >
                      * Half Landings not supplied by StairBox *
                    </text>{" "}
                    <polyline
                      points="-522,0,418.5,0,418.5,10,-522,10"
                      fill="url(#turn1_tread1)"
                      stroke="black"
                      strokeWidth={1}
                    />
                    <text
                      style={{ fontSize: 60 }}
                      className="heavy"
                      textAnchor="end"
                      transform="translate(200,400) rotate(180) scale(-1,1)"
                    >
                      * Half Landings not supplied by StairBox *
                    </text>{" "}
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
                      #5
                    </text>
                  </g>
                </g>
                <g transform="translate(-923 888)  rotate(180)">
                  <g>
                    <g transform="translate(-413.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread1"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread1"
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
                        #6
                      </text>
                    </g>
                    <g transform="translate(-413.5 222)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread2"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread2"
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
                        #7
                      </text>
                    </g>
                    <g transform="translate(-413.5 444)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread3"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread3"
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
                        #8
                      </text>
                    </g>
                    <g transform="translate(-413.5 666)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread4"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread4"
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
                        #9
                      </text>
                    </g>
                    <g transform="translate(-413.5 888)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread5"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread5"
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
                        #10
                      </text>
                    </g>
                    <g transform="translate(-413.5 1110)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread6"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread6"
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
                        #11
                      </text>
                    </g>
                    <g transform="translate(-413.5 1332)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={238}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="run3_tread7"
                        className=""
                      />{" "}
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_tread7"
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
                        #12
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
                    run3
                  </text>
                </g>
                <g transform="translate(-923 -666)  rotate(180)">
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
                    <g transform="translate(405.5 0)  rotate(0)">
                      {" "}
                      <rect
                        x={0}
                        y={-120}
                        width={27}
                        height="1005.5"
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
                        height="1005.5"
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
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-923 888)  rotate(180)">
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
                      {" "}
                      <rect
                        x={0}
                        y="2.5"
                        width={27}
                        height="1671.5"
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
                        y="2.5"
                        width={27}
                        height="1671.5"
                        fill="url(#whitewood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="run3_leftString"
                        className=""
                      />
                    </g>
                  </g>
                  <g />
                </g>
                <g transform="translate(-923 -666)  rotate(180)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
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
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-923 888)  rotate(180)">
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
                <g transform="translate(-923 -666)  rotate(180)">
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
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-923 888)  rotate(180)">
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
                <g transform="translate(-923 -666)  rotate(180)">
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
                  <g transform="translate(0 0)  rotate(0)" />
                </g>
                <g transform="translate(-923 888)  rotate(180)">
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
                <g transform="translate(-923 -666)  rotate(180)">
                  <g transform="translate(-413.5 0)  rotate(0)" />
                </g>{" "}
                <line
                  x1="532.5"
                  y1={-16}
                  x2="532.5"
                  y2={1737}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="477.5"
                  y="850.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="477.5"
                  y="-850.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1753
                </text>{" "}
                <line
                  x1="-1360.5"
                  y1={1837}
                  x2="432.5"
                  y2={1837}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x={-514}
                  y={1837}
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x={-514}
                  y={-1817}
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  1793
                </text>{" "}
                <line
                  x1="-1460.5"
                  y1={-676}
                  x2="-1460.5"
                  y2={1737}
                  stroke="black"
                  strokeWidth={3}
                  markerEnd="url(#endarrow)"
                  markerStart="url(#startarrow)"
                  className=""
                />{" "}
                <rect
                  x="-1515.5"
                  y="520.5"
                  width={200}
                  height={100}
                  fill="white"
                  transform="translate (-20,-30)"
                  opacity="0.6"
                  className=""
                />
                <text
                  x="-1515.5"
                  y="-520.5"
                  style={{ fontSize: 75, fontFamily: "Arial, Helvetica, sans-serif" }}
                  transform="translate (0,0) rotate(180) scale(-1,1)"
                  className=""
                >
                  2413
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
        </div>
      </Grid>
      <Grid xs={2}></Grid>
    </Grid>
  );
};

export default HalfLandingLeft;
