import React, { useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const PersonPickers = ({
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  uptoPeople,
}) => {
  const [totalPeople, setTotalPeople] = useState(0);

  //   setpersonPic(objData);
  const incrementCount = (type) => {
    if (type === "adults" && adults < uptoPeople) {
      setAdults(adults + 1);
      updateTotalPeople(adults + 1, children, infants);
    } else if (type === "children") {
      setChildren(children + 1);
      updateTotalPeople(adults, children + 1, infants);
    } else if (type === "infants") {
      setInfants(infants + 1);
      updateTotalPeople(adults, children, infants + 1);
    }
  };

  const decrementCount = (type) => {
    if (type === "adults" && adults > 0) {
      setAdults(adults - 1);
      updateTotalPeople(adults - 1, children, infants);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
      updateTotalPeople(adults, children - 1, infants);
    } else if (type === "infants" && infants > 0) {
      setInfants(infants - 1);
      updateTotalPeople(adults, children, infants - 1);
    }
  };

  const updateTotalPeople = (newAdults, newChildren, newInfants) => {
    const total = newAdults + newChildren + newInfants;

    // Check if the total exceeds the maximum capacity for adults
    if (total <= uptoPeople) {
      setTotalPeople(total);
    } else {
      // Optionally, provide feedback or handle the case when the limit is exceeded
      alert("Total number of people exceeds the maximum capacity for adults.");
    }
  };

  const isAdultsFull = totalPeople >= uptoPeople;

  return (
    <div>
      <h2>Tour Reservation</h2>
      <div>
        <button
          onClick={() => incrementCount("adults")}
          disabled={isAdultsFull}
        >
          <CiSquarePlus size={25} />
        </button>
        <button
          onClick={() => decrementCount("adults")}
          disabled={adults === 0}
        >
          <CiSquareMinus size={25} />
        </button>
        <p>Adults: {adults}</p>
      </div>
      <div>
        <button
          onClick={() => incrementCount("children")}
          disabled={isAdultsFull}
        >
          <CiSquarePlus size={25} />
        </button>
        <button
          onClick={() => decrementCount("children")}
          disabled={children === 0}
        >
          <CiSquareMinus size={25} />
        </button>
        <p>Children: {children}</p>
      </div>
      <div>
        <button
          onClick={() => incrementCount("infants")}
          disabled={isAdultsFull}
        >
          <CiSquarePlus size={25} />
        </button>
        <button
          onClick={() => decrementCount("infants")}
          disabled={infants === 0}
        >
          <CiSquareMinus size={25} />
        </button>
        <p>Infants: {infants}</p>
      </div>
      <p>Total People: {totalPeople}</p>
    </div>
  );
};

export default PersonPickers;

// export default PersonPickers;
