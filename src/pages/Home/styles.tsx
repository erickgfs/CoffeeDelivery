import styled from 'styled-components';
import { fonts } from '../../styles/fonts';

export const HomeContainer = styled.div``;

export const BannerInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 0;

  gap: 0.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${fonts.titleXL}
    color: ${(props) => props.theme['base-title']};
  }

  span {
    ${fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const InfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      border-radius: 50%;
      padding: 0.5rem;
    }
  }

  span {
    font-size: 0.875rem;
  }
`;
