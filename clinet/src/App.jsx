import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    continents {
      name
      code
      countries {
        name
        code
        capital
        subdivisions {
          name
        }
        continent {
          name
        }
      }
    }
  }
`;

const App = () => {
  const [country, setCountry] = useState();

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  // console.log(data);
  let copyCont = [...data?.continents];

  const countr = copyCont?.map((item) =>
    item?.countries.map((isItem) => isItem)
  );

  let isCon = countr.flat();
  // console.log(isCon);

  const handleCountry = (cntrs) => {
    let isCntr = isCon?.filter((item) => item?.continent?.name == cntrs);
    // console.log(isCntr);
    setCountry(isCntr);
    // console.log(isCntr);
  };

  const handleSubdivision = (item) => {
    // console.log(item);
  };
  return (
    <div className="">
      {/* <select
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        className="text-gray-600"
      >
        {data.countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select> */}
      <div className="flex justify-center items-center">
        <ul className="grid md:grid-cols-4 gap-6">
          {data?.continents?.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 cursor-pointer hover:underline text-center"
              onClick={() => handleCountry(item?.name)}
            >
              {item.name} <span className="text-green-400">{item.code}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {country && (
          <>
            <ul>
              {country?.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 cursor-pointer hover:underline text-center"
                  onClick={() => handleSubdivision(item)}
                >
                  {item?.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
