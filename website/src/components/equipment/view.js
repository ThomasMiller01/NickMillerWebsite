import useEquipmentController from "./controller";
import "./style.scss";

const EquipmentView = () => {
  const { equipmentBody } = useEquipmentController();

  return (
    <div className="equipment-view">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: equipmentBody }}
      />
    </div>
  );
};

export default EquipmentView;
