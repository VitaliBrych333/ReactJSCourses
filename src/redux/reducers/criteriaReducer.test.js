import criteriaReducer from "./criteriaReducer";
import * as actions from "../actions/criteriaActions";
import expect from "expect";

describe("criteriaReducer", () => {
  it("should return the initial state", () => {
    expect(criteriaReducer(undefined, {})).toEqual({
      search: "title",
      sort: "release_date",
    });
  });

  it("should set up the value for search", () => {
    const successAction = {
      type: actions.SET_SEARCH,
      payload: {
        search: "genre",
      },
    };

    expect(criteriaReducer(undefined, successAction)).toEqual({
      search: "genre",
      sort: "release_date",
    });
  });

  it("should set up the value for sort", () => {
    const successAction = {
      type: actions.SET_SORT,
      payload: {
        sort: "rating",
      },
    };

    expect(criteriaReducer(undefined, successAction)).toEqual({
      search: "title",
      sort: "rating",
    });
  });

  it("should handle SET_SEARCH", () => {
    const expectedAction = {
      type: actions.SET_SEARCH,
      payload: {
        search: "genre",
      },
    };

    expect(actions.setSearch("genre")).toEqual(expectedAction);
  });

  it("should handle SET_SORT", () => {
    const expectedAction = {
      type: actions.SET_SORT,
      payload: {
        sort: "release",
      },
    };

    expect(actions.setSort("release")).toEqual(expectedAction);
  });
});
