import expect from 'expect';
import windowReducer from './windowReducer';
import * as actions from '../actions/windowActions';

describe('windowReducer', () => {
  it('should return the initial state', () => {
    expect(windowReducer(undefined, {})).toEqual({
      filmEdit: null,
      isShowEditPage: false,
      isShowDeletePage: false,
      isShowAddPage: false,
    });
  });

  it('should set up the value for isShowEditPage', () => {
    const successAction = {
      type: actions.SHOW_EDITPAGE,
      payload: {
        isShowEditPage: true,
      },
    };

    expect(windowReducer(undefined, successAction)).toEqual({
      filmEdit: null,
      isShowEditPage: true,
      isShowDeletePage: false,
      isShowAddPage: false,
    });
  });

  it('should set up the value for isShowDeletePage', () => {
    const successAction = {
      type: actions.SHOW_DELETEPAGE,
      payload: {
        isShowDeletePage: true,
      },
    };

    expect(windowReducer(undefined, successAction)).toEqual({
      filmEdit: null,
      isShowEditPage: false,
      isShowDeletePage: true,
      isShowAddPage: false,
    });
  });

  it('should set up the value for isShowAddPage', () => {
    const successAction = {
      type: actions.SHOW_ADDPAGE,
      payload: {
        isShowAddPage: true,
      },
    };

    expect(windowReducer(undefined, successAction)).toEqual({
      filmEdit: null,
      isShowEditPage: false,
      isShowDeletePage: false,
      isShowAddPage: true,
    });
  });

  it('should handle SET_EDITFILM', () => {
    const expectedAction = {
      type: actions.SET_EDITFILM,
      payload: {
        filmEdit: 'testFilm',
      },
    };

    expect(actions.setEditFilm('testFilm')).toEqual(expectedAction);
  });

  it('should set up data for SET_EDITFILM', () => {
    const successAction = {
      type: actions.SET_EDITFILM,
      payload: {
        actionType: 'Edit',
        filmEdit: 'testFilm',
      },
    };

    const expectState = {
      filmEdit: 'testFilm',
      isShowEditPage: true,
      isShowDeletePage: false,
      isShowAddPage: false,
    };

    expect(windowReducer(undefined, successAction)).toEqual(expectState);
  });
});
