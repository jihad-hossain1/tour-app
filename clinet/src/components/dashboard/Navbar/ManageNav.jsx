const ManageNav = ({ children }) => {
  return (
    <div className="min-h-[25px] md:min-h-[35px] p-2 md:p-4 m-4 rounded border border-slate-200/70 bg-slate-100 shadow-[2px_3px_10px_rgba(0,0,0,0.25)] ">
      {children}
    </div>
  );
};

export default ManageNav;
