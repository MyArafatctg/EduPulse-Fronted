import {
  BookOpen,
  GraduationCap,
  Clock,
  LineChart,
  FileText,
} from "lucide-react";
import {
  LineChart as ReChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ResultRow from "./ResultRow";
import StatCard from "./StatCard";

// Mock Data for the GPA Chart
const gpaData = [
  { semester: "Sem 1", gpa: 3.2 },
  { semester: "Sem 2", gpa: 3.5 },
  { semester: "Sem 3", gpa: 3.4 },
  { semester: "Sem 4", gpa: 3.8 },
];
const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans rounded-2xl">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Student Analytics
          </h1>
          <p className="text-slate-400">
            Welcome back, Alex. Here is your academic progress.
          </p>
        </div>
        <div className="h-12 w-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
          <GraduationCap className="text-blue-400" />
        </div>
      </header>

      {/* Top Cards (Summary) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<BookOpen size={20} />}
          label="Enrolled Courses"
          value="6"
          color="border-blue-500"
        />
        <StatCard
          icon={<LineChart size={20} />}
          label="Current GPA"
          value="3.85"
          color="border-emerald-500"
        />
        <StatCard
          icon={<GraduationCap size={20} />}
          label="Average CGPA"
          value="3.62"
          color="border-purple-500"
        />
        <StatCard
          icon={<Clock size={20} />}
          label="Pending Tasks"
          value="4"
          color="border-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* GPA Chart Section */}
        <section className="lg:col-span-2 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <LineChart className="text-blue-400" size={18} /> GPA Progression
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ReChart data={gpaData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                  vertical={false}
                />
                <XAxis
                  dataKey="semester"
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#60a5fa" }}
                />
                <Line
                  type="monotone"
                  dataKey="gpa"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6" }}
                />
              </ReChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Latest Exam Results */}
        <section className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FileText className="text-emerald-400" size={18} /> Latest Results
          </h3>
          <div className="space-y-4">
            <ResultRow subject="Advanced React" score="92/100" grade="A" />
            <ResultRow subject="Database Systems" score="88/100" grade="A-" />
            <ResultRow subject="UI/UX Design" score="95/100" grade="A+" />
            <ResultRow subject="Discrete Math" score="78/100" grade="B+" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
