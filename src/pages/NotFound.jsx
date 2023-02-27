import BackButton from 'components/BackButton/BackButton';
import { MainTitle } from 'components/Title/Title.styled';
import paths from 'routs/paths';

const NotFound = () => {
  return (
    <div>
      <BackButton to={paths.home}>back to home</BackButton>
      <MainTitle>Oops page not found</MainTitle>
    </div>
  );
};

export default NotFound;
