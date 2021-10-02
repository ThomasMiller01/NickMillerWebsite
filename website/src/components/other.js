export default class Other {
  constructor() {
    this.isMobile = this._getMobile();
  }

  getProjects = () => {
    return fetch("projects.json")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.projects;
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
}
