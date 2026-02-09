import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Droplets,
  BookOpen,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";
import InfoItem from "./InfoItem";

// TypeScript Interface for the Student Data
interface StudentData {
  id: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  gender: "Male" | "Female" | "Other";
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
  department: string;
  program: string;
  semester: string;
  status: "Active" | "Graduated" | "On Leave";
  session: string;
  advisor: string;
  enrollmentDate: string;
  avatarUrl?: string;
}
export const StudentProfile = () => {
  // Mock Data - In a real app, this would come from props or an API
  const student: StudentData = {
    id: "STU-2024-001",
    fullName: "Alex Thompson",
    fatherName: "Richard Thompson",
    motherName: "Sarah Thompson",
    dob: "2002-05-14",
    gender: "Male",
    bloodGroup: "O+",
    phone: "+1 (555) 012-3456",
    email: "alex.t@university.edu",
    address: "123 Academic Way, Science District, NY 10001",
    department: "Computer Science & Engineering",
    program: "B.Sc. in CSE",
    semester: "6th Semester",
    status: "Active",
    session: "2021-2025",
    advisor: "Dr. Emily Roberts",
    enrollmentDate: "August 15, 2021",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* 🪪 PROFILE HEADER */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                student.status === "Active"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-slate-700 text-slate-300"
              }`}
            >
              {student.status}
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-indigo-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg border-4 border-slate-800">
                {student.avatarUrl ? (
                  <img
                    src={student.avatarUrl}
                    alt="Profile"
                    className="rounded-2xl"
                  />
                ) : (
                  student.fullName.charAt(0)
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-slate-900 p-1.5 rounded-lg border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white">
                {student.fullName}
              </h1>
              <p className="text-indigo-400 font-medium mt-1">
                {student.program}
              </p>
              <div className="grid grid-cols-2 md:flex md:items-center gap-4 mt-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> ID: {student.id}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> {student.department}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {student.semester}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 📌 PERSONAL INFORMATION */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-400" /> Personal
                Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <InfoItem label="Full Name" value={student.fullName} />
                <InfoItem label="Father's Name" value={student.fatherName} />
                <InfoItem label="Mother's Name" value={student.motherName} />
                <InfoItem
                  label="Date of Birth"
                  value={student.dob}
                  icon={<Calendar className="w-4 h-4" />}
                />
                <InfoItem label="Gender" value={student.gender} />
                <InfoItem
                  label="Blood Group"
                  value={student.bloodGroup}
                  icon={<Droplets className="w-4 h-4 text-red-400" />}
                />
                <InfoItem
                  label="Phone"
                  value={student.phone}
                  icon={<Phone className="w-4 h-4" />}
                />
                <InfoItem
                  label="Email"
                  value={student.email}
                  icon={<Mail className="w-4 h-4" />}
                />
                <div className="md:col-span-2">
                  <InfoItem
                    label="Permanent Address"
                    value={student.address}
                    icon={<MapPin className="w-4 h-4" />}
                  />
                </div>
              </div>
            </section>
          </div>

          {/* 🎓 ACADEMIC INFORMATION */}
          <div className="space-y-6">
            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm h-full">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" /> Academic
                Details
              </h2>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                    Current Advisor
                  </p>
                  <p className="text-white font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" />{" "}
                    {student.advisor}
                  </p>
                </div>
                <InfoItem label="Department" value={student.department} />
                <InfoItem label="Session" value={student.session} />
                <InfoItem label="Current Semester" value={student.semester} />
                <InfoItem
                  label="Enrollment Date"
                  value={student.enrollmentDate}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
