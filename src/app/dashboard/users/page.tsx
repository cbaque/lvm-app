
import { inter, titleFont } from "@/config/fonts";
import { Breadcrumb, FloatButton, Space, Tag } from "antd";
import Table, { TableProps } from "antd/es/table";
import Image from "next/image";
import GridUsers from "./GridUsers";
import { CustomerServiceOutlined } from "@ant-design/icons";


export default function userPage() {


  return (
    <div>

      <Breadcrumb className="ps-5"
        items={[
          {
            title: 'Dashboard',
          },
          {
            title: 'Usuarios',
          }
        ]}
      />
      <div className="p-3">
        <GridUsers />
      </div>

    </div>
  );
}
