import { useEffect } from "react";

import useEquipmentModel from "./model";

const useEquipmentController = () => {
  const { equipmentBody, getEquipment } = useEquipmentModel();

  useEffect(() => {
    getEquipment();
  }, []);

  return { equipmentBody };
};

export default useEquipmentController;
