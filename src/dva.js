import {create} from 'dva-core';
import {connect} from '@tarojs/redux';
import {createLogger} from 'redux-logger';
import createLoading from 'dva-loading';



let app;
let store;
let dispatch;

export default function createApp(opt) {
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;
  app.dispatch = store.dispatch;
  return app;
}

export {connect}

export function getApp() {
  return app;
}

export function getStore() {
  return store;
}

export function getDispatch() {
  return app.dispatch;
}
