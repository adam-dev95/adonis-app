import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import View from "@ioc:Adonis/Core/View";

export default class ProductsController {
  // Return all products from DB
  public async index({}: HttpContextContract) {
    const products = [
      { id: 1, title: "Produit 1" },
      { id: 2, title: "Produit 2" },
    ];
    return View.render("pages.products.index", { products });
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  // Return one product from DB
  public async show({ request }: HttpContextContract) {
    const products = [
      { id: 1, title: "Produit 1" },
      { id: 2, title: "Produit 2" },
      { id: 3, title: "Produit 3" },
    ];
    const id = Number(request.params().id);
    const index = products.findIndex((item) => item.id === id);
    const product = products[index]
    return View.render("pages.products.show", { product });
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
