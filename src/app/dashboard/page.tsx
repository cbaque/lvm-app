
import { inter, titleFont } from "@/config/fonts";
import { Breadcrumb, Space, Tag } from "antd";
import Table, { TableProps } from "antd/es/table";
import Image from "next/image";


export default function Home() {


  return (
    <div>

      <Breadcrumb
        items={[
          {
            title: 'Dashboard',
          },
          {
            title: 'Documentos',
          }
        ]}
      />

      <Table />
    </div>
  );
}
