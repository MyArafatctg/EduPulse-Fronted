const InfoItem = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="group">
      <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1 group-hover:text-indigo-400 transition-colors">
        {label}
      </p>
      <div className="flex items-center gap-2 text-slate-200">
        {icon && <span className="text-slate-500">{icon}</span>}
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
};

export default InfoItem;
