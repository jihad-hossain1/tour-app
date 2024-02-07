import { useEffect, useState } from "react";

const Test = () => {
  const [dist, setDist] = useState("");
  const [divi, setDivi] = useState("");
  const [upozila, setUpozila] = useState("");
  const [divisionData, setDivisionData] = useState([]);
  const [districData, setDicstricData] = useState([]);
  const [isUpozila, setIsUpolzila] = useState([]);
  // const []
  useEffect(() => {
    fetch("../../../public/data/bd/divisions/divisions.json")
      .then((res) => res.json())
      .then((result) => {
        setDivisionData(result);
      });
  }, []);
  useEffect(() => {
    fetch("../../../public/data/bd/districts/districts.json")
      .then((res) => res.json())
      .then((result) => {
        setDicstricData(result);
      });
  }, []);
  useEffect(() => {
    fetch("../../../public/data/bd/upazilas/upazilas.json")
      .then((res) => res.json())
      .then((result) => {
        setIsUpolzila(result);
      });
  }, []);
  let _div = divisionData?.find((item) => item?.data);
  let _dis = districData?.find((item) => item?.data);
  let _upz = isUpozila?.find((item) => item?.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      dist,
      divi,
      upozila,
    };
    console.log(info);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className=" flex justify-center items-center gap-9"
      >
        <div>
          <div>Test-division: {_div?.data?.length} </div>
          <select
            onChange={(e) => setDivi(e.target.value)}
            className=" bg-slate-600"
            value={divi}
          >
            {_div?.data?.map((item, _i) => (
              <option key={_i} value={item?.id}>
                {" "}
                {item?.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>total-upozila: {_dis?.data?.length} </div>
          <select
            onChange={(e) => setDist(e.target.value)}
            className=" bg-slate-600"
            value={dist}
          >
            {_dis?.data
              ?.filter((item, _i) => item?.division_id == divi)
              .map((itm, i) => (
                <option key={i} value={itm?.id}>
                  {" "}
                  {itm?.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <div>total-distric: {_upz?.data?.length} </div>
          <select
            onChange={(e) => setUpozila(e.target.value)}
            className=" bg-slate-600"
            value={upozila}
          >
            {_upz?.data
              ?.filter((item) => item?.district_id == dist)
              .map((itm, ind) => (
                <option key={ind} value={itm?.name}>
                  {itm?.name}
                </option>
              ))}
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Test;
