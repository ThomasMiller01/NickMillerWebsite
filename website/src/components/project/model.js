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
        seo: {
          title: data.seo_title,
          description: data.meta_description,
        },
      };
      setProject(project);
    });
  }, [projectSlug]);

  return { project, getProject };
};

const projectBase = {
  title: "",
  body: "",
  image: "",
  published: "",
  seo: {
    title: "",
    description: "",
  },
};

export default useProjectModel;
