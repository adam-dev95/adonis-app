import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import View from "@ioc:Adonis/Core/View";
import Todo from "App/Models/Todo";

export default class TodosController {
  public async index({}: HttpContextContract) {
    const todos = await Todo.all();
    return View.render("todos/index", { todos });
  }

  public async create({}: HttpContextContract) {
    return View.render("todos/create");
  }

  public async store({ request, response }: HttpContextContract) {
    const { name } = request.body();
    const todo = new Todo();
    todo.name = name;
    await todo.save();
    response.redirect().toRoute("todos/show", [todo.id]);
  }

  public async show({ request }: HttpContextContract) {
    const id = request.params().id;
    const todo = await Todo.find(id);
    return View.render("todos/show", { todo });
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ request }: HttpContextContract) {
    console.log("ok");
  }
}
