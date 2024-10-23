import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShoppingInfo = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    position: relative;

    span {
      color: ${(props) => props.theme['white']};
      background: ${(props) => props.theme['yellow-dark']};
      font-size: 0.8rem;
      padding: 0.5rem;
      border-radius: 50%;
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`;

export const AdressContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  gap: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['main-purple']};
`;
