import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_FILMID_BEGIN,
  FETCH_FILMID_SUCCESS,
  FETCH_FILMID_FAILURE,
  SET_GENRE,
  SORT,
} from '../actions/moviesActions';

const initialState = {
  movies: { data: [], totalAmount: 0 },
  moviesByCriteria: { data: null, totalAmount: 0 },
  filmId: {},
  sort: 'release_date',
  genre: 'All',
  loading: false,
  error: null,
};

const sortBy = (value, data) => {
  let sortData;

  switch (value) {
    case 'vote_average':
      sortData = data.sort((a, b) => b.vote_average - a.vote_average);
      break;
    case 'release_date':
      sortData = data.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      break;
    default:
      break;
  }

  return sortData;
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        moviesByCriteria: action.payload.moviesByCriteria,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: { data: [], total: 0 },
      };

    case FETCH_FILMID_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_FILMID_SUCCESS:
      return {
        ...state,
        loading: false,
        filmId: action.payload,
      };

    case FETCH_FILMID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        filmId: {},
      };

    case SORT:
      let typeSort;

      switch (action.payload.value) {
        case 'Release date':
          typeSort = 'release_date';
          break;
        case 'Rating':
          typeSort = 'vote_average';
          break;
        default:
          break;
      }

      const { data } = state.moviesByCriteria;

      if (data && data.length) {
        const sortData = sortBy(typeSort, data.slice());

        return {
          ...state,
          moviesByCriteria: {
            data: sortData,
            totalAmount: state.moviesByCriteria.totalAmount,
          },
          sort: typeSort,
        };
      }
      return {
        ...state,
        sort: typeSort,
      };

    case SET_GENRE:
      const { genre } = action.payload;
      let moviesByCriteria;
      let totalCount;

      let sortDataByGenre = sortBy(state.sort, state.movies.data.slice());

      if (genre !== 'All') {
        sortDataByGenre = sortDataByGenre
          .slice()
          .filter((film) => film.genres.includes(genre));
        totalCount = sortDataByGenre.length;
      } else {
        totalCount = state.movies.totalAmount;
      }

      moviesByCriteria = {
        data: sortDataByGenre,
        totalAmount: totalCount,
      };

      return { ...state, genre, moviesByCriteria };

    default:
      return state;
  }
}
