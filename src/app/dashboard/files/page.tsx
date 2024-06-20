"use client";
import { Breadcrumb} from "antd";
import GridFiles from "./GridFiles";
import { AlertProvider } from "@/context/alertContext";


export default function filesPage() {


  return (
    <div>

    <AlertProvider>

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
    </AlertProvider>


    </div>
  );
}
