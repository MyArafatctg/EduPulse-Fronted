import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

import type { JSX } from "react";

export const IconMap: Record<string, JSX.Element> = {
  student: <PiStudentFill />,
  teacher: <FaChalkboardTeacher />,
  department: <BiSolidInstitution />,
  book: <FaBook />,
  enroll: <BsDatabaseFillAdd />,
  dashboard: <MdOutlineDashboard />,
  profile: <CgProfile />,
  result: <FaMagnifyingGlassChart />,
};
