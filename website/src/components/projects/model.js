import { useState, useCallback } from "react";
import Butter from "buttercms";

const useProjectsModel = () => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [projects, setProjects] = useState([]);

  const getProjects = useCallback(() => {
    client.post
      .list({ category_slug: "projekte", exclude_body: true, page_size: 10000 })
      .then((resp) => {
        let projects = resp.data.data.map((x) => ({
          title: x.title,
          image: x.featured_image,
          link: `/projekte/${x.slug}`,
          date: parseDate(x.published),
        }));

        setProjects(projects);
      });
  }, []);

  return { projects, getProjects };
};

const parseDate = (datestr) => {
  let datetime = new Date(datestr);

  let date = datetime.getDate();
  let month = datetime.getMonth();
  let year = datetime.getFullYear();

  date = date < 10 ? `0${date}` : `${date}`;
  month = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;

  return `${date}.${month}.${year}`;
};

export default useProjectsModel;
