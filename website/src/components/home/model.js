import { useState, useCallback } from "react";
import Butter from "buttercms";

const useHomeModel = () => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [topProjects, setTopProjects] = useState([]);
  const [latestPrints, setLatestPrints] = useState([]);

  const getTopProjects = useCallback(() => {
    client.post
      .list({
        category_slug: "projekte",
        tag_slug: "top",
        exclude_body: true,
        page_size: 10000,
      })
      .then((resp) => {
        let projects = resp.data.data.map((x) => ({
          title: x.title,
          summary: x.summary,
          image: x.featured_image,
          link: `/projekte/${x.slug}`,
          date: x.published,
        }));

        projects.sort((x) => new Date(x.date));

        setTopProjects(projects);
      });
  }, []);

  const getLatestPrints = useCallback(() => {
    client.post
      .list({
        category_slug: "3d-prints",
        exclude_body: true,
        page_size: 10000,
      })
      .then((resp) => {
        let prints = resp.data.data.map((x) => ({
          title: x.title,
          link: x.summary,
          date: x.published,
        }));

        prints.sort((x) => new Date(x.date));
        prints = prints.slice(0, 3);

        setLatestPrints(prints);
      });
  });

  return {
    topProjects,
    latestPrints,
    getTopProjects,
    getLatestPrints,
  };
};

export default useHomeModel;
