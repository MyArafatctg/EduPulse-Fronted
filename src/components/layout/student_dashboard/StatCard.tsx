const StatCard = ({ icon, label, value, color }: any) => {
  return (
    <div
      className={`bg-slate-900 border-l-4 ${color} p-5 rounded-xl hover:bg-slate-800 transition-colors cursor-default`}
    >
      <div className="flex items-center gap-3 text-slate-400 mb-2">
        {icon}
        <span className="text-sm font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
};

export default StatCard;
