import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import CoffeeArt from '../../assets/CoffeeArt.svg';

import { useTheme } from 'styled-components';
import {
  HomeContainer,
  BannerInfo,
  TextContainer,
  TitleContainer,
  InfosContainer,
} from './styles';

export function Home() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <BannerInfo>
        <TextContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <InfosContainer>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme['main-background']}
                style={{ backgroundColor: theme['yellow-dark'] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme['main-background']}
                style={{ backgroundColor: theme['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme['main-background']}
                style={{ backgroundColor: theme['main-yellow'] }}
              />

              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme['main-background']}
                style={{ backgroundColor: theme['main-purple'] }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </InfosContainer>
        </TextContainer>
        <img src={CoffeeArt} alt="" />
      </BannerInfo>
    </HomeContainer>
  );
}
