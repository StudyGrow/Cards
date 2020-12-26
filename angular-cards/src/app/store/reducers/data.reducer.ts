import { Action, createReducer, on } from "@ngrx/store";
import { share } from "rxjs/operators";
import { Card } from "src/app/models/Card";
import { CardsData, Data, LecturesData, UserData } from "src/app/models/state";
import { User } from "src/app/models/User";
import { Vote } from "src/app/models/Vote";
import * as CardActions from "../actions/cardActions";
import * as LectureActions from "../actions/LectureActions";
import * as UserActions from "../actions/UserActions";

const initialState: Data = {
  cardData: {
    cards: [],
    votes: [],
    lastUpdated: undefined,
    currLecture: undefined,
  },
  userData: {
    cards: undefined,
    authenticated: false,
    user: new User(),
    lastUpdated: undefined,
  },
  lectureData: {
    lectures: [],
    lastUpdated: undefined,
  },
};

const _dataReducer = createReducer(
  initialState,

  on(CardActions.addCardSuccess, (state, { card }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: [
        ...state.cardData.cards,
        {
          //add card
          ...card,
          authorId: state.userData.user._id, //add user id
          authorName: state.userData.user.username, //add username
        },
      ],
      currLecture: {
        ...state.cardData.currLecture,
        tagList: addTags([...state.cardData.currLecture.tagList], card.tags),
      }, //add new tags to the lectures taglist
      lastUpdated: new Date(),
    },
  })),
  on(CardActions.fetchVotesSuccess, (state, { votes }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      votes: [...votes],
    },
  })),
  on(CardActions.changeVoteSuccess, (state, { vote }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: updateTotalVotes([...state.cardData.cards], vote),
      votes: updateVote([...state.cardData.votes], vote),
    },
  })),
  on(LectureActions.fetchLecturesSuccess, (state, { lectures }) => ({
    ...state,
    lectureData: {
      ...state.lectureData,
      lectures: [...lectures],
      lastUpdated: new Date(),
    },
  })),

  on(LectureActions.addLercture, (state, { lecture }) => ({
    ...state,
    lectureData: {
      ...state.lectureData,
      lectures: [...state.lectureData.lectures, lecture],
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.updateCardSuccess, (state, { card }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: updateObjectInArray(state.cardData.cards, card),
      lastUpdated: new Date(),
    },
  })),

  on(CardActions.LoadSuccess, (state, { data }) => ({
    ...state,
    cardData: {
      ...state.cardData,
      cards: data.cards,
      lastUpdated: new Date(),
      currLecture: data.lecture,
    },
    userData: {
      ...state.userData,
      user: {
        ...state.userData.user,
        _id: data.uid,
      },
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.fetchUserDataSuccess, (state, info) => ({
    ...state,
    userData: {
      ...state.userData,
      cards: info.cards,
      user: info.user,
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.updateUserDataSuccess, (state, user) => ({
    ...state,
    userData: { ...state.userData, user: user, lastUpdated: new Date() },
  })),

  on(UserActions.authenticated, (state, { auth }) => ({
    ...state,
    userData: {
      ...state.userData,
      authenticated: auth,
    },
  })),

  on(UserActions.loginSuccess, (state, user) => ({
    ...state,
    userData: {
      ...state.userData,
      user: user,
      authenticated: true,
      lastUpdated: new Date(),
    },
  })),

  on(UserActions.logoutSuccess, (state) => ({
    ...state,
    userData: initialState.userData,
  })),

  on(CardActions.clearCardData, (state) => ({
    ...state,
    cardData: {
      ...state.cardData,
      votes: initialState.cardData.votes,
      cards: initialState.cardData.cards,
      currLecture: initialState.cardData.currLecture,
      lastUpdated: initialState.cardData.lastUpdated,
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
  return votes.map((item, index) => {
    if (item.cardId !== vote.cardId) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...vote,
    };
  });
}

function updateTotalVotes(cards: Card[], vote: Vote) {
  console.log(cards[0].allVotes);
  let res = cards.map((card) => {
    if (card._id !== vote.cardId) {
      return card;
    } else {
      let newCard: Card;
      if (vote.value == 1) {
        newCard = { ...card, allVotes: card.allVotes + 1 };
      } else {
        newCard = { ...card, allVotes: card.allVotes - 1 };
      }
      return newCard;
    }
  });

  return res;
}

function addTags(origin: string[], tags: string[]) {
  //adds a list of tags to the original array without duplicates
  for (const tag of tags) {
    if (!origin.includes(tag)) {
      origin.push(tag);
    }
  }
  return origin;
}
