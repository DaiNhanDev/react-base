import { CurrencyTypeEnum, PaymentCard } from 'interfaces/interfaces';

export interface TopUpData {
  amount: string;
  currency: CurrencyTypeEnum;
  card: string;
}

export interface TopUpDataProps {
  cards: PaymentCard[];
  loading: boolean;
  onFinish: (data: TopUpData) => void;
}
