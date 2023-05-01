import { useState, useCallback } from "react";
import Butter from "buttercms";

const useHomeModel = () => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [topProjects, setTopProjects] = useState([]);

  const getTopProjects = useCallback(() => {
    client.post
      .list({ category_slug: "projekte", tag_slug: "top" })
      .then((resp) => {
        let projects = resp.data.data.map((x) => ({
          title: x.title,
          summary: x.summary,
          image: x.featured_image,
          link: `/projekte/${x.slug}`,
        }));

        setTopProjects(projects);
      });
  }, []);

  return {
    topProjects,
    getTopProjects,
  };
};

export default useHomeModel;
