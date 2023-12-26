const ManageNav = ({ children }) => {
  return (
    <div className="h-[35px] m-4 rounded border border-slate-200/70 bg-slate-100 shadow-[2px_4px_10px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
};

export default ManageNav;
