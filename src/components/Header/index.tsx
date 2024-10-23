import LogoCoffeeDelivery from '../../assets/LogoCoffeeDelivery.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { HeaderContainer, ShoppingInfo, AdressContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </Link>
      <ShoppingInfo>
        <AdressContainer>
          <MapPin size={20} weight="fill" />
          <span>Osasco, SP</span>
        </AdressContainer>
        <Link to="/">
          <ShoppingCart size={20} weight="fill" />
          <span>3</span>
        </Link>
      </ShoppingInfo>
    </HeaderContainer>
  );
}
