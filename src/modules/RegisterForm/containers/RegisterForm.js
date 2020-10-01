import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';
import validateAndParseErrors from 'utils/validate';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    password: '',
    'confirmed-password': '',
  }),

  validate: (values) => {
    const errors = validateAndParseErrors({ values, isAuth: false });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
