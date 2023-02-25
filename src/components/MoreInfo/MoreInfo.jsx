import paths from 'routs/paths';
import {
  Wrapper,
  Title,
  InfoList,
  InfoLinkStyled,
  Item,
} from './MoreInfo.styled';

const { cast, reviews } = paths;

const MoreInfo = () => {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <InfoList>
        <Item>
          <InfoLinkStyled to={cast}>Cast</InfoLinkStyled>
        </Item>
        <Item>
          <InfoLinkStyled to={reviews}>Reviews</InfoLinkStyled>
        </Item>
      </InfoList>
    </Wrapper>
  );
};
export default MoreInfo;
