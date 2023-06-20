import { github } from "./page";
import { SanityProject } from "@/types/SanityProject";

export default function Project({ project }: { project: SanityProject }) {
  return (
    <div
      className={`bg-${project.color}-400 dark:bg-${project.color}-700 lg:col-span-${project.colspan} p-24 flex flex-col items-center`}
    >
      <h3 className="text-center mb-4 text-3xl font-bold">{project.title}</h3>
      <div className="mb-8 flex items-center space-x-4">
        {project.tags.map((tag: string, index: number) => (
          <div
            key={index}
            className="flex h-8 items-center justify-center rounded-full bg-black px-2 text-white"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="text-center">{project.description}</p>
      <a
        href={`${github}/${project.repo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold mt-4 hover:text-white dark:hover:text-black transition-colors"
      >
        GitHub →
      </a>
    </div>
  );
}
