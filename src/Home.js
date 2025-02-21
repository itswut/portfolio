import { RiGlobeLine } from "react-icons/ri";
import { FaMapPin, FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { LuTimer } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { SiLua, SiJavascript, SiReact, SiPython } from "react-icons/si"; // Add skill icons
import './Home.css';

const userBox = {
    userData: {
        name: "Itswut",
        avatar: "https://kkmihai.is-cool.dev/_next/image?url=%2Fassets%2Favatar.png&w=128&q=75",
        status: "Available To Work",
        role: "Full Stack Developer",
    },
    tags: [
        { label: "Danish & English", icon: <RiGlobeLine style={{ color: "#0d6efd" }} /> },
        { label: "Denmark", icon: <FaMapPin style={{ color: "#f5333f" }} /> },
        { label: "UTC+3", icon: <LuTimer style={{ color: "#6c757d" }} /> },
        { label: "Coffee Addict", icon: <CiCoffeeCup style={{ color: "#795548" }} /> },
    ],
    buttons: [
        { label: "Contact", icon: <MdMailOutline style={{ color: "#f1f1f1" }} />, extraclass: "bg-primary text-primary-foreground hover:bg-primary/90" },
        { label: "GitHub", icon: <FaGithub style={{ color: "#6e5494" }} />, extraclass: "bg-secondary text-secondary-foreground hover:bg-secondary/80" },
    ],
    skills: [
        { label: "Lua", icon: <SiLua style={{ color: "#000080" }} />, level: "Advanced" },
        { label: "JavaScript", icon: <SiJavascript style={{ color: "#f7df1e" }} />, level: "Advanced" },
        { label: "React", icon: <SiReact style={{ color: "#61dafb" }} />, level: "Intermediate" },
        { label: "Python", icon: <SiPython style={{ color: "#306998" }} />, level: "Intermediate" },
    ],
};

export default function App() {
    const { userData, tags, buttons, skills } = userBox;

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {/* User Card */}
                <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-5 ml-5">
                    <div className="p-6 pt-0 mt-5">
                        <div className="flex flex-row items-center">
                            <img src={userData.avatar} alt="Author" className="rounded-2xl" width="100" height="100" />
                            <div className="ml-4 flex flex-col gap-y-1">
                                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mb-auto flex w-fit items-center justify-center gap-1 bg-green-500/20 text-green-500">
                                    <span className="font-semibold">{userData.status}</span>
                                </div>
                                <h1 className="text-2xl font-bold text-primary">{userData.name}</h1>
                                <div className="font-semibold text-gray-400">
                                    <div className="flex flex-col gap-1 md:flex-row md:items-center">
                                        I'm a <span className="font-bold text-primary">{userData.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tags */}
                        <div className="mt-5 flex max-w-[50vh] flex-wrap gap-2 rounded-xl bg-background p-3">
                            {tags.map((tag, index) => (
                                <div key={index} className="text-primary flex flex-row items-center gap-1 rounded-xl bg-secondary/60 py-1 pl-3 pr-4 transition duration-300 hover:scale-105 max-md:grow">
                                    {tag.icon}
                                    <p className="text-sm font-semibold text-gray-400">{tag.label}</p>
                                </div>
                            ))}
                        </div>
                        {/* Buttons */}                                    
                        <div className="mt-5 flex flex-row items-center gap-2">
                            {buttons.map((button, index) => (
                                <button key={index} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${button.extraclass} h-10 px-4 py-2 w-full gap-1`}>
                                    {button.icon}
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-5 ml-3 p-6">
                    <h1 className="text-2xl font-bold text-primary mb-4">Skills</h1>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-start p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-3xl" style={{ color: skill.icon.props.style.color }}>{skill.icon}</div>
                                    <p className="text-lg font-semibold text-primary">{skill.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}