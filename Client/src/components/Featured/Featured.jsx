import Featured_movie from "./Featured_movie/pxfuel.jpg";
import "./Featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

function Featured({type}) {
  return (
    <div className="featured">
        {/* {type && (
          <div className="category">
            <span>{type === "Movies" ? "Movies" : "Series"}</span>
            <select name="" id="">
              <option>Genre</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Family">Family</option>
              <option value="Comedy">Comedy</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>
        )} */}
      <img src={Featured_movie} alt="FeaturedMovie" />
      <div className="info">
        <span className="moviehead">Alice in Borderland</span>
        <div className="desc">
        Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.
        </div>
        <div className="buttons">
          <button>
            <PlayArrow className="icon" />
            <span>Play</span>
          </button>

          <button className="more">
            <InfoOutlined className="icon" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Featured;
