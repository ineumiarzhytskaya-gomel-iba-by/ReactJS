export const loggerMiddleware = (dispatch) => (next) => (action) => {
  console.log(action.type, action.payload);
  return next(action);
};
