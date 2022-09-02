import { SortType } from 'src/app/models/SortType';

export const sortOptions = [
  {
    key: SortType.DATE_DSC,
    value: 'sort_options.date_desc',
    icon: 'today',
  },
  {
    key: SortType.LIKES_DSC,
    value: 'sort_options.likes_desc',
    icon: 'favorite',
  },

  {
    key: SortType.AUTHOR_ASC,
    value: 'sort_options.author_asc',
    icon: 'person',
  },
  {
    key: SortType.AUTHOR_DSC,
    value: 'sort_options.author_desc',
    icon: 'person',
  },
  {
    key: SortType.TAGS_ASC,
    value: 'sort_options.tags_asc',
    icon: 'local_offer',
  },
  {
    key: SortType.TAGS_DSC,
    value: 'sort_options.tags_desc',
    icon: 'local_offer',
  },
  {
    key: SortType.DATE_ASC,
    value: 'sort_options.date_asc',
    icon: 'today',
  },
  {
    key: SortType.LIKES_ASC,
    value: 'sort_options.likes_asc',
    icon: 'favorite',
  },
];
