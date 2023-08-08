import * as Joi from 'joi';

export const BaseQuerySortSchema = Joi.object().pattern(
  Joi.string().trim(),
  Joi.string()
    .trim()
    .valid('asc', 'desc', 'ascending', 'descending', 1, -1)
    .default('asc'),
);

export const BaseQueryParamsValidator = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).default(10),
  search: [Joi.string().trim(), Joi.any().strip()],
  sort: BaseQuerySortSchema,
}).options({
  stripUnknown: true,
});
