import styled from '@emotion/styled';

const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 20px;
  margin-bottom: 50px;
`;
const ReviewsItem = styled.li`
  width: 420px;
  height: 400px;
  padding: 15px;

  background-color: #212121;
  border-radius: 5px;
`;
const AuthorName = styled.h3`
  margin-bottom: 20px;

  font-size: 20px;
  line-height: 1.7;
  color: orange;
`;

const Content = styled.p`
  display: block;
  height: 320px;
  padding-right: 15px;

  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 1.7;

  overflow-y: scroll;
`;

const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 24px;
  text-align: center;
`;
export { ReviewsItem, ReviewsList, AuthorName, Content, Title };
