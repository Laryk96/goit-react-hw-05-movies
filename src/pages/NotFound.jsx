import BackButton from 'components/BackButton/BackButton';
import { MainTitle } from 'components/Title/Title.styled';

const NotFound = () => {
  return (
    <div>
      <BackButton isPageNotFound={true}>back to home</BackButton>
      <MainTitle>Oops page not found</MainTitle>
    </div>
  );
};

export default NotFound;
