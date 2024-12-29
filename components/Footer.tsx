import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image';
import CorinthiansFooterImg from './../img/corinthians.svg';

const CorinthiansFooter = styled.div`
`

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px; 
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const FooterLinks = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 32px; 
`

const FooterLink = styled(Link)`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="/contato">Contato</FooterLink>
        <FooterLink href="https://x.com/Corinthians">Twitter/X</FooterLink>
        <FooterLink href="https://instagram.com/Corinthians">Instagram</FooterLink>
        <FooterLink href="https://youtube.com/Corinthians">Youtube</FooterLink>
        <FooterLink href="https://api.sccpapp.com.br/noticia/site/pt-br/baixe-agora-o-universo-sccp/1?">UNIVERSO SCCP</FooterLink>
      </FooterLinks>
      <CorinthiansFooter>
        {/* Adicionando a logo como imagem */}
        <Image src={CorinthiansFooterImg} alt="Fiel Torcedor" width={30} height={30} />
      </CorinthiansFooter>
    </FooterContainer>
  )
}
