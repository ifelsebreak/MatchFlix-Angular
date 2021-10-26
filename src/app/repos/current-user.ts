import {User} from '../models/user'

export const CURRENT_USER: User =
  {
    id: 1,
    name: 'Albi',
    avatar_path: 'https://picsum.photos/100/100',
    groups: [1, 2, 3],
    likes: [205, 63174, 527641],
    saves: [6859],
    favoriteGroup: 2
  }