import { DivNotFound, LinkNotFound, TextNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <DivNotFound>
      <div>
        <img
          src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png"
          alt="not found"
          width="100%"
        />
        <TextNotFound>
          <LinkNotFound to="/">Back to home</LinkNotFound>
        </TextNotFound>
      </div>
    </DivNotFound>
  );
};
export default NotFound;
