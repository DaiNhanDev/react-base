import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from 'components/common/forms/BaseForm/BaseForm';
import { BaseCard } from 'components/common/BaseCard/BaseCard';
import { PaymentCardsWidget } from 'components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCardsWidget';
import { useResponsive } from 'hooks/useResponsive';
import { BaseSpin } from 'components/common/BaseSpin/BaseSpin';
import { PaymentCard } from 'interfaces/interfaces';
import { useAppSelector } from 'hooks/reduxHooks';
import { getPaymentCards } from 'apis/paymentCards.api';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseCol } from 'components/common/BaseCol/BaseCol';

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();

  const [cards, setCards] = useState<PaymentCard[]>([]);
  const [loading, setLoading] = useState(false);

  const id = useAppSelector((state) => state.user?.user?.id);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPaymentCards(id)
        .then((res) => setCards(res))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const { isTablet } = useResponsive();

  const handleCardRemove = (cardNumber: string) =>
    setCards(cards.filter((card) => card.number !== cardNumber));

  const handleCardAdd = (card: PaymentCard) => {
    setCards([...cards, card]);
  };

  const content = (
    <BaseRow gutter={[32, 32]}>
      <BaseCol span={24}>
        <BaseForm.Title>
          {t('profile.nav.payments.paymentMethod')}
        </BaseForm.Title>
      </BaseCol>
      <BaseCol span={24}>
        <BaseSpin spinning={loading}>
          <PaymentCardsWidget
            cards={cards}
            onCardRemove={handleCardRemove}
            onCardAdd={handleCardAdd}
          />
        </BaseSpin>
      </BaseCol>
    </BaseRow>
  );

  return isTablet ? content : <BaseCard>{content}</BaseCard>;
};
