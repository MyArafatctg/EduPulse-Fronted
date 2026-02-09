const ResultRow = ({ subject, score, grade }: any) => {
  return (
    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700">
      <div>
        <div className="text-sm font-medium">{subject}</div>
        <div className="text-xs text-slate-500">{score}</div>
      </div>
      <div className="px-3 py-1 rounded bg-slate-900 text-emerald-400 font-bold border border-emerald-500/20">
        {grade}
      </div>
    </div>
  );
};

export default ResultRow;
