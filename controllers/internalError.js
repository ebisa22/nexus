const internalError = (err, req, res, next) => {
  res.status(500).render("errors/500.ejs", {
    title: "Server Error",
  });
};

export default internalError;