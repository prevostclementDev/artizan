import { isLength } from 'validator'

const validateRegisterForm = (formData) => {
  let errors = {}
  if (typeof formData === 'object') {
    // Checking First name
    if (!isLength(formData.firstName, { min: 2, max: undefined }))
      errors.firstName = 'First name is invalid'
    if (!isLength(formData.lastName, { min: 2, max: undefined }))
      errors.lastName = 'Last name is invalid'
  } else {
    throw 'Invalid parameter type'
  }

  return errors
}

export {
  validateRegisterForm
}