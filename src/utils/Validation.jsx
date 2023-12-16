export const Validation = (values) => {
  const errors = {};

  //ensure user enters a valid email
  const email_verify = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  if (values.user_name === "") {
    errors.name = "Name is required.";
  }
  if (values.user_email === "") {
    errors.email = "Email is required.";
  } else if (!email_verify.test(values.user_email)) {
    errors.email = "Please enter a valid email.";
  }

  if (values.message === "") {
    errors.message = "Please fill out a message.";
  }

  return errors;
};
