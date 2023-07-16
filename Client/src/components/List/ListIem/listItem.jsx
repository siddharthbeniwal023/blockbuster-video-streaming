import "./listItem.scss";
import MoviePhoto from "../ListIem/Movie Photos/maxresdefault.jpg";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
function LtItem({index}) {
  const [isHovered, setIsHovered] = useState(0);
  return (
    <div
      className="listitem"
      style={{left: isHovered && index*225 - 50 + index*5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={MoviePhoto} alt="Hera Pheri" />
      <div className="iteminfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="iteminfotop">
          <span>2 Hours 40 Minutes</span>
          <span className="limit">16+</span>
          <span>1999</span>
        </div>
        <div className="desc">Lorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consecteturLorewdadwadadawdw,</div>
        <div className="genre">Comedy</div>
      </div>
    </div>
  );
}

export default LtItem;
