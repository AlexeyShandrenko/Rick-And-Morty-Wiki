import * as yup from "yup";

import { SEARCH_VALIDATION_TEXT } from "../../config/constants/constants";
import { STRING_REGEXP } from "../../config/regexp/regexp";

const searchSchema = yup.object().shape({
  search: yup
    .string()
    .required()
    .matches(STRING_REGEXP, SEARCH_VALIDATION_TEXT),
});

export default searchSchema;
