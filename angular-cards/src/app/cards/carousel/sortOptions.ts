export enum sortType {
  DATE_ASC = "dat.up",
  DATE_DSC = "dat.down",
  AUTHOR_ASC = "auth.up",
  AUTHOR_DSC = "auth.down",
  TAGS_ASC = "tags.up",
  TAGS_DSC = "tags.down",
  LIKES_ASC = "likes.up",
  LIKES_DSC = "likes.down",
}

export const sortOptions = [
  {
    key: sortType.DATE_DSC,
    value: "Neueste",
    icon: "today",
  },
  {
    key: sortType.LIKES_DSC,
    value: "Meisten Likes",
    icon: "favorite",
  },

  {
    key: sortType.AUTHOR_ASC,
    value: "Author (A-Z)",
    icon: "person",
  },
  {
    key: sortType.AUTHOR_DSC,
    value: "Author (Z-A)",
    icon: "person",
  },
  {
    key: sortType.TAGS_ASC,
    value: "Tags (A-Z)",
    icon: "local_offer",
  },
  {
    key: sortType.TAGS_DSC,
    value: "Tags (Z-A)",
    icon: "local_offer",
  },
  {
    key: sortType.DATE_ASC,
    value: "Älteste",
    icon: "today",
  },
  {
    key: sortType.LIKES_ASC,
    value: "Wenigsten Likes",
    icon: "favorite",
  },
];
