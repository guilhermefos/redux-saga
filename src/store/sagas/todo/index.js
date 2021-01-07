import { put, takeEvery, all } from 'redux-saga/effects';

import { addTodo } from '../../actions/todos';

export function* addTodoAsync({ payload }) {
  try {
    const { text } = payload;

    yield put(addTodo(text));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeEvery('DISPATCH_ADD_TODO', addTodoAsync)]);
