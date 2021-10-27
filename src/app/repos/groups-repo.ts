import {Group} from '../models/group'

export const GROUPS: Group[] = [
  {
    id: 1,
    name: 'Famiglia',
    pic: 'https://picsum.photos/100/100',
    members: [1, 3, 4, 5],
    admin: 1,
    minApprove: 4,
    movies: true,
    shows: false,
    genres: [18,36],
    matches: [205, 63174]
  },
  {
    id: 2,
    name: 'Bestie',
    pic: 'https://thispersondoesnotexist.com/image',
    members: [1, 2],
    admin: 1,
    minApprove: 2,
    movies: true,
    shows: true,
    genres: [18,10749],
    matches: []
  },
  {
    id: 3,
    name: 'Gnari',
    pic: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZyaWVuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    members: [1, 6, 7, 8],
    admin: 7,
    minApprove: 3,
    movies: false,
    shows: true,
    genres: [10765, 80],
    matches: [63174]
  }
]