import HttpError from "../helpers/HttpError.mjs";

export const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    next();
  };
  return func;
};

export default validateBody;
