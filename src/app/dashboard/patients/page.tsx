
import { Breadcrumb, Space, Tag } from "antd";
import GridPatients from "./GridPatients";


export default function patientsPage() {


  return (
    <div>

      <Breadcrumb className="ps-5"
        items={[
          {
            title: 'Dashboard',
          },
          {
            title: 'Pacientes',
          }
        ]}
      />
      <div className="p-3">
        <GridPatients />
      </div>
    </div>
  );
}
