import "./Home.scss";
import NavBar from "../components/navbar/Navbar";
import Featured from "../components/Featured/Featured";
import List from "../components/List/List";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Featured type="Movies"/> 
      <List type="Continue to Watch"/>
      <List type="Hot Picks for Today"/>
      <List type="Comedy Thrillers"/>
    </div>
  );
}

export default Home;
