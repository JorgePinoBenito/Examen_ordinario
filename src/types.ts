export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type Loc = {
  name: string;
  url: string;
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  unknown = "UNKNOWN",
}

export enum Status {
  ALIVE = "ALIVE",
  DEATH = "DEATH",
  UNKNOWN = "UNKNOWN",
}

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Loc;
  location: Loc;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharactersData = {
  info: Info;
  results: Character[];
};
