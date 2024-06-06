
import { Breadcrumb} from "antd";
import GridType from "./GridType";


export default function () {


  return (
    <div>

      <Breadcrumb className="ps-5"
        items={[
          {
            title: 'Dashboard',
          },
          {
            title: 'Tipos Estudio',
          }
        ]}
      />
      <div className="p-3">
        <GridType />
      </div>
    </div>
  );
}
