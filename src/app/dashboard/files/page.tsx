
import { Breadcrumb} from "antd";
import GridFiles from "./GridFiles";


export default function () {


  return (
    <div>

    <Breadcrumb className="ps-5"
        items={[
          {
            title: 'Dashboard',
          },
          {
            title: 'Archivos',
          }
        ]}
      />

      <div className="p-3">
        <GridFiles />
      </div>

    </div>
  );
}
