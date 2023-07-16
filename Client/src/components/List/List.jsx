import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./List.scss";
import LtItem from "./ListIem/listItem";
import { useRef, useState } from "react";

function List({type}) {
  const listRef = useRef();
  const [slidenumber,setslidenumber] = useState(0);
  const [isMoved,setisMoved] = useState(0);
  function handleClick(direction){
    setisMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if(direction === "left" && slidenumber > 0){
      setslidenumber(slidenumber-1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === "right" && slidenumber < 6 ){
      setslidenumber(slidenumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className="list">
      <div className="listtitle">
        <span>{type}</span>
      </div>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderarrow left" onClick={() => handleClick("left")} style={{display: !isMoved && 'none'}}/>
        <div className="container" ref={listRef}>
          <LtItem index={1}/>
          <LtItem index={1}/>
          <LtItem index={2}/>
          <LtItem index={3}/>
          <LtItem index={4}/>
          <LtItem index={5}/>
          <LtItem index={6}/>
          <LtItem index={7}/>
          <LtItem index={8}/>
          <LtItem index={9}/>
          <LtItem index={10}/>
          <LtItem index={11}/>
        </div>
        <ArrowForwardIosOutlined className="sliderarrow right" onClick={() => handleClick("right")}/>
      </div>
    </div>
  );
}

export default List;
