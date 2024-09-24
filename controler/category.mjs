import Category from "../model/category.mjs";

const categoryName = async (req, res) => {
  try {
    const GetCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.json({
      GetCategory: GetCategory,
      message: "Category Successfull",
    });
  } catch (err) {
    res.json(err);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const getCategoryId = await Category.findById(req.params.category_id);
    res.json({
      getCategoryId: getCategoryId,
      message: "Get Category Successfull",
    });
  } catch (err) {
    res.json(err);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const getAll = await Category.find(req.body).select("-password");
    res.json({
      getAll: getAll,
      message: "Get All Category ",
    });
  } catch (err) {
    res.json(err);
  }
};

export { categoryName, getCategoryById, getAllCategory };
