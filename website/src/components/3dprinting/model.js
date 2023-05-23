import { useState, useCallback } from "react";
import Butter from "buttercms";

const use3dprintingModel = () => {
  const client = Butter(process.env.REACT_APP_BUTTERCMS_API_KEY);

  const [prints, setPrints] = useState([]);

  const getPrints = useCallback(() => {
    client.post
      .list({
        category_slug: "3d-prints",
        exclude_body: true,
        page_size: 10000,
      })
      .then((resp) => {
        let prints = resp.data.data.map((x) => ({
          title: x.title,
          image: x.featured_image,
          link: x.summary,
        }));

        setPrints(prints);
      });
  }, []);

  return { prints, getPrints };
};

export default use3dprintingModel;
