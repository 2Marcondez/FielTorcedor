import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image';
import LogoImg from './../img/logo-fiel-torcedor.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  z-index: 100;
`

const Logo = styled.div`
  display: flex;
  align-items: center; /* Garante o alinhamento vertical dos itens */
  gap: 0.5rem; /* Espaçamento entre logo e texto */
`

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const MenuItem = styled(Link)`
  font-size: 14px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    opacity: 0.7;
  }
`

const RightMenu = styled.div`
  display: flex;
  gap: 1rem;
`

export default function Navigation() {
  return (
    <Nav>
      <Logo>
        {/* Adicionando a logo como imagem */}
        <Image src={LogoImg} alt="Fiel Torcedor" width={100} height={100} />
      </Logo>
      <MenuItems>
        <MenuItem href="/tickets">Ingressos</MenuItem>
        <MenuItem href="/next-matches">Proximas Partidas</MenuItem>
        <MenuItem href="/plans">Planos</MenuItem>
        <MenuItem href="/tour">Tour NeoQuimica Arena</MenuItem>
        <MenuItem href="/campaigns">Campanhas</MenuItem>
        <MenuItem href="/shop-clothes">Shop Timao</MenuItem>
        <MenuItem href="/journal">Noticias</MenuItem>
      </MenuItems>
      <RightMenu>
        <MenuItem href="/register">Registrar</MenuItem>
        <MenuItem href="/login">Conta</MenuItem>
      </RightMenu>
    </Nav>
  )
}
