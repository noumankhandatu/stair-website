import { Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { iconCol } from "../Default";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import RefreshIcon from "@mui/icons-material/Refresh";

const TShape = () => {
  return (
    <>
      <Grid container>
        <Grid xs={2}>
          asd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, perspiciatis?{" "}
        </Grid>
        <Grid xs={8}>
          <div>
            <svg width={594} height={700}>
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
              <g transform="translate (297,440.3296894723554) rotate(180) scale(-0.10497349154253975,0.10497349154253975)">
                <g>
                  <g transform="translate(0 0)  rotate(0)" />
                  <g transform="translate(0 0)  rotate(0)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run1_tread2"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run1_tread2"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run1_tread3"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run1_tread3"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run1_tread4"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run1_tread4"
                          className=""
                        />
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
                    <g />
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
                    <g transform="translate(0 849)  rotate(-90)" />
                    <g transform="translate(0 0)  rotate(0)">
                      <polyline
                        points="418.5,-16,-418.5,-16,-418.5,-2.5,-416.5,-2.5,-416.5,835,416.5,835,416.5,-2.5,418.5,-2.5"
                        fill="url(#turn1_tread1)"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <text
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
                      />
                      <polyline
                        points="418.5,0,-418.5,0,-418.5,10,418.5,10"
                        fill="url(#turn1_tread1)"
                        stroke="black"
                        strokeWidth={1}
                      />
                      <text
                        className="heavy"
                        textAnchor=""
                        transform="translate(0,400) rotate(0) scale(-1,1)"
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
                        #5
                      </text>
                    </g>
                    <g transform="translate(-419 -2.5)  rotate(0)" />
                    <g transform="translate(419 -2.5)  rotate(0)" />
                  </g>
                  <g transform="translate(-416.5 1304.5)  rotate(90)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread1"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread1"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread2"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread2"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread3"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread3"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread4"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread4"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread5"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread5"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread6"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread6"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run2_tread7"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run2_tread7"
                          className=""
                        />
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
                    <g />
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
                  <g transform="translate(-1970.5 1304.5)  rotate(90)">
                    <g transform="translate(-413.5 0)  rotate(0)">
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={86}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="nosing_tread"
                        className=""
                      />
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="nosing_tread"
                        className=""
                      />
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
                  <g transform="translate(416.5 1304.5)  rotate(-90)">
                    <g>
                      <g transform="translate(-413.5 0)  rotate(0)">
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread1"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread1"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread2"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread2"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread3"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread3"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread4"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread4"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread5"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread5"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread6"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread6"
                          className=""
                        />
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
                        <rect
                          x={0}
                          y={-16}
                          width={827}
                          height={238}
                          fill="url(#mdf)"
                          style={{ stroke: "black", strokeWidth: 2 }}
                          id="run3_tread7"
                          className=""
                        />
                        <rect
                          x={0}
                          y={0}
                          width={827}
                          height={10}
                          fill="none"
                          style={{ stroke: "black", strokeWidth: 1 }}
                          id="run3_tread7"
                          className=""
                        />
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
                    <g />
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
                  <g transform="translate(1970.5 1304.5)  rotate(-90)">
                    <g transform="translate(-413.5 0)  rotate(0)">
                      <rect
                        x={0}
                        y={-16}
                        width={827}
                        height={86}
                        fill="url(#mdf)"
                        style={{ stroke: "black", strokeWidth: 2 }}
                        id="nosing2_tread"
                        className=""
                      />
                      <rect
                        x={0}
                        y={0}
                        width={827}
                        height={10}
                        fill="none"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="nosing2_tread"
                        className=""
                      />
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
                    <g transform="translate(0 849)  rotate(-90)" />
                    <g transform="translate(0 0)  rotate(0)" />
                    <g transform="translate(-419 -2.5)  rotate(0)">
                      <rect
                        x={-45}
                        y={-45}
                        width={90}
                        height={90}
                        fill="url(#redwood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="turn1_winderPostLeft"
                        className="balustrade"
                      />
                    </g>
                    <g transform="translate(419 -2.5)  rotate(0)">
                      <rect
                        x={-45}
                        y={-45}
                        width={90}
                        height={90}
                        fill="url(#redwood)"
                        style={{ stroke: "black", strokeWidth: 1 }}
                        id="turn1_winderPostRight"
                        className="balustrade"
                      />
                    </g>
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
                  <line
                    x1="-432.5"
                    y1={-250}
                    x2="432.5"
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
                    865
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
