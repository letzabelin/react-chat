export default (key, touched, errors) => {
  if (touched[key]) {
    // return errors[key] ? 'error' : 'success';
    if (errors[key]) {
      return 'error';
    } else {
      return 'success';
    }
  } else {
    return '';
  }
};
