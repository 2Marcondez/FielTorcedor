import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Corinthians1 from './../img/background-1.jpg';
import Corinthians2 from './../img/background-2.jpg';
import Corinthians3 from './../img/background-3.jpg';

const StyledImage = styled(Image)`
  object-fit: cover; // Ajusta o preenchimento da imagem
  width: 100%;      // Define a largura como 100% do container
  height: 100%;     // Define a altura como 100% do container
  transition: opacity 1s ease-in-out; // Transição suave entre imagens
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroSection = styled.section`
  height: 92vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export default function Hero() {
  const images = [Corinthians1, Corinthians2, Corinthians3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop entre as imagens
    }, 10000); // segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [images.length]);

  return (
    <HeroSection>
      {images.map((image, index) => (
        <StyledImage
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          style={{
            opacity: index === currentImageIndex ? 1 : 0, // Exibe apenas a imagem atual
          }}
          layout="fill" // Garante que a imagem preencha o container
        />
      ))}
    </HeroSection>
  );
}
