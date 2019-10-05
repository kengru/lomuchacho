export interface Muchacho {
  username: string,
  name: string,
  birthday: string,
  photo: string,
  quote: string
};

export interface ProfileProps {
  muchachos: Muchacho[],
  user: string
};

export interface ImageProps {
  photo: string,
  name: string
};