export interface Project {
  sys: Sys
  slug: string
  title: string
  description: string
  codeLink: string
  technologies: Technology[]
  coverImage: CoverImage
}

export interface Sys {
  id: string
}

export interface Technology {
  name: string,
  description: string,
}

export interface CoverImage {
  url: string
}
