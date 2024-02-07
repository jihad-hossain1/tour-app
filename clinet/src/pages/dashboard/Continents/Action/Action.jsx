import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalAll from "../../../../components/ModalAll/ModalAll";
import { Button, Input, TextField } from "@mui/material";

const Action = ({ continents, loading }) => {
  //   console.log(continents);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <main className="flex gap-4">
          {continents?.map((continent, index) => (
            <section to={`#`} key={continent?.id}>
              <h4 className="text-xl font-semibold">
                <span className="font-normal text-lg">{index + 1}.</span>{" "}
                {continent?.name}
              </h4>
              <section>
                {continent?.countries?.map((country) => (
                  <div key={country?.id}>
                    <h4 className="text-lg">{country?.name}</h4>
                    <section>
                      {country?.division?.map((division) => (
                        <div key={division?.id} className="ml-2">
                          <h4 className="font-semibold">{division?.name}</h4>
                          <section>
                            {division?.cities?.map((city) => (
                              <div
                                key={city?.id}
                                className="ml-2 relative group flex"
                              >
                                <h4>{city?.name}</h4>
                                <UpdateCity
                                  countryId={country?.id}
                                  divisionId={division?.id}
                                  cityId={city?.id}
                                  cityName={city?.name}
                                />
                              </div>
                            ))}
                          </section>
                        </div>
                      ))}
                    </section>
                  </div>
                ))}
              </section>
            </section>
          ))}
        </main>
      )}
    </div>
  );
};

export function UpdateCity({ countryId, cityId, divisionId, cityName }) {
  const [open, setOpen] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(countryId, divisionId, cityId);
  };
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="hidden group-hover:absolute group-hover:block right-0 border bg-green-600 rounded text-white px-2"
      >
        up
      </button>
      <ModalAll title={"Update city"} open={open} setOpen={setOpen}>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <TextField
            variant="standard"
            color="info"
            type="text"
            disabled
            value={cityName}
          />
          <Button type="submit" variant="contained" color="warning">
            Update
          </Button>
        </form>
      </ModalAll>
    </>
  );
}

export default Action;
