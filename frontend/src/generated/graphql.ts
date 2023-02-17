import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddCardInput = {
  content: Scalars['String'];
  latex: Scalars['Float'];
  lectureAbbreviation: Scalars['String'];
  tags: Array<Scalars['String']>;
  thema: Scalars['String'];
};

export type AddLectureInput = {
  abrv: Scalars['String'];
  name: Scalars['String'];
  tagList?: InputMaybe<Array<Scalars['String']>>;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  /** User */
  user: User;
};

export type Card = {
  __typename?: 'Card';
  author: User;
  authorName?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latex?: Maybe<Scalars['Float']>;
  lecture: Lecture;
  rating?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<Scalars['String']>>;
  thema: Scalars['String'];
};

export type CardEdge = {
  __typename?: 'CardEdge';
  cursor: Scalars['String'];
  node: Card;
};

export type CardEdges = {
  __typename?: 'CardEdges';
  edges?: Maybe<Array<CardEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CardOrder = {
  direction: OrderDirection;
};

export type CastVoteInput = {
  cardId: Scalars['String'];
  value: Scalars['Float'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Lecture = {
  __typename?: 'Lecture';
  abrv?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Card>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tagList?: Maybe<Array<Scalars['String']>>;
  totalCards?: Maybe<Scalars['Float']>;
};

export type LectureEdge = {
  __typename?: 'LectureEdge';
  cursor: Scalars['String'];
  node: Lecture;
};

export type LectureEdges = {
  __typename?: 'LectureEdges';
  edges?: Maybe<Array<LectureEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LectureOrder = {
  direction: OrderDirection;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCard: Card;
  addLecture: Lecture;
  castVote: Vote;
  changePassword: User;
  deleteUser: Scalars['Boolean'];
  login: Auth;
  refreshToken: Token;
  register: Auth;
  updateCard: Card;
  updateUser: User;
};


export type MutationAddCardArgs = {
  data: AddCardInput;
};


export type MutationAddLectureArgs = {
  data: AddLectureInput;
};


export type MutationCastVoteArgs = {
  data: CastVoteInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: CreateUserInput;
};


export type MutationUpdateCardArgs = {
  input: UpdateCardInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  card: Card;
  cards: CardEdges;
  lecture?: Maybe<Lecture>;
  lectures: LectureEdges;
  me: User;
  votes?: Maybe<Array<Vote>>;
};


export type QueryCardArgs = {
  id: Scalars['ID'];
};


export type QueryCardsArgs = {
  orderBy?: InputMaybe<CardOrder>;
};


export type QueryLectureArgs = {
  abrv?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLecturesArgs = {
  orderBy?: InputMaybe<LectureOrder>;
};


export type QueryVotesArgs = {
  lectureAbbreviation?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
};

export type UpdateCardInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  latex?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  thema?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Vote = {
  __typename?: 'Vote';
  card: Card;
  id?: Maybe<Scalars['String']>;
  lecture: Lecture;
  user: User;
  value: Scalars['Float'];
};

export type VoteEdge = {
  __typename?: 'VoteEdge';
  cursor: Scalars['String'];
  node: Vote;
};

export type AddCardMutationVariables = Exact<{
  lectureAbbreviation: Scalars['String'];
  thema: Scalars['String'];
  content: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
  latex: Scalars['Float'];
}>;


export type AddCardMutation = { __typename?: 'Mutation', addCard: { __typename?: 'Card', id?: string | null, thema: string, content: string, tags?: Array<string> | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null, lecture: { __typename?: 'Lecture', abrv?: string | null } } };

export type AddLectureMutationVariables = Exact<{
  name: Scalars['String'];
  abrv: Scalars['String'];
  tagList?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type AddLectureMutation = { __typename?: 'Mutation', addLecture: { __typename?: 'Lecture', id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null } };

export type CastVoteMutationVariables = Exact<{
  cardId: Scalars['String'];
  value: Scalars['Float'];
}>;


export type CastVoteMutation = { __typename?: 'Mutation', castVote: { __typename?: 'Vote', id?: string | null, value: number, user: { __typename?: 'User', id: string }, card: { __typename?: 'Card', id?: string | null }, lecture: { __typename?: 'Lecture', id?: string | null } } };

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', register: { __typename?: 'Auth', refreshToken: string, accessToken: string } };

export type GetLectureByAbbreviationWithCardsAndVotesQueryVariables = Exact<{
  abrv: Scalars['String'];
}>;


export type GetLectureByAbbreviationWithCardsAndVotesQuery = { __typename?: 'Query', lecture?: { __typename?: 'Lecture', id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null, cards?: Array<{ __typename?: 'Card', id?: string | null, thema: string, content: string, tags?: Array<string> | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null }> | null } | null, votes?: Array<{ __typename?: 'Vote', value: number, id?: string | null, card: { __typename?: 'Card', id?: string | null }, lecture: { __typename?: 'Lecture', id?: string | null } }> | null };

export type GetLectureQueryVariables = Exact<{
  abrv: Scalars['String'];
}>;


export type GetLectureQuery = { __typename?: 'Query', lecture?: { __typename?: 'Lecture', id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null } | null };

export type GetLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLecturesQuery = { __typename?: 'Query', lectures: { __typename?: 'LectureEdges', totalCount: number, edges?: Array<{ __typename?: 'LectureEdge', node: { __typename?: 'Lecture', id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null } }> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: string | null } } };

export type GetLecturesWithCardsAndVotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLecturesWithCardsAndVotesQuery = { __typename?: 'Query', lectures: { __typename?: 'LectureEdges', totalCount: number, edges?: Array<{ __typename?: 'LectureEdge', cursor: string, node: { __typename?: 'Lecture', abrv?: string | null, id?: string | null, name?: string | null, tagList?: Array<string> | null, totalCards?: number | null, cards?: Array<{ __typename?: 'Card', authorName?: string | null, content: string, date?: any | null, id?: string | null, latex?: number | null, rating?: number | null, tags?: Array<string> | null, thema: string, author: { __typename?: 'User', id: string } }> | null } }> | null } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, confirmed: boolean, createdAt: any, email: string, firstname: string, lastname: string, status: string, updatedAt: any } };

export type RemoveUserMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type UpdateCardMutationVariables = Exact<{
  id: Scalars['String'];
  thema: Scalars['String'];
  content: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
  latex: Scalars['Float'];
}>;


export type UpdateCardMutation = { __typename?: 'Mutation', updateCard: { __typename?: 'Card', id?: string | null, thema: string, content: string, tags?: Array<string> | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null, lecture: { __typename?: 'Lecture', abrv?: string | null }, author: { __typename?: 'User', id: string } } };

export type UpdateUserMutationVariables = Exact<{
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, confirmed: boolean, createdAt: any, email: string, firstname: string, lastname: string, status: string, updatedAt: any } };

export const AddCardDocument = gql`
    mutation AddCard($lectureAbbreviation: String!, $thema: String!, $content: String!, $tags: [String!]!, $latex: Float!) {
  addCard(
    data: {lectureAbbreviation: $lectureAbbreviation, thema: $thema, content: $content, tags: $tags, latex: $latex}
  ) {
    id
    thema
    content
    content
    tags
    authorName
    date
    latex
    rating
    lecture {
      abrv
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddCardGQL extends Apollo.Mutation<AddCardMutation, AddCardMutationVariables> {
    document = AddCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddLectureDocument = gql`
    mutation AddLecture($name: String!, $abrv: String!, $tagList: [String!]) {
  addLecture(data: {name: $name, abrv: $abrv, tagList: $tagList}) {
    id
    name
    abrv
    tagList
    totalCards
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddLectureGQL extends Apollo.Mutation<AddLectureMutation, AddLectureMutationVariables> {
    document = AddLectureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CastVoteDocument = gql`
    mutation CastVote($cardId: String!, $value: Float!) {
  castVote(data: {cardId: $cardId, value: $value}) {
    id
    user {
      id
    }
    card {
      id
    }
    lecture {
      id
    }
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CastVoteGQL extends Apollo.Mutation<CastVoteMutation, CastVoteMutationVariables> {
    document = CastVoteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateAccountDocument = gql`
    mutation CreateAccount($username: String!, $lastName: String, $firstName: String, $email: String!, $password: String!) {
  register(
    data: {username: $username, lastname: $lastName, firstname: $firstName, email: $email, password: $password}
  ) {
    refreshToken
    accessToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAccountGQL extends Apollo.Mutation<CreateAccountMutation, CreateAccountMutationVariables> {
    document = CreateAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLectureByAbbreviationWithCardsAndVotesDocument = gql`
    query GetLectureByAbbreviationWithCardsAndVotes($abrv: String!) {
  lecture(abrv: $abrv) {
    id
    name
    abrv
    tagList
    totalCards
    cards {
      id
      thema
      content
      tags
      authorName
      date
      latex
      rating
    }
  }
  votes {
    card {
      id
    }
    lecture {
      id
    }
    value
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLectureByAbbreviationWithCardsAndVotesGQL extends Apollo.Query<GetLectureByAbbreviationWithCardsAndVotesQuery, GetLectureByAbbreviationWithCardsAndVotesQueryVariables> {
    document = GetLectureByAbbreviationWithCardsAndVotesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLectureDocument = gql`
    query getLecture($abrv: String!) {
  lecture(abrv: $abrv) {
    id
    name
    abrv
    tagList
    totalCards
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLectureGQL extends Apollo.Query<GetLectureQuery, GetLectureQueryVariables> {
    document = GetLectureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLecturesDocument = gql`
    query GetLectures {
  lectures {
    edges {
      node {
        id
        name
        abrv
        tagList
        totalCards
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLecturesGQL extends Apollo.Query<GetLecturesQuery, GetLecturesQueryVariables> {
    document = GetLecturesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLecturesWithCardsAndVotesDocument = gql`
    query GetLecturesWithCardsAndVotes {
  lectures {
    edges {
      cursor
      node {
        abrv
        cards {
          author {
            id
          }
          authorName
          content
          date
          id
          latex
          rating
          tags
          thema
        }
        id
        name
        tagList
        totalCards
      }
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLecturesWithCardsAndVotesGQL extends Apollo.Query<GetLecturesWithCardsAndVotesQuery, GetLecturesWithCardsAndVotesQueryVariables> {
    document = GetLecturesWithCardsAndVotesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserDocument = gql`
    query GetUser {
  me {
    id
    confirmed
    createdAt
    email
    firstname
    lastname
    status
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
    document = GetUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveUserDocument = gql`
    mutation RemoveUser {
  deleteUser
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveUserGQL extends Apollo.Mutation<RemoveUserMutation, RemoveUserMutationVariables> {
    document = RemoveUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCardDocument = gql`
    mutation UpdateCard($id: String!, $thema: String!, $content: String!, $tags: [String!]!, $latex: Float!) {
  updateCard(
    input: {id: $id, thema: $thema, content: $content, tags: $tags, latex: $latex}
  ) {
    id
    lecture {
      abrv
    }
    author {
      id
    }
    thema
    content
    content
    tags
    authorName
    date
    latex
    rating
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCardGQL extends Apollo.Mutation<UpdateCardMutation, UpdateCardMutationVariables> {
    document = UpdateCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateUserDocument = gql`
    mutation UpdateUser($firstname: String, $lastname: String) {
  updateUser(data: {firstname: $firstname, lastname: $lastname}) {
    id
    confirmed
    createdAt
    email
    firstname
    lastname
    status
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }