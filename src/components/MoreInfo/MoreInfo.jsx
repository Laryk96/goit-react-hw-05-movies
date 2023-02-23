import paths from 'routs/paths';
import { Wrapper, Title, InfoList, InfoLinkStyled } from './MoreInfo.styled';

const { cast, reviews } = paths;

const MoreInfo = () => {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <InfoList>
        <li>
          <InfoLinkStyled to={cast}>Cast</InfoLinkStyled>
        </li>
        <li>
          <InfoLinkStyled to={reviews}>Reviews</InfoLinkStyled>
        </li>
      </InfoList>
    </Wrapper>
  );
};
export default MoreInfo;
