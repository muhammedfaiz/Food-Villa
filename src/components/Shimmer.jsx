const ShimmerCard = () => {
  return (
    <div className="w-64 h-96 m-5 shadow-lg text-center flex flex-col transition-transform transform hover:scale-105">
      <div className="h-40 object-cover bg-gray-300 rounded-md m-3"></div>
      <div className="h-4 bg-gray-300 rounded-md w-3/4 m-2"></div>
      <div className="h-4 bg-gray-300 rounded-md w-1/2 m-2"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <>
     <div className="m-10 text-center">
        <input
          type="text"
          className="px-5 py-2 rounded-md ring-2 ring-slate-500 focus:outline-none focus:ring-slate-900 transition-all ease-in-out"
          placeholder="Search..."
        />
        <button
          className="px-5 py-2 mx-2 bg-sky-500 text-center text-white rounded-md shadow-md transition-all hover:bg-sky-800 ease-in-out"
        >
          Search
        </button>
      </div>
      <div className="flex justify-around align-middle flex-wrap my-2 mx-20">
        {Array(12).fill("").map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Shimmer;