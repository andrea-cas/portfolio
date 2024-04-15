import contentful, { type EntryFieldTypes } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export interface Project {
  contentTypeId: "project",
  fields: {
    slug: EntryFieldTypes.Text
    title: EntryFieldTypes.Text
    coverImage: EntryFieldTypes.AssetLink,
    // images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
    shortDescription: EntryFieldTypes.Text,
    longDescription: EntryFieldTypes.Text,
    technologies: EntryFieldTypes.Object,
    codeLink: EntryFieldTypes.Text,
    notebookLink: EntryFieldTypes.Text,
  }
}

export interface ProjectSlide {
  title: string;
  shortDescription: string;
  coverImage: string;
  slug: string;
}[];

export interface AssetCustom {
  fields: {
    file: {
      url: string;
    }
  }
};
