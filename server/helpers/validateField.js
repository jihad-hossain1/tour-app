const validateFieldMaxLength = (
  field,
  fieldName,
  minLength,
  maxLength
) => {
  // console.log(field);
  if (!field || field.trim() === "") {
    throw new Error(`${fieldName} is required`);
  }
if (field.trim().length < minLength || field.trim().length > maxLength) {
    throw new Error(
      `${fieldName} must be between ${minLength} and ${maxLength} characters`
    );
  }

  // if (typeof field == 'number') {
  //   if ( minLength !== maxLength) {
  //   throw new Error(
  //     `${fieldName} must be between ${minLength} and ${maxLength} `
  //   );
  // }
  // }
};

const fieldValidate = (field, fieldName) => {
  if (!field || field.trim() === "" || field === null || field === undefined) {
    throw new Error(`${fieldName} is required`);
  }
}


module.exports = {validateFieldMaxLength,fieldValidate}