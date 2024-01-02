import { CgFileDocument } from "react-icons/cg";
import { GoCheckCircle } from "react-icons/go";
import { TiArchive } from "react-icons/ti";

const BannerTAg = () => {
  return (
    <div className="bg-zinc-100 py-4">
      <div className="max-w-screen-xl mx-auto px-2 my-6 lg:mt-0">
        <div className="flex  flex-col gap-3 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <TiArchive className="text-4xl text-blue-600" />
            <h4 className="flex flex-col gap-1">
              <span className="font-semibold text-xl">
                The best tours and activities
              </span>
              <span className="text-gray-600">
                With a real local of your choice
              </span>
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <CgFileDocument className="text-4xl text-blue-600" />
            <h4 className="flex flex-col gap-1">
              <span className="font-semibold text-xl">
                The option to personalize your tour
              </span>
              <span className="text-gray-600">
                Just contact your favorite local
              </span>
            </h4>
          </div>
          <div className="flex items-center gap-3">
            <GoCheckCircle className="text-4xl text-blue-600" />
            <h4 className="flex flex-col gap-1">
              <span className="font-semibold text-xl">Only private tours!</span>
              <span className="text-gray-600">
                So no group tours with strangers
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTAg;
