const App = () => {
  return (
    <div>
      <svg width={837} height={700}>
        {/* its colors inside */}
        <defs>
          {["mdf", "oak", "redwood", "whitewood", "whiteprimed", "false", 0].map((id) => (
            <pattern
              key={id}
              id={id || ""}
              patternUnits="userSpaceOnUse"
              width="1000px"
              height="1000px"
            >
              <image
                style={{ MozUserSelect: "text" }}
                href={`https://cdn.stairbox.com/assets/stairbuilder/textures/${id || "none"}.jpg`}
                width="1000px"
                height="1000px"
                preserveAspectRatio="none"
                transform="translate (0,0) rotate(0)"
              />
            </pattern>
          ))}

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
        <g transform="translate (418.5,589.1753343239227) rotate(180) scale(-0.3640416047548291,0.3640416047548291)">
          <g>
            <g transform="translate(0 0)  rotate(0)" />
            <g transform="translate(0 0)  rotate(0)">
              <g>
                <g transform="translate(-481 0)  rotate(0)">
                  <rect
                    x={0}
                    y={-16}
                    width={962}
                    height={236}
                    fill="url(#mdf)"
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
                    #1
                  </text>
                </g>
                <g transform="translate(-481 220)  rotate(0)">
                  <rect
                    x={0}
                    y={-16}
                    width={962}
                    height={236}
                    fill="url(#mdf)"
                    style={{ stroke: "black", strokeWidth: 2 }}
                    id="run1_tread2"
                    className=""
                  />
                  <rect
                    x={0}
                    y={0}
                    width={962}
                    height={10}
                    fill="none"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_tread2"
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
                    #2
                  </text>
                </g>
                <g transform="translate(-481 440)  rotate(0)">
                  <rect
                    x={0}
                    y={-16}
                    width={962}
                    height={236}
                    fill="url(#mdf)"
                    style={{ stroke: "black", strokeWidth: 2 }}
                    id="run1_tread3"
                    className=""
                  />
                  <rect
                    x={0}
                    y={0}
                    width={962}
                    height={10}
                    fill="none"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_tread3"
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
                    #3
                  </text>
                </g>
                <g transform="translate(-481 660)  rotate(0)">
                  <rect
                    x={0}
                    y={-16}
                    width={962}
                    height={236}
                    fill="url(#mdf)"
                    style={{ stroke: "black", strokeWidth: 2 }}
                    id="run1_tread4"
                    className=""
                  />
                  <rect
                    x={0}
                    y={0}
                    width={962}
                    height={10}
                    fill="none"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_tread4"
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
                    #4
                  </text>
                </g>
                <g transform="translate(-481 880)  rotate(0)">
                  <rect
                    x={0}
                    y={-16}
                    width={962}
                    height={236}
                    fill="url(#mdf)"
                    style={{ stroke: "black", strokeWidth: 2 }}
                    id="run1_tread5"
                    className=""
                  />
                  <rect
                    x={0}
                    y={0}
                    width={962}
                    height={10}
                    fill="none"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_tread5"
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
                    #5
                  </text>
                </g>
                <g transform="translate(-481 1100)  rotate(0)">
                  <rect
                    x={0}
                    y={-16}
                    width={962}
                    height={236}
                    fill="url(#mdf)"
                    style={{ stroke: "black", strokeWidth: 2 }}
                    id="run1_tread6"
                    className=""
                  />
                  <rect
                    x={0}
                    y={0}
                    width={962}
                    height={10}
                    fill="none"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_tread6"
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
                    #6
                  </text>
                </g>
              </g>
              <g>
                <g transform="translate(473 0)  rotate(0)" />
                <g transform="translate(-500 0)  rotate(0)" />
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
            <g transform="translate(0 1320)  rotate(0)">
              <g transform="translate(-481 0)  rotate(0)">
                <rect
                  x={0}
                  y={-16}
                  width={962}
                  height={86}
                  fill="url(#mdf)"
                  style={{ stroke: "black", strokeWidth: 2 }}
                  id="nosing_tread"
                  className=""
                />
                <rect
                  x={0}
                  y={0}
                  width={962}
                  height={10}
                  fill="none"
                  style={{ stroke: "black", strokeWidth: 1 }}
                  id="nosing_tread"
                  className=""
                />
                <text
                  x={456}
                  y={-55}
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
          </g>
          <g>
            <g transform="translate(0 0)  rotate(0)" />
            <g transform="translate(0 0)  rotate(0)">
              <g>
                <g transform="translate(-481 0)  rotate(0)" />
                <g transform="translate(-481 220)  rotate(0)" />
                <g transform="translate(-481 440)  rotate(0)" />
                <g transform="translate(-481 660)  rotate(0)" />
                <g transform="translate(-481 880)  rotate(0)" />
                <g transform="translate(-481 1100)  rotate(0)" />
              </g>
              <g>
                <g transform="translate(473 0)  rotate(0)">
                  <rect
                    x={0}
                    y={-120}
                    width={27}
                    height={1560}
                    fill="url(#whitewood)"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_rightString"
                    className=""
                  />
                </g>
                <g transform="translate(-500 0)  rotate(0)">
                  <rect
                    x={0}
                    y={-120}
                    width={27}
                    height={1560}
                    fill="url(#whitewood)"
                    style={{ stroke: "black", strokeWidth: 1 }}
                    id="run1_leftString"
                    className=""
                  />
                </g>
              </g>
              <g />
            </g>
            <g transform="translate(0 1320)  rotate(0)">
              <g transform="translate(-481 0)  rotate(0)" />
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
          <path d="" fill="url(#diagonalHatch)" fillOpacity={1} strokeWidth={6} stroke="black" />
          <g>
            <g transform="translate(0 0)  rotate(0)" />
            <g transform="translate(0 0)  rotate(0)">
              <g>
                <g transform="translate(-481 0)  rotate(0)" />
                <g transform="translate(-481 220)  rotate(0)" />
                <g transform="translate(-481 440)  rotate(0)" />
                <g transform="translate(-481 660)  rotate(0)" />
                <g transform="translate(-481 880)  rotate(0)" />
                <g transform="translate(-481 1100)  rotate(0)" />
              </g>
              <g>
                <g transform="translate(473 0)  rotate(0)" />
                <g transform="translate(-500 0)  rotate(0)" />
              </g>
              <g />
            </g>
            <g transform="translate(0 1320)  rotate(0)">
              <g transform="translate(-481 0)  rotate(0)" />
            </g>
          </g>
          <g>
            <g transform="translate(0 0)  rotate(0)" />
            <g transform="translate(0 0)  rotate(0)">
              <g>
                <g transform="translate(-481 0)  rotate(0)" />
                <g transform="translate(-481 220)  rotate(0)" />
                <g transform="translate(-481 440)  rotate(0)" />
                <g transform="translate(-481 660)  rotate(0)" />
                <g transform="translate(-481 880)  rotate(0)" />
                <g transform="translate(-481 1100)  rotate(0)" />
              </g>
              <g>
                <g transform="translate(473 0)  rotate(0)" />
                <g transform="translate(-500 0)  rotate(0)" />
              </g>
              <g />
            </g>
            <g transform="translate(0 1320)  rotate(0)">
              <g transform="translate(-481 0)  rotate(0)" />
            </g>
          </g>
          <g>
            <g transform="translate(0 0)  rotate(0)" />
            <g transform="translate(0 0)  rotate(0)">
              <g>
                <g transform="translate(-481 0)  rotate(0)" />
                <g transform="translate(-481 220)  rotate(0)" />
                <g transform="translate(-481 440)  rotate(0)" />
                <g transform="translate(-481 660)  rotate(0)" />
                <g transform="translate(-481 880)  rotate(0)" />
                <g transform="translate(-481 1100)  rotate(0)" />
              </g>
              <g>
                <g transform="translate(473 0)  rotate(0)" />
                <g transform="translate(-500 0)  rotate(0)" />
              </g>
              <g />
            </g>
            <g transform="translate(0 1320)  rotate(0)">
              <g transform="translate(-481 0)  rotate(0)" />
            </g>
            <line
              x1={600}
              y1={-16}
              x2={600}
              y2={1330}
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
              1346
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
              1000
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default App;
