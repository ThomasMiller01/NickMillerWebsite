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
  color: "#DDE0BD",
};

const topImage = {
  width: "100%",
  height: "100vh",
  backgroundImage:
    "url('https://images.pexels.com/photos/4709389/pexels-photo-4709389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: 0,
  padding: 0,
};

const table = {
  width: "100%",
  height: "45%",
};

export default HomeTop;
