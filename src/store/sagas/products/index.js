import { all } from "redux-saga/effects";
import { getAllProductsWatcher } from "./get_all_products.saga";
import { searchProductsWatcher } from "./search_products.saga";
import { getProductsInCategoryWatcher } from "./category_products.saga";
import { getProductsInDepartmentWatcher } from "./department_products.saga";

export default function* productsSaga() {
  yield all([
    getAllProductsWatcher(),
    searchProductsWatcher(),
    getProductsInCategoryWatcher(),
    getProductsInDepartmentWatcher()
  ]);
}
