import ProductosModel from "../models/ProductosModel.js";

export const getAllProductos = async (req, res) => {
  try {
    const productos = await ProductosModel.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProducto = async (req, res) => {
  try {
    const producto = await ProductosModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(producto[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProducto = async (req, res) => {
  try {
    await ProductosModel.create(req.body);

    res.json({
      message: "Destacado creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const updateProducto = async (req, res) => {
  try {
    await ProductosModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    await ProductosModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
