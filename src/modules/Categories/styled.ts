import { Clickable } from 'components';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  gap: 16px;
  cursor: pointer;
  padding: 32px;
`;
const Title = styled.div`
  width: 100%;
`;
const Carousel = styled(Clickable)`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 133px;
  gap: 8px;
`;

const CarouselImage = styled.img`
  display: flex;
  width: 133px;
`;

const CarouselContent = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export { Wrapper, Carousel, CarouselImage, CarouselContent, Title };
