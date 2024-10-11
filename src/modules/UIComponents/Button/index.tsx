import { useState, useEffect } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import {Card} from '../styled';
import { BaseCol, PageTitle, BaseButton } from 'components/Common';

const ButtonsPage: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const { t } = useTranslation();
  let timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const enterLoading = (index: number) => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    timeout = setTimeout(() => {
      setLoadings((loadings) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <>
      <PageTitle>{t('common.button')}</PageTitle>
      <BaseCol style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
        <Card title={t('buttons.types')}>
          <BaseButton type="primary">{t('buttons.primary')}</BaseButton>
          <BaseButton type="default">{t('buttons.default')}</BaseButton>
          <BaseButton type="primary">{t('buttons.ghost')}</BaseButton>
          <BaseButton type="dashed">{t('buttons.dashed')}</BaseButton>
          <BaseButton type="text">{t('buttons.text')}</BaseButton>
          <BaseButton type="link">{t('buttons.link')}</BaseButton>
        </Card>
        <Card title={t('buttons.sizes')}>
          <BaseButton type="primary" size="small">
            {t('buttons.small')}
          </BaseButton>
          <BaseButton type="primary" size="middle">
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="primary" size="large">
            {t('buttons.large')}
          </BaseButton>
        </Card>
        <Card title={t('buttons.loadings')}>
          <BaseButton type="primary" size="small" loading>
            {t('buttons.loading')}
          </BaseButton>
          <BaseButton type="primary" loading>
            {t('buttons.loading')}
          </BaseButton>
          <BaseButton type="primary" icon={<PoweroffOutlined />} loading />

          <BaseButton
            type="primary"
            loading={loadings[0]}
            onClick={() => enterLoading(0)}
          >
            {t('buttons.click')}
          </BaseButton>
          <BaseButton
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => enterLoading(1)}
          >
            {t('buttons.click')}
          </BaseButton>
          <BaseButton
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
        </Card>
        <Card title={t('buttons.danger')}>
          <BaseButton type="primary" danger>
            {t('buttons.primary')}
          </BaseButton>
          <BaseButton type="default" danger>
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="dashed" danger>
            {t('buttons.dashed')}
          </BaseButton>
          <BaseButton type="text" danger>
            {t('buttons.text')}
          </BaseButton>
          <BaseButton type="link" danger>
            {t('buttons.link')}
          </BaseButton>
        </Card>
        <Card title={t('buttons.disabled')}>
          <BaseButton type="primary" disabled>
            {t('buttons.primary')}
          </BaseButton>
          <BaseButton type="default" disabled>
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="primary" disabled>
            {t('buttons.ghost')}
          </BaseButton>
          <BaseButton type="dashed" disabled>
            {t('buttons.dashed')}
          </BaseButton>
          <BaseButton type="text" disabled>
            {t('buttons.text')}
          </BaseButton>
          <BaseButton type="link" disabled>
            {t('buttons.link')}
          </BaseButton>
        </Card>
      </BaseCol>
    </>
  );
};

export default ButtonsPage;
