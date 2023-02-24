import styled from '@emotion/styled';

const Article = styled.article`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  width: 600px;
`;

const MovieTitle = styled.h2`
  font-size: 30px;
  line-height: 1.666;
  margin-bottom: 20px;
`;
const SubTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Descriotion = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
export { Article, ImageWrapper, MovieTitle, Descriotion, SubTitle, Wrapper };
