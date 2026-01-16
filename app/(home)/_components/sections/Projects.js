import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    number: "01",
    title: "Devlinks",
    description:
      "Full-stack link sharing app with NextAuth.js authentication, Prisma ORM, Supabase storage for image uploads, and responsive Tailwind UI.",
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "Supabase"],
    link: "https://devlinks-pied.vercel.app/",
    codeLines: [
      { type: "keyword", keyword: "const", rest: "auth = NextAuth();" },
      { type: "keyword", keyword: "await", rest: "prisma.user.create();" },
      { type: "comment", content: "// Full-stack link sharing" },
    ],
    metrics: [
      { value: "Auth", label: "NextAuth.js" },
      { value: "Cloud", label: "Supabase" },
      { value: "Deployed", label: "Vercel" },
    ],
  },
  {
    number: "02",
    title: "Note Taking App",
    description:
      "Full-stack note-taking app with fulltext search, tag-based organization, customizable themes, and Google OAuth authentication.",
    tags: ["Next.js", "Redux Toolkit", "Prisma", "PostgreSQL"],
    link: "https://note-taking-web-app-lac.vercel.app/",
    codeLines: [
      { type: "keyword", keyword: "const", rest: "notes = useSelector(state);" },
      { type: "code", content: "dispatch(addNote({ tags }));" },
      { type: "comment", content: "// Search, organize, create" },
    ],
    metrics: [
      { value: "Auth", label: "Google OAuth" },
      { value: "State", label: "Redux" },
      { value: "Search", label: "Fulltext" },
    ],
  },
  {
    number: "03",
    title: "What to Cook",
    description:
      "Recipe discovery platform with editorial-inspired design and Spoonacular API integration. Find meals based on ingredients you have.",
    tags: ["Next.js", "React", "API Integration"],
    link: "https://what-to-cook-v2.vercel.app/",
    codeLines: [
      { type: "keyword", keyword: "const", rest: "recipes = await fetch(API);" },
      { type: "keyword", keyword: "return", rest: "recipes.filter(r);" },
      { type: "comment", content: "// What's for dinner?" },
    ],
    metrics: [
      { value: "API", label: "Spoonacular" },
      { value: "Design", label: "Editorial" },
      { value: "Deployed", label: "Vercel" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" className="min-h-screen py-20 px-6 bg-bg-card">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
