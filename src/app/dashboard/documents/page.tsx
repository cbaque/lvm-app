
import { inter, titleFont } from "@/config/fonts";
import { Breadcrumb, Space, Tag } from "antd";
import Table, { TableProps } from "antd/es/table";
import Image from "next/image";


export default function documentsPage() {


  return (
    <div>

      <Breadcrumb className="ps-5"
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
