const path = require("path");

const {
  NODE_ENV = 'development'
} = process.env;

module.exports = function (app) {
  const API_ENDPOINT = "/api";
  const API_VERSION = "v1";
  // app.use(`${API_ENDPOINT}/${API_VERSION}/orders`, require("./products.routes"));
  app.use(`${API_ENDPOINT}/${API_VERSION}/home`, require("./home.routes"));

  //! Todo handle ajax 404 vs static files
  app.get("*", (req, res) => {
    if (req.xhr) {
      return res.sendStatus(404);
    }
    if (NODE_ENV === "production") {
      res.sendFile(path.join(__dirname, "../../client/", "build/index.html"));
    }
  });


  app.all("*", (req, res) => {
    res.sendStatus(404);
  });
};