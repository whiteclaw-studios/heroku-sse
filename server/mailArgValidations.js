import * as regex from "../src/utils/regex";
export const mailArgsValidations = (args = {}) => {
  const { email, mobile, address, name } = args;
  const isValidEmail =
    email.length > 0 ? regex.EMAIL.test(email) && email.length <= 50 : true;
  const isValidMobile = regex.MOBILE.test(mobile);
  const isValidName =
    name.length > 0 ? regex.NAME.test(name) && name.length <= 100 : true;
  const isValidAddress = regex.MOBILE.test(mobile) && address.length <= 100;
  return isValidEmail && isValidMobile && isValidAddress && isValidName;
};
