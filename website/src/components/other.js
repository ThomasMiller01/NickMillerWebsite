export default class Other {
  constructor() {
    this.isMobile = this._getMobile();
  }

  getProjects = () => {
    return fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.projects;
      });
  };

  getAboutMe = () => {
    return fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.aboutme;
      });
  };

  getMobile() {
    return this.isMobile;
  }

  _getMobile() {
    var mql = window.matchMedia("screen and (min-width:992px)");
    if (mql.matches) {
      return false;
    } else {
      return true;
    }
  }

  hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
}
