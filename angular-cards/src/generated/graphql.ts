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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AddCardInput = {
  content: Scalars['String'];
  latex: Scalars['Float'];
  lectureAbreviation: Scalars['String'];
  tags: Array<Scalars['String']>;
  thema: Scalars['String'];
};

export type AddLectureInput = {
  abrv: Scalars['String'];
  name: Scalars['String'];
  tagList?: InputMaybe<Array<Scalars['String']>>;
};

export type Card = {
  __typename?: 'Card';
  _id?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  date?: Maybe<Scalars['DateTime']>;
  latex?: Maybe<Scalars['Float']>;
  lectureAbreviation: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<Scalars['String']>>;
  thema: Scalars['String'];
};

export type CastVoteInput = {
  cardId: Scalars['String'];
  value: Scalars['Float'];
};

export type CreateAccountInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type GetCardsInput = {
  lectureAbbreviation: Scalars['String'];
};

export type GetLectureInput = {
  abrv: Scalars['String'];
};

export type GetVotesInput = {
  lectureAbbreviation: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type Lecture = {
  __typename?: 'Lecture';
  _id?: Maybe<Scalars['String']>;
  abrv?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Card>>;
  name?: Maybe<Scalars['String']>;
  tagList?: Maybe<Array<Scalars['String']>>;
  totalCards?: Maybe<Scalars['Float']>;
  votes?: Maybe<Array<Vote>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a new card with for a given lecture. */
  addCard: Card;
  /** Add a new lecture with a given unique abbreviation. */
  addLecture: Lecture;
  castVote: Vote;
  createAccount: User;
  /** Remove user based on logged in user */
  removeUser: Scalars['Boolean'];
  /** Update an existing card with for a given lecture. */
  updateCard: Card;
  /** Update user based on logged in user */
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


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationUpdateCardArgs = {
  data: UpdateCardInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get cards for a given lecture. */
  getCards: Array<Card>;
  getLecture?: Maybe<Lecture>;
  getLectures: Array<Lecture>;
  getUser: User;
  getVotes: Array<Vote>;
};


export type QueryGetCardsArgs = {
  data: GetCardsInput;
};


export type QueryGetLectureArgs = {
  data: GetLectureInput;
};


export type QueryGetVotesArgs = {
  data: GetVotesInput;
};

export type UpdateCardInput = {
  _id: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  latex?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  thema?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  darkModeEnabled?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  confirmed: Scalars['Boolean'];
  creationDate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  surname?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  username: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  _id?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['String']>;
  lectureId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type AddCardMutationVariables = Exact<{
  lectureAbreviation: Scalars['String'];
  thema: Scalars['String'];
  content: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
  latex: Scalars['Float'];
}>;


export type AddCardMutation = { __typename?: 'Mutation', addCard: { __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null } };

export type AddLectureMutationVariables = Exact<{
  name: Scalars['String'];
  abrv: Scalars['String'];
  tagList?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type AddLectureMutation = { __typename?: 'Mutation', addLecture: { __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null } };

export type CastVoteMutationVariables = Exact<{
  cardId: Scalars['String'];
  value: Scalars['Float'];
}>;


export type CastVoteMutation = { __typename?: 'Mutation', castVote: { __typename?: 'Vote', _id?: string | null, userId?: string | null, cardId?: string | null, lectureId?: string | null, value?: number | null } };

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'User', _id: string, username: string, creationDate?: any | null, name?: string | null, surname?: string | null, status: string, confirmed: boolean } };

export type GetLectureByAbbreviationWithCardsAndVotesQueryVariables = Exact<{
  abrv: Scalars['String'];
}>;


export type GetLectureByAbbreviationWithCardsAndVotesQuery = { __typename?: 'Query', getLecture?: { __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null, cards?: Array<{ __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null }> | null, votes?: Array<{ __typename?: 'Vote', _id?: string | null, userId?: string | null, cardId?: string | null, lectureId?: string | null, value?: number | null }> | null } | null };

export type GetLectureQueryVariables = Exact<{
  abrv: Scalars['String'];
}>;


export type GetLectureQuery = { __typename?: 'Query', getLecture?: { __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null } | null };

export type GetLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLecturesQuery = { __typename?: 'Query', getLectures: Array<{ __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null }> };

export type GetLecturesWithCardsAndVotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLecturesWithCardsAndVotesQuery = { __typename?: 'Query', getLectures: Array<{ __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null, cards?: Array<{ __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null }> | null, votes?: Array<{ __typename?: 'Vote', _id?: string | null, userId?: string | null, cardId?: string | null, lectureId?: string | null, value?: number | null }> | null }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', _id: string, username: string, creationDate?: any | null, name?: string | null, surname?: string | null, status: string, confirmed: boolean } };

export type RemoveUserMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: boolean };

export type UpdateCardMutationVariables = Exact<{
  _id: Scalars['String'];
  thema: Scalars['String'];
  content: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
  latex: Scalars['Float'];
}>;


export type UpdateCardMutation = { __typename?: 'Mutation', updateCard: { __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null } };

export type UpdateUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', _id: string, username: string, creationDate?: any | null, name?: string | null, surname?: string | null, status: string, confirmed: boolean } };

export const AddCardDocument = gql`
    mutation AddCard($lectureAbreviation: String!, $thema: String!, $content: String!, $tags: [String!]!, $latex: Float!) {
  addCard(
    data: {lectureAbreviation: $lectureAbreviation, thema: $thema, content: $content, tags: $tags, latex: $latex}
  ) {
    _id
    lectureAbreviation
    thema
    content
    content
    tags
    authorId
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
  export class AddCardGQL extends Apollo.Mutation<AddCardMutation, AddCardMutationVariables> {
    document = AddCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddLectureDocument = gql`
    mutation AddLecture($name: String!, $abrv: String!, $tagList: [String!]) {
  addLecture(data: {name: $name, abrv: $abrv, tagList: $tagList}) {
    _id
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
    _id
    userId
    cardId
    lectureId
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
    mutation CreateAccount($username: String!, $lastName: String, $firstName: String) {
  createAccount(
    data: {username: $username, lastName: $lastName, firstName: $firstName}
  ) {
    _id
    username
    creationDate
    name
    surname
    status
    confirmed
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
  getLecture(data: {abrv: $abrv}) {
    _id
    name
    abrv
    tagList
    totalCards
    cards {
      _id
      lectureAbreviation
      thema
      content
      tags
      authorId
      authorName
      date
      latex
      rating
    }
    votes {
      _id
      userId
      cardId
      lectureId
      value
    }
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
  getLecture(data: {abrv: $abrv}) {
    _id
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
  getLectures {
    _id
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
  export class GetLecturesGQL extends Apollo.Query<GetLecturesQuery, GetLecturesQueryVariables> {
    document = GetLecturesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLecturesWithCardsAndVotesDocument = gql`
    query GetLecturesWithCardsAndVotes {
  getLectures {
    _id
    name
    abrv
    tagList
    totalCards
    cards {
      _id
      lectureAbreviation
      thema
      content
      tags
      authorId
      authorName
      date
      latex
      rating
    }
    votes {
      _id
      userId
      cardId
      lectureId
      value
    }
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
  getUser {
    _id
    username
    creationDate
    name
    surname
    status
    confirmed
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
  removeUser
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
    mutation UpdateCard($_id: String!, $thema: String!, $content: String!, $tags: [String!]!, $latex: Float!) {
  updateCard(
    data: {_id: $_id, thema: $thema, content: $content, tags: $tags, latex: $latex}
  ) {
    _id
    lectureAbreviation
    thema
    content
    content
    tags
    authorId
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
    mutation UpdateUser($username: String, $firstName: String, $lastName: String) {
  updateUser(
    data: {username: $username, firstName: $firstName, lastName: $lastName}
  ) {
    _id
    username
    creationDate
    name
    surname
    status
    confirmed
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