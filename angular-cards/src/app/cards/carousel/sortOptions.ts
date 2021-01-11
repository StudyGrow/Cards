import { SortType } from "src/app/models/SortType";

export const sortOptions = [
  {
    key: SortType.DATE_DSC,
    value: "Neueste",
    icon: "today",
  },
  {
    key: SortType.LIKES_DSC,
    value: "Meisten Likes",
    icon: "favorite",
  },

  {
    key: SortType.AUTHOR_ASC,
    value: "Author (A-Z)",
    icon: "person",
  },
  {
    key: SortType.AUTHOR_DSC,
    value: "Author (Z-A)",
    icon: "person",
  },
  {
    key: SortType.TAGS_ASC,
    value: "Tags (A-Z)",
    icon: "local_offer",
  },
  {
    key: SortType.TAGS_DSC,
    value: "Tags (Z-A)",
    icon: "local_offer",
  },
  {
    key: SortType.DATE_ASC,
    value: "Älteste",
    icon: "today",
  },
  {
    key: SortType.LIKES_ASC,
    value: "Wenigsten Likes",
    icon: "favorite",
  },
];
