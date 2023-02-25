import { List, PageFooter, Text } from './Footer.styled';

const Footer = () => {
  return (
    <PageFooter>
      <Text>Used library in react :</Text>
      <List>
        <li>
          <p>@notiflix</p>
        </li>
        <li>
          <p>@axios</p>
        </li>
        <li>
          <p>@emotion</p>
        </li>
        <li>
          <p>@react-icons</p>
        </li>
      </List>
    </PageFooter>
  );
};

export default Footer;
