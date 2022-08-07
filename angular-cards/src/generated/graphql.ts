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
  lectureId: Scalars['String'];
  value: Scalars['Float'];
};

export type DeleteUserInput = {
  userId: Scalars['String'];
};

export type EditUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleEnum>;
  userId: Scalars['String'];
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

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a new card with for a given lecture. */
  addCard: Card;
  /** Add a new lecture with a given unique abbreviation. */
  addLecture: Lecture;
  castVote: Vote;
  /** ADMIN ONLY: Remove user by admin by providing userId */
  deleteUser: Scalars['Boolean'];
  /** ADMIN ONLY: Admin only can edit user by providing userId */
  editUser: User;
  /** Password should pass this regex validation test:  /^[w!@#%&/(){}[]=?+*^~-.:,;]{1,32}$/ */
  register: User;
  /** Remove user based on logged in user */
  removeUser: Scalars['Boolean'];
  /** Sends password reset mail. Returns true if mail was sent. */
  requestAccountPasswordReset: Scalars['Boolean'];
  /** Sends password reset mail. Returns true if mail was sent. */
  resetAccountPassword: Scalars['Boolean'];
  /** Update an existing card with for a given lecture. */
  updateCard: Card;
  /** Update user based on logged in user, Password should pass this regex validation test:  /^[w!@#%&/(){}[]=?+*^~-.:,;]{1,32}$/ */
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


export type MutationDeleteUserArgs = {
  data: DeleteUserInput;
};


export type MutationEditUserArgs = {
  data: EditUserInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationRequestAccountPasswordResetArgs = {
  data: RequestAccountPasswordResetInput;
};


export type MutationResetAccountPasswordArgs = {
  data: ResetAccountPasswordInput;
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
  getLecture: Lecture;
  getLectures: Array<Lecture>;
  getUser: User;
  getUsers: Array<User>;
  getVotes: Array<Vote>;
  /**
   * Login user.
   *       Returns user with authentication token and refresh token.
   *       Authentication token is valid for 10m and refresh token is valid for  30d.
   *       If refresh token is still valid authentication token will be generated automatically
   *       on every request which needs authentication and returned.
   *       If refresh token is expired, user must login again, in this case
   *       an error with message "Refresh Token invalid" or "Refresh Token expired" will be returned.
   */
  login: User;
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


export type QueryLoginArgs = {
  data: LoginInput;
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RequestAccountPasswordResetInput = {
  email: Scalars['String'];
};

export type ResetAccountPasswordInput = {
  /** Reset token to verify ownership or access to registered email */
  code: Scalars['String'];
  /** Mail of user who want to reset a password */
  email: Scalars['String'];
  /** New password. Must satisfy password policy */
  password: Scalars['String'];
};

/** RoleEnum */
export enum RoleEnum {
  Admin = 'admin',
  User = 'user'
}

export type UpdateCardInput = {
  _id: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  latex?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  thema?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  darkModeEnabled?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  confirmed: Scalars['Boolean'];
  creationDate?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  role: RoleEnum;
  status: Scalars['String'];
  surname?: Maybe<Scalars['String']>;
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

export type GetLectureByAbbreviationWithCardsAndVotesQueryVariables = Exact<{
  abrv: Scalars['String'];
}>;


export type GetLectureByAbbreviationWithCardsAndVotesQuery = { __typename?: 'Query', getLecture: { __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null, cards?: Array<{ __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null }> | null, votes?: Array<{ __typename?: 'Vote', _id?: string | null, userId?: string | null, cardId?: string | null, lectureId?: string | null, value?: number | null }> | null } };

export type GetLecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLecturesQuery = { __typename?: 'Query', getLectures: Array<{ __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null }> };

export type GetLecturesWithCardsAndVotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLecturesWithCardsAndVotesQuery = { __typename?: 'Query', getLectures: Array<{ __typename?: 'Lecture', _id?: string | null, name?: string | null, abrv?: string | null, tagList?: Array<string> | null, totalCards?: number | null, cards?: Array<{ __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null }> | null, votes?: Array<{ __typename?: 'Vote', _id?: string | null, userId?: string | null, cardId?: string | null, lectureId?: string | null, value?: number | null }> | null }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', _id: string, role: RoleEnum, username: string, email: string, creationDate?: any | null, name?: string | null, surname?: string | null, status: string, confirmed: boolean } };

export type LoginQueryVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'User', _id: string, role: RoleEnum, username: string, email: string, creationDate?: any | null, name?: string | null, surname?: string | null, status: string, confirmed: boolean } };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', _id: string, role: RoleEnum, username: string, email: string, creationDate?: any | null, name?: string | null, surname?: string | null, status: string, confirmed: boolean } };

export type UpdateCardMutationVariables = Exact<{
  _id: Scalars['String'];
  thema: Scalars['String'];
  content: Scalars['String'];
  tags: Array<Scalars['String']> | Scalars['String'];
  latex: Scalars['Float'];
}>;


export type UpdateCardMutation = { __typename?: 'Mutation', updateCard: { __typename?: 'Card', _id?: string | null, lectureAbreviation: string, thema: string, content: string, tags?: Array<string> | null, authorId?: string | null, authorName?: string | null, date?: any | null, latex?: number | null, rating?: number | null } };

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
    role
    username
    email
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
export const LoginDocument = gql`
    query Login($username: String!, $password: String!) {
  login(data: {username: $username, password: $password}) {
    _id
    role
    username
    email
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
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(data: {username: $username, email: $email, password: $password}) {
    _id
    role
    username
    email
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
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
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