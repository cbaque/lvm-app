// import { FileI } from "@/interfaces/file"
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
// import { Space , Divider, Drawer, FloatButton, Table, TableProps } from 'antd'


// const  useColumns = () => {
//   const columns: TableProps<FileI>['columns'] = [
//     {
//       title: 'Archivo',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: '',
//       key: 'action',
//       render: (_, record) => (
//         <DeleteOutlined title='Eliminar' style={{ cursor: 'pointer', color: 'red' }} />
//         // <Space size="middle"></Space>
//         // <Space size="middle">
//         //   <EditOutlined title='Editar' style={{ cursor: 'pointer', color: '#1677ff' }} onClick={() => editFile(record)} />
//         //   <DeleteOutlined title='Eliminar' style={{ cursor: 'pointer', color: 'red' }} />
//         // </Space>
//       ),
//     }
//   ];
//   return columns;
// };