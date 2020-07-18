import * as regex from "./regex";
const validations = {
  configs: {
    email: regex.EMAIL,
    password: regex.PASSWORD,
    mobile: regex.MOBILE,
    name: regex.NAME,
  },

  check: (state) => {
    const { type, value } = state;
    return validations.configs[type]
      ? validations.configs[type].test(value)
      : true;
  },
};
export default validations;
