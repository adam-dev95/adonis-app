import Route from "@ioc:Adonis/Core/Route";

Route.get("todos", "TodosController.index").as("todos");
Route.get("todos/create", "TodosController.create").as("todos/create");
Route.post("todos/create", "TodosController.store").as("todo/store");
Route.get("todos/:id", "TodosController.show").as("todos/show");
Route.delete("todos/:id", "TodosController.destroy").as("todos/destroy");
Route.post("todos", "TodosController.store").as("todos/store");
