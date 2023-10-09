import "./firstpage.css";

const FirstPage = () => {
  return (
    <div className="firstpage">
      <span className="firstleft">
        <div className="welcome">WELCOME</div>
        <div className="line"></div>
      </span>
      <div className="firstright">
        <div className="rightTop">
          <span>David</span>
          <span>&</span>
          <span>Nana Yaa</span>
        </div>
        <p className="rightmid">We welcome you to our wedding</p>
        <div className="rightbottom">
          <span>21</span>
          <span>|</span>
          <span>10</span>
          <span>|</span>
          <span>23</span>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
