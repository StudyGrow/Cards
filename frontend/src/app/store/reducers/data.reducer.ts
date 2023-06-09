import { Action, createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/models/Card';
import { Data } from 'src/app/models/State';
import { User } from 'src/app/models/User';
import { Vote } from 'src/app/models/Vote';
import * as CardActions from '../actions/CardActions';
import * as LectureActions from '../actions/LectureActions';
import * as UserActions from '../actions/UserActions';

export const dataReducerKey = 'data';

const initialState: Data = {
  cards: {
    cards: undefined,
    votes: undefined,
    lastUpdated: undefined,
    currLecture: undefined,
  },
  user: {
    votes: undefined,
    cards: undefined,
    authenticated: undefined,
    user: new User(),
    lastUpdated: undefined,
    reports: undefined,
  },
  lectures: {
    lectures: undefined,
    lastUpdated: undefined,
  },
};

const _dataReducer = createReducer(
  initialState,

  on(CardActions.storeCard, (state, { card }) => ({
    ...state,
    cards: {
      ...state.cards,
      cards: [
        ...state.cards.cards,
        {
          // add card
          ...card,
          authorId: state.user.user._id, // add user id
          authorName: state.user.user.username, // add username
        },
      ],
      lastUpdated: new Date(),
    },
  })),
  on(CardActions.storeVotes, (state, { votes }) =>
    votes
      ? {
          ...state,

          user: {
            ...state.user,
            votes: [...votes],
          },
        }
      : state
  ),
  on(CardActions.updateVoteChange, (state, { vote }) => ({
    ...state,
    cards: {
      ...state.cards,
      votes: updateVote(state.cards.votes, vote),
    },
    user: {
      ...state.user,
      votes: updateVote(state.user.votes, vote),
    },
  })),
  on(LectureActions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectures: {
      ...state.lectures,
      lectures: [...lectures],
      lastUpdated: new Date(),
    },
  })),

  on(LectureActions.addLercture, (state, { lecture }) => ({
    ...state,
    lectures: {
      ...state.lectures,
      lectures: [...state.lectures.lectures, lecture],
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.updateChangedCard, (state, { card }) => ({
    ...state,
    cards: {
      ...state.cards,
      cards: updateObjectInArray(state.cards.cards, card),
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.storeCardData, (state, { data }) => ({
    ...state,
    cards: {
      ...state.cards,
      cards: data.cards,
      lastUpdated: new Date(),
      currLecture: data.lecture,
      votes: data.votes,
    },
    user: {
      ...state.user,
      user: {
        ...state.user.user,
        _id: data.uid,
      },
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.fetchUserDataSuccess, (state, info) => ({
    ...state,
    user: {
      ...state.user,
      cards: info.cards,
      user: info.user,
      lastUpdated: new Date(),
      reports: info.reports,
    },
  })),

  on(UserActions.updateUserDataSuccess, (state, user) => ({
    ...state,
    user: { ...state.user, user: user, lastUpdated: new Date() },
  })),

  on(UserActions.authenticated, (state, { auth }) => ({
    ...state,
    user: {
      ...state.user,
      authenticated: auth,
    },
  })),

  on(UserActions.loginSuccess, (state, user) => ({
    ...state,
    user: {
      ...state.user,
      user: user,
      authenticated: true,
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.logoutSuccess, (state) => ({
    ...state,
    user: initialState.user,
  })),

  on(LectureActions.addTagsToLecture, (state, { tags }) => ({
    ...state,
    cards: {
      ...state.cards,
      currLecture: {
        ...state.cards.currLecture,
        tagList: addTags(state.cards.currLecture.tagList ? [...state.cards.currLecture.tagList] : [], tags),
      },
    },
  })),

  on(CardActions.clearCardData, (state) => ({
    ...state,
    cards: {
      ...state.cards,
      votes: initialState.cards.votes,
      cards: initialState.cards.cards,
      currLecture: initialState.cards.currLecture,
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.updateReportedCard, (state, { card }) => ({
    ...state,
    cards: {
      ...state.cards,
      cards: state.cards.cards.filter((c) => c._id !== card._id),
      lastUpdated: new Date(),
    },
  }))
);

export function dataReducer(state: Data, action: Action) {
  return _dataReducer(state, action);
}

function updateObjectInArray(cards: Card[], card: Card) {
  return cards.map((item) =>
    item._id !== card._id
      ? item
      : {
          ...item,
          ...card,
        }
  );
}
function updateVote(votes: Vote[], vote: Vote) {
  let found: boolean;
  if (!votes) votes = [];
  const result = [...votes].map((item) => {
    if (item._id !== vote._id) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    else {
      found = true;
      return {
        ...item,
        value: vote.value,
      };
    }
  });
  if (!found) {
    result.push(vote);
  }
  return result;
}

// function updateTotalVotes(cards: Card[], vote: Vote) {
//   let res = cards.map((card) => {
//     if (card._id !== vote.cardId) {
//       return card;
//     } else {
//       let newCard: Card;
//       if (vote.value == 1) {
//         newCard = { ...card, allVotes: card.allVotes + 1 };
//       } else {
//         newCard = { ...card, allVotes: card.allVotes - 1 };
//       }
//       return newCard;
//     }
//   });

//   return res;
// }

function addTags(origin: string[], tags: string[]) {
  // adds a list of tags to the original array without duplicates
  for (const tag of tags) {
    if (!origin.includes(tag)) {
      origin.push(tag);
    }
  }
  return origin;
}
