import { compareWithHash, hashIt } from '~/utils/hash';

const users: User[] = [];

export class User {
  id: string;
  username: string;
  hashedPassword: string;
  constructor(id: string, username: string, hashedPassword: string) {
    this.id = id;
    this.username = username;
    this.hashedPassword = hashedPassword;
  }
}

export async function findOrCreateUser(
  username: string,
  password: string
): Promise<User> {
  let user = users.find((user) => user.username === username);
  if (user) {
    if (!(await compareWithHash(password, user.hashedPassword))) {
      throw new Error('Invalid username or password');
    }
    return user;
  }
  const hashedPassword = await hashIt(password);
  user = new User(username, username, hashedPassword);
  users.push(user);
  return user;
}
