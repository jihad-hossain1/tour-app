const validateField = (
  field,
  fieldName,
  minLength,
  maxLength
)=> {
  if (!field || field.trim() === "") {
    throw new Error(`${fieldName} is required`);
  }
  if (field.trim().length < minLength || field.trim().length > maxLength) {
    throw new Error(
      `${fieldName} must be between ${minLength} and ${maxLength} characters`
    );
  }
};



module.exports = {validateField}