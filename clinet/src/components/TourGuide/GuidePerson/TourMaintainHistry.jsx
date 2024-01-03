const TourMaintainHistry = ({ scheduleReview }) => {
  // console.log(scheduleReview);
  return (
    <main className="px-2">
      <div className="flex flex-col gap-7 lg:gap-10">
        {scheduleReview.map((item, _i) => {
          return (
            <div key={_i} className="flex flex-col gap-1">
              <h4 className=" bg-blue-600 text-zinc-50 w-fit text-sm shadow-sm py-[2px] px-3 rounded-full">
                {item?.time}
                {/* 09.00 AM */}
              </h4>
              <h4 className="text-xl font-semibold">{item?.title}</h4>
              <p>{item?.details}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default TourMaintainHistry;
