import { RequestHandler } from 'express';
import { ZodType } from 'zod';

export const createValidator = (
  schema: ZodType,
  source: 'body' | 'params' | 'query'
) => {
  const validator: RequestHandler = (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.issues.map((i) => i.message),
      });
    }
    next();
  };
  return validator;
};
