import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import { useQuery } from "@apollo/client";
import { GET_CITIE } from "../../queries/countriesQuery";


const PopularDestination = () => {
  const { data, loading, error } = useQuery(GET_CITIE);
  if (error) {
    return <div className="text-xl text-red-500">{error?.message}</div>;
  }
  return (
    <main className="px-2">
      <Title firstText="Popular" secondText="Tour Destinations" />
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((skl, index) => (
              <div key={index} className="w-full h-[170px] bg-slate-300" />
            ))
          : data?.cities?.slice(0, 8)?.map((item, _i) => (
              <Link to={`/destination/${item?.id}`} key={_i}>
                <Card>
                  <div className="click">
                    <div
                      className="w-full h-[170px] bg-cover bg-center pt-4 relative group"
                      style={{ backgroundImage: `url(${item?.photo})` }}
                    >
                      <div className="click_class_main">
                        <div className="click_class">
                          <button className="bg-yellow-500 text-white px-[6px] p-[2px] rounded-md">Click to view</button>
                          <h1 className="text-white text-3xl mx-auto">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                      <div className="absolute bottom-0 block group-hover:hidden w-full text-center ">
                        <h4 className="bg-black/50 text-zinc-50 font-semibold text-[16px]">
                          {item?.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
      </section>
    </main>
  );
};

export default PopularDestination;
