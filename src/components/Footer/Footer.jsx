import { List, PageFooter, Text } from './Footer.styled';

const Footer = () => {
  return (
    <PageFooter>
      <Text>Used library in react :</Text>
      <List>
        <li>@notiflix</li>
        <li>@axios</li>
        <li>@emotion</li>
      </List>
    </PageFooter>
  );
};

export default Footer;
