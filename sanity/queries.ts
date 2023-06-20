import { createClient, groq } from "next-sanity";
import { SanityProject } from "@/types/SanityProject";

const clientConfig = {
  projectId: "8jsfgput",
  dataset: "production",
  apiVersion: "2023-06-01",
};

export async function getProjects(): Promise<SanityProject[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "project"] | order(orderRank) {
        _id,
        _createdAt,
        title,
        tags,
        description,
        repo,
        demo,
        color,
        colspan
    }`
  );
}
