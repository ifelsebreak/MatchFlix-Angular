import {Group} from '../models/group'

export const GROUPS: Group[] = [
  {
    id: 1,
    name: 'Gnari',
    members: [1, 3, 5],
    admin: 1,
    minApprove: 2,
    movies: false,
    shows: true,
    genres: [18,36],
    matches: [0205]
  },
  {
    id: 2,
    name: 'Bestie',
    members: [2],
    admin: 1,
    minApprove: 2,
    movies: true,
    shows: true,
    genres: [18,10749],
    matches: [527641]
  },
  {
    id: 3,
    name: 'Family',
    members: [4, 6, 7, 8],
    admin: 7,
    minApprove: 3,
    movies: true,
    shows: false,
    genres: [18,36],
    matches: [0205]
  }
]