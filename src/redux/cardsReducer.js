import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// Action types
const ADD_CARD = 'cards/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'cards/TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'cards/REMOVE_CARD';

// Action creators
export const addCard = (payload) => ({
  type: ADD_CARD,
  payload,
});

export const toggleCardFavorite = (cardId) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload: cardId,
});

export const removeCard = (cardId) => ({
  type: REMOVE_CARD,
  payload: cardId,
});

// Initial state
const initialState = [];

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];

    case TOGGLE_CARD_FAVORITE:
      return state.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );

    case REMOVE_CARD:
      return state.filter((card) => card.id !== action.payload);

    default:
      return state;
  }
};

export default cardsReducer;
