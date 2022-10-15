/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

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

