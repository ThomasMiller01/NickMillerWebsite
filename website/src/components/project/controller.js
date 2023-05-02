import { useEffect } from "react";
import useProjectModel from "./model";

const useProjectController = ({ projectSlug }) => {
  const { project, getProject } = useProjectModel({ projectSlug });

  useEffect(() => {
    getProject();
  }, [projectSlug]);

  const parseDate = (datestr) => {
    let datetime = new Date(datestr);

    let date = datetime.getDate();
    let month = datetime.getMonth();
    let year = datetime.getFullYear();

    date = date < 10 ? `0${date}` : `${date}`;
    month = month < 10 ? `0${month}` : `${month}`;

    return `${date}.${month}.${year}`;
  };

  return { project, parseDate };
};

export default useProjectController;
