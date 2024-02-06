import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1192261411/photo/charminar-is-a-monument-and-mosque.webp?b=1&s=170667a&w=0&k=20&c=mdB0eLin8QZfjpBbd32RUwbQmKWN-kGAtise3HWMXkM="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>655 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1585999322539-fee6e6321a39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>chennai</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/519406045/photo/bangalore-skyline-india.jpg?s=2048x2048&w=is&k=20&c=QeuOVdHXlNdO__kiORM1TaR7o50cHRcLchUPzpxvooo="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Banglore</h1>
          <h2>722 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
