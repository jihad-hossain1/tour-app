import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";

export const BottomDrawer = ({images}) => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ height: anchor === "bottom" ? 800 : "" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto mt-20">
        <div className="my-2">
          {images?.slice(0, 1).map((img, index) => (
            <div key={index}>
              <img
                className="h-[400px] w-full rounded-xl hover:bg-black hover:opacity-95 cursor-pointer"
                src={img?.img}
                alt="tour guide image"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 ">
            {images?.slice(1, 3).map((img, index) => (
              <div key={index}>
                <img
                  className="h-[200px] w-[320px] rounded-xl hover:bg-black hover:opacity-95 cursor-pointer"
                  src={img?.img}
                  alt="tour guide image"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 ">
            {images?.slice(3, 5).map((img, index) => (
              <div key={index}>
                <img
                  className="h-[200px] w-[320px] rounded-xl hover:bg-black hover:opacity-95 cursor-pointer"
                  src={img?.img}
                  alt="tour guide image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );

  React.useEffect(() => {
    setState({ ...state, bottom: true });
  }, []);
  return (
    <div>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        {list("bottom")}
      </Drawer>
    </div>
  );
};
