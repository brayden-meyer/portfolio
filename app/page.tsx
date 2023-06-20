import { getProjects } from "@/sanity/queries";
import Project from "./Project";
import { SanityProject } from "@/types/SanityProject";

const github = "https://www.github.com/brayden-meyer";

export default async function Home() {
  const projects = await getProjects();

  const isWindows = false;

  return (
    <div className="dark:text-white dark:bg-gray-900">
      <div className="relative mb-40 bg-[url('/light-hero.jpg')] bg-cover bg-fixed bg-center">
        <div className="relative mx-auto max-w-7xl px-10 pb-48 pt-48 text-4xl z-10">
          <h1 className="mb-6">
            <span className="font-serif font-bold">Brayden Meyer </span> is a
            web & software developer based in{" "}
            {isWindows ? <span>Canada</span> : <span>&nbsp;🇨🇦</span>}
          </h1>
          <span className="text-3xl text-gray-400 decoration-dotted">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-8 transition-colors hover:text-[#6e5494]"
            >
              GitHub →
            </a>
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white dark:from-gray-900/80 dark:to-gray-900"></div>
      </div>

      <div className="mx-auto max-w-7xl px-10 pb-20 relative">
        <div className="grid grid-cols-1 grid-flow-row-dense lg:grid-cols-6">
          {projects.map((project) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
        <h2 className="absolute -top-12 left-9 text-7xl font-extrabold">
          Projects.
        </h2>
      </div>
    </div>
  );
}

export { github };
