
import { Space, TableProps } from 'antd'
import { FileI } from '@/interfaces/file';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface UseFileColumnsProps {
  onEdit: (file: FileI) => void;
  onDelete: (file: FileI) => void;
}

const useFileColumns = ({onEdit, onDelete}: UseFileColumnsProps): TableProps<FileI>['columns'] => {
  return [
    {
      title: 'Archivo',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined title='Editar' style={{ cursor: 'pointer', color: '#1677ff' }} onClick={() => onEdit(record)} />
          <DeleteOutlined title='Eliminar' style={{ cursor: 'pointer', color: 'red' }} onClick={() => onDelete(record)} />
        </Space>
      )
    },
  ];
};

export default useFileColumns;
