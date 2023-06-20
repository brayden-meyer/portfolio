import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    orderRankField({ type: "project" }),
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "repo",
      title: "GitHub Repository Name",
      type: "string",
    },
    {
      name: "demo",
      title: "Demo URL",
      type: "url",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          "slate",
          "gray",
          "zinc",
          "neutral",
          "stone",
          "red",
          "orange",
          "amber",
          "yellow",
          "lime",
          "green",
          "emerald",
          "teal",
          "cyan",
          "sky",
          "blue",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
        ],
      },
    },
    {
      name: "colspan",
      title: "Column Span",
      description:
        "The number of columns, out of 6, this project should occupy in the grid.",
      type: "number",
    },
  ],
};

export default project;
