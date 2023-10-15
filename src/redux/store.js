import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { combineReducers } from 'redux';
import listsReducer from './listsRedux';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import searchStringReducer from './searchStringReducer';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;  

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload })

export const updateSearching = payload => ({ type: 'UPDATE_SEARCHSTRING', payload })

export const addList = (title, description) => ({  type: 'ADD_LIST',  payload: { title, description, id: shortid(), },
});

export const toggleCardFavorite = (cardId) => ({ type: 'TOGGLE_CARD_FAVORITE', payload: cardId });

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;