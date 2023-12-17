import { useEffect, useState } from "react";

const Test = () => {
  const [divisionData, setDivisionData] = useState([]);
  const [districData, setDicstricData] = useState([]);
  // const []
  useEffect(() => {
    fetch("../../../public/data/bd/divisions/divisions.json")
      .then((res) => res.json())
      .then((result) => {
        setDivisionData(result);
      });
    fetch("../../../public/data/bd/districts/districts.json")
      .then((res) => res.json())
      .then((result) => {
        setDicstricData(result);
      });
  }, []);

  let _f = districData?.map((item) => item?.data);
  let _d = divisionData?.map((item) => item?.data);
  console.log(_d, _f);
  const handleClick = (did) => {
    let _c = divisionData?.flatMap();
  };
  return (
    <>
      <div>Test-totals: {divisionData?.length} </div>

      <div className=" flex flex-row gap-4">
        {_d.map((item, _i) => (
          <p key={_i}>{item?.name}</p>
        ))}
      </div>

      <div className=" flex flex-wrap gap-6">
        {_f.map((item, _i) => (
          <p key={_i}>
            {_i + 1} {item?.name}
          </p>
        ))}
      </div>
    </>
  );
};

export default Test;
