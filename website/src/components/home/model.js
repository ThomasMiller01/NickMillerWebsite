import { useState, useCallback } from "react";
import Butter from "buttercms";

const useHomeModel = () => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [topProjects, setTopProjects] = useState([]);
  const [topPrints, setTopPrints] = useState([]);

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

  const getTopPrints = useCallback(() => {
    client.post
      .list({ category_slug: "3d-prints", tag_slug: "top" })
      .then((resp) => {
        let prints = resp.data.data.map((x) => ({
          title: x.title,
          link: x.summary,
          date: x.published,
        }));

        setTopPrints(prints);
      });
  });

  return {
    topProjects,
    topPrints,
    getTopProjects,
    getTopPrints,
  };
};

export default useHomeModel;
