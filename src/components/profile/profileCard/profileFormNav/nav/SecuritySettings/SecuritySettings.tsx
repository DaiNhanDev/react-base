import React from 'react';
import { BaseCard } from 'components/common/BaseCard/BaseCard';
import { PasswordForm } from './passwordForm/PasswordForm/PasswordForm';
import { TwoFactorAuth } from './twoFactorAuth/TwoFactorAuth';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseCol } from 'components/common/BaseCol/BaseCol';

export const SecuritySettings: React.FC = () => (
  <BaseCard>
    <BaseRow gutter={[30, 0]}>
      <BaseCol xs={24} xl={10}>
        <PasswordForm />
      </BaseCol>

      <BaseCol xs={24} xl={14}>
        <TwoFactorAuth />
      </BaseCol>
    </BaseRow>
  </BaseCard>
);
