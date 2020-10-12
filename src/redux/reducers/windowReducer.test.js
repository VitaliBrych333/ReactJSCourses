import expect from 'expect';
import windowReducer from './windowReducer';
import * as actions from '../actions/windowActions';

describe('windowReducer', () => {
  it('should return the initial state', () => {
    expect(windowReducer(undefined, {})).toEqual({
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
      isShowEditPage: false,
      isShowDeletePage: false,
      isShowAddPage: true,
    });
  });
});
