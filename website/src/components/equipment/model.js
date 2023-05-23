import { useState, useCallback } from "react";
import Butter from "buttercms";

const useEquipmentModel = () => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [equipmentBody, setEquipmentBody] = useState("");

  const getEquipment = useCallback(() => {
    client.post
      .list({
        category_slug: "ausruestung",
        page_size: 1,
      })
      .then((resp) => {
        let equipment = resp.data.data[0];
        setEquipmentBody(equipment.body);
      });
  }, []);

  return {
    equipmentBody,
    getEquipment,
  };
};

export default useEquipmentModel;
