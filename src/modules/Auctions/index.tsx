import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuctions } from 'slices/auctions';
import { Card, List } from 'antd';

import { Wrapper, Title } from './styled';

const { Meta } = Card;

export const Auctions: React.FC = () => {
  const { push } = useHistory();
  const { products } = useAuctions();
  console.log('====>products ', products);
  return (
    <Wrapper>
      <Title>
        <h2>注目のオークション</h2>
      </Title>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={products}
        renderItem={(m) => (
          <List.Item>
            <Card
              onClick={() => push(`/detail/${m.auctionId}`)}
              hoverable
              // style={{ width: 240 }}
              cover={
                <img
                  alt="thumbnail"
                  src={m.image}
                  style={{ objectFit: 'cover', height: 150 }}
                />
              }
            >
              <Meta title={m.title} description={`${m.price} Yên`} />
            </Card>
          </List.Item>
        )}
      />
    </Wrapper>
  );
};
