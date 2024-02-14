import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



 <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>
      <Div sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Paper onClick={handleTurnFirstLeft} className="turnLeft">
          add a left <br />
          turn
          <br />
          <ArrowBackIcon sx={{ mt: 1 }} />
        </Paper>
        <Paper onClick={handleTurnFirstRight} className="turnRight">
          add a Right <br />
          turn <br />
          <ArrowForwardIcon sx={{ mt: 1 }} />
        </Paper>
      </Div>