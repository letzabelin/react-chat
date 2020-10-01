import { withFormik } from 'formik';

import LoginForm from '../components/LoginForm';
import validateAndParseErrors from 'utils/validate';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values) => {
    const errors = validateAndParseErrors({ values, isAuth: true });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);
