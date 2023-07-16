import { ArrowBackOutlined } from "@mui/icons-material";
import "./Watch.scss";
function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        controls
        autoPlay
        progress
        src="http://techslides.com/demos/sample-videos/small.ogv"
      />
    </div>
  );
}

export default Watch;
