import { ObjectId } from "mongo";
import { Info, Loc, Character, CharactersData } from "../types.ts";

const fetchCharacters = async (
  page: number,
  id?: number
): Promise<CharactersData> => {
  const response = await fetch(
    `https://rickandmortyapi.com/graphql/character/?page=${page}${
      id ? `&id=${id}` : ""
    }`
  );
  const data = await response.json();
  return data;
};

const fetchAllCharacters = async (id?: number): Promise<Character[]> => {
  const numberOfPages = (await fetchCharacters(1, id)).info.pages;
  const pageNumbers: number[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const characters = await Promise.all(
    pageNumbers.map((page) => fetchCharacters(page, id))
  );

  const allCharacters = characters.flatMap((character) => character.results);
  return allCharacters;
};

export const Query = {
  character: async (
    _: unknown,
    args: {
      id: number;
    }
  ): Promise<Character | undefined> => {
    try {
      const { id } = args;
      const characters: Character[] = await fetchAllCharacters(id);
      const character: Character | undefined = characters.find(
        (x) => x.id === id
      );
      return character;
    } catch (e) {
      throw new Error(e);
    }
  },
  /*charactersByIds: async (
    _: unknown,
    args: {
      ids: number[];
    }
  ): Promise<Character[]> => {
    try {
      const { ids } = args;
      const result: Character[] = await ids.forEach(fetchAllCharacters);

      return result;
    } catch (e) {
      throw new Error(e);
    }
  },*/
};
