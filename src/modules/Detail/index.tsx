import React, { useEffect } from 'react';
import { Carousel, Image } from 'antd';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { useAuctions } from 'slices/auctions';

import { Wrapper, Left, Right } from './styled';

export const Detail: React.FC = () => {
  const { id }: { id?: string } = useParams();
  const { getProduct, productDetail } = useAuctions();
  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  return (
    <Wrapper>
      <Left>
        {productDetail && productDetail.thumbnails && (
          <Carousel
            style={{ width: 480, height: 480 }}
            draggable
            dots={false}
            arrows
            infinite
            adaptiveHeight={false}
            autoplay={false}
          >
            {productDetail.thumbnails.map((m) => (
              <div
                style={{
                  width: 480,
                  height: 480,
                  background: 'red',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{
                    objectFit: 'cover',
                    width: 420,
                    height: 420,
                  }}
                  src={m}
                  alt={m}
                  preview={false}
                />
              </div>
            ))}
          </Carousel>
        )}
      </Left>
      {/* <Right></Right> */}
    </Wrapper>
  );
};
