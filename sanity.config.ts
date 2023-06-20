import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

const config = defineConfig({
  projectId: "8jsfgput",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2023-06-01",
  basePath: "/studio",
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({
              type: "project",
              title: "Projects",
              S,
              context,
            }),
          ]);
      },
    }),
  ],
  schema: { types: schemas },
});

export default config;
