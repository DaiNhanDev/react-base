import React from 'react';
import { Upload, UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

export const FormUpload: React.FC<UploadProps> = ({ accept, ...rest }) => {
  return (
    <Upload.Dragger accept={accept} {...rest}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </p>
      <p className="ant-upload-hint">Drag file</p>
    </Upload.Dragger>
  );
};
