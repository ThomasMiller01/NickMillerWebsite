import { useState, useCallback } from "react";
import Butter from "buttercms";

const useProjectModel = ({ projectSlug }) => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [project, setProject] = useState(projectBase);

  const getProject = useCallback(() => {
    client.post.retrieve(projectSlug).then((resp) => {
      let data = resp.data.data;
      let project = {
        title: data.title,
        body: data.body,
        image: data.featured_image,
        published: data.published,
      };
      setProject(project);
    });
  }, [projectSlug]);

  return { project, getProject };
};

const projectBase = {
  title: "M4 VR Gunstock",
  body: "Test",
  image:
    "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000233-d8b5ed8b62/700/1-393.webp?ph=01a6e5d8d4",
  published: "20.12.2022",
};

export default useProjectModel;
