import { Outlet } from 'react-router-dom';
import { Header, Link, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
