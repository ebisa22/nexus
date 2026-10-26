const error404 = (req, res) => {
  res.status(404).render("errors/404.ejs", {
    title: "Page Not Found",
  });
};

export default error404;