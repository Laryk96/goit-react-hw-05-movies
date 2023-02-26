import Notiflix from 'notiflix';

const warning = text => {
  return Notiflix.Notify.warning(text, {
    position: 'center-top',
    fontSize: '16px',
    width: '350px',
  });
};

export { warning };
