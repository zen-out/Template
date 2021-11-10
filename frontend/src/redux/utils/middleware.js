export const trackActionsMiddleware = () => {
  const middleware = () => (next) => (_action) => {
    if (_action != null && typeof _action === "object") {
      middleware.actions.push(_action);
    }
    return next(_action);
  };
  middleware.actions = [];
  return middleware;
};
