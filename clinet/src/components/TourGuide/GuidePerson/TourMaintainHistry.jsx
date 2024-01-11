const TourMaintainHistry = ({ scheduleReview }) => {
  // console.log(scheduleReview);
  return (
    <main className="px-1">
      <div className="flex flex-col gap-7 lg:gap-10">
        {scheduleReview.map((item, _i) => (<div
          key={_i} className="flex flex-col gap-1">
          <div className="flex items-center space-x-4">
            <span className="bg-blue-600 border  rounded-full h-4 w-4">
            </span>
            <h4 className=" bg-blue-600 text-zinc-50 w-fit text-sm inline-block mb-0 px-3 rounded-full">
              {item?.time}
            </h4>
          </div>
          <div className="w-full h-full border-l-2 border-blue-600 ml-1.5">
            <div className="ml-6">
              <h4 className=" text-xl font-semibold">{item?.title}</h4>
              <p>{item?.details}</p></div>
          </div>
        </div>))}
      </div>
    </main>
  );
};

export default TourMaintainHistry;
