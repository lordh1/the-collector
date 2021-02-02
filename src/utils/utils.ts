import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

export const comparePasswordAndHash = (password: string, hash: string) => {
  const test = bcrypt.compareSync(password, hash);
  return test;
};
