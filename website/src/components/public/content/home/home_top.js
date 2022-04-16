import React from "react";

const HomeTop = () => {
  return (
    <React.Fragment>
      <div style={topImage}>
        <div style={topLabel}>
          <table style={table}>
            <tbody>
              <tr>
                <td
                  style={{ verticalAlign: "bottom" }}
                  className="home-top-label"
                >
                  <h1>My DIY projects</h1>
                  <h3>bottom text here</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

const topLabel = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  color: "#07404B",
};

const topImage = {
  width: "100%",
  height: "80vh",
  backgroundImage: "url('images/background/background.png')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: 0,
  padding: 0,
};

const table = {
  width: "100%",
  height: "40%",
};

export default HomeTop;
