const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-text"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="card-list">
        {Array(12).fill("").map((e,index)=>{
            return <ShimmerCard key={index} />
        })}
      </div>
    </>
  );
};

export default Shimmer;
