import React, { useEffect, useMemo } from 'react';
import { Carousel, Image, List } from 'antd';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import { Button } from 'components';

import { useAuctions } from 'slices/auctions';

import { Wrapper, Left, Infomation, Right } from './styled';

export const Detail: React.FC = () => {
  const { id }: { id?: string } = useParams();
  const { getProduct, productDetail } = useAuctions();
  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);
  const infomation = useMemo(() => {
    return [
      {
        label: 'Số lượng',
        value: productDetail?.qty || '',
      },
      {
        label: 'Giá khởi điểm',
        value: productDetail?.initPrice || '',
      },
      {
        label: 'Tình trạng hàng',
        value: 'Đã qua sử dụng',
      },
      {
        label: 'Hoàn trả',
        value: productDetail?.returnable ? 'Co' : 'Khong',
      },
      {
        label: 'Thời gian bắt đầu',
        value: productDetail?.startDate || '',
      },
      {
        label: 'Thời gian kết thúc',
        value: productDetail?.endDate || '',
      },
      {
        label: 'Kết thúc sớm',
        value: productDetail?.earlyClose ? 'Co' : 'Khong',
      },
      {
        label: 'Thêm thời gian đấu',
        value: productDetail?.autoExtension ? 'Co' : 'Khong',
      },
      {
        label: 'Mã đấu giá',
        value: productDetail?.code || '',
      },
      {
        label: 'Hạn chế gia',
        value: productDetail?.bidderRestriction ? 'Co' : 'Khong',
      },
      {
        label: 'Xác thực nhà thầu',
        value: productDetail?.bidderVerification ? 'Co' : 'Khong',
      },
      {
        label: 'Trả giá cao nhất',
        value: 'N/A',
      },
    ];
  }, [productDetail]);
  return (
    <Wrapper>
      <Left>
        {productDetail && productDetail.thumbnails && (
          <Carousel
            style={{ width: '100%', height: '100%' }}
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
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
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
      <Infomation>
        <List
          header={null}
          footer={null}
          bordered
          dataSource={infomation}
          renderItem={(item) => (
            <List.Item style={{ width: '100%' }}>
              <div>{item.label}</div>
              <div>{item.value}</div>
            </List.Item>
          )}
        />
      </Infomation>

      <Right>
        <List header={null} footer={null} bordered>
          <List.Item style={{ width: '100%' }}>
            <div>Gia hien tai</div>
            <div>{productDetail?.price || '0'}</div>
          </List.Item>
        </List>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button size="large" style={{ width: 180 }} type="primary">
            Dat gia
          </Button>
        </div>
      </Right>
    </Wrapper>
  );
};
