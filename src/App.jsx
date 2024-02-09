const App = () => {
  return (
    <div>
      <svg width={837} height={700}>
        {/* its colors inside */}
        <defs>
          {["mdf", "oak", "redwood", "whiteprimed", "false", 0].map((id) => (
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
        {/* entire height can be set from here */}
        <g transform="translate (418.5,589.1753343239227) rotate(180) scale(-0.3540416047548291,0.3440416047548291)">
          {/* plates */}
          {[0, 220, 440, 660, 880, 1100, 1320].map((items, index) => {
            return (
              <g key={index} transform={`translate(-481 ${items})  rotate(0)`}>
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
          {/* left &  right heing  pencil border*/}
          {[473, -500].map((items, index) => {
            return (
              <g key={index} transform={`translate(${items} 0)  rotate(0)`}>
                <rect
                  x={0}
                  y={-120}
                  width={27}
                  height={1750}
                  fill="url(#whitewood)"
                  style={{ stroke: "black", strokeWidth: 1 }}
                  id="run1_rightString"
                  className=""
                />
              </g>
            );
          })}
          {/* make this dynamic */}
          {[600, -500].map((items, index) => {
            return (
              <g key={index}>
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
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default App;
