import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("pages.home");
});
Route.get("contact", async ({ view }) => {
  return view.render("pages.contact.contact");
});

Route.get("about", async ({ view }) => {
  return view.render("pages.about.about");
});

/// Todo
Route.get("todos", "TodosController.index");
Route.get("todos/:id", "TodosController.show").as("todos/show");
Route.post("todos", "TodosController.store");

import "./routes/todos";