import BackButton from 'components/BackButton';
import { MainTitle } from 'components/Title/Title.styled';
import paths from 'routs/paths';

const NotFoundPage = () => {
  return (
    <div>
      <BackButton to={paths.home}>back to home</BackButton>
      <MainTitle>Oops page not found</MainTitle>
    </div>
  );
};

export default NotFoundPage;
