import ButtonToHome from 'components/BackButton/BackButton';
import { MainTitle } from 'components/Title/Title.styled';

const NotFound = () => {
  return (
    <div>
      <ButtonToHome>Go to back</ButtonToHome>
      <MainTitle>Oops page not found</MainTitle>
    </div>
  );
};

export default NotFound;
