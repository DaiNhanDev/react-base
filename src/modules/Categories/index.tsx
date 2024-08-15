import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Carousel,
  CarouselImage,
  Wrapper,
  CarouselContent,
  Title,
} from './styled';

const data = [
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
  {
    image:
      'https://auc-pctr.c.yimg.jp/i/auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0508/user/d895548bf42a0c8028d03a02559b3384de78e84ac5cf3718bafe8cd9bbd2a2f7/i-img1200x1200-172364374664498vhxcz213.jpg?pri=l&w=300&h=300&up=0&nf_src=sy&nf_path=images/auc/pc/top/image/1.0.3/na_170x170.png&nf_st=200',
    price: '1\u5186',
    product_id: 'n1148677342',
    title:
      '\u30bf\u30c3\u30c1\u30d1\u30cd\u30eb\u3010\u30cf\u30a4\u30a8\u30f3\u30c9i7/\u30e1\u30e2\u30ea20GB/\u65b0\u54c1SSD512GB\u3011Core i7-7700HQ/\u30d5\u30ebHD\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3/Windows11/Office2021/Bluetooth/\u7121\u65991TB',
  },
];

export const Categories: React.FC = () => {
  const { push } = useHistory();

  return (
    <Wrapper>
      <Title>
        <h2>注目のオークション</h2>
      </Title>
      {data.map((m) => (
        <Carousel onClick={() => push(`/detail/${m.product_id}`)}>
          <CarouselImage src={m.image} />
          <CarouselContent>{m.title}</CarouselContent>
          <div>
            <span style={{ color: '#c63', fontSize: 'bold' }}>{`現在: `}</span>
            <span>{m.price}</span>
          </div>
        </Carousel>
      ))}
    </Wrapper>
  );
};
