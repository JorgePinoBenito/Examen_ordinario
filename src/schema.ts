import { gql } from "graphql_tag";

export const typeDefs = gql`
  

  type Info {
    count: Int!
    pages: Int!
    next: String! | null!
    prev: String! | null!
  }
  
  type Loc {
    name: String!
    url: String!
  }

  enum Gender {
    name: String!
    url: String!
  }

  enum Gender {
    MALE 
    FEMALE 
    UNKNOWN
  }

  enum Status {
    ALIVE 
    DEATH 
    UNKNOWN 
  }

  type Character {
    id: Int!
    name: String!
    status: Status!
    species: String!
    type: String!
    gender: Gender!
    origin: Loc!
    location: Loc!
    image: String!
    episode: [String!]!
    url: String!
    created: String!
  }

  type CharactersData {
    info: Info;
    results: [Character!]!;
  }

  type Query {
    character(id: ID!): Character 
    charactersByIds(ids: [ID!]!): [Character]
  }
`;
