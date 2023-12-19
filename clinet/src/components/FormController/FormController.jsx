import { SlMagnifier } from "react-icons/sl";

const FormController = ({ handleSubmit, children }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-[1px_3px_20px_rgba(0,0,0,0.25)] flex flex-col gap-5 rounded-xl md:rounded-full bg-zinc-50 p-4 md:p-5 md:flex-row md:justify-between md:items-center"
    >
      {children}
      <div>
        <button
          className="w-full md:w-fit p-3 rounded-full md:p-5 bg-sky-500 hover:bg-sky-500/80 text-zinc-50 transition-all duration-300 flex items-center gap-3 justify-center"
          type="submit"
        >
          <SlMagnifier /> <span>Search</span>
        </button>
      </div>
    </form>
  );
};

export default FormController;
