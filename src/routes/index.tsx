import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../page/(dashboard)/layout";
import ProductManagement from "../page/(dashboard)/product/page";
import AddProduct from "../page/(dashboard)/product/_components/add";
import EditProduct from "../page/(dashboard)/product/_components/edit";
import Dashboard from "../page/(dashboard)";
import UserManagement from "../page/(dashboard)/user/page";
import AddUser from "../page/(dashboard)/user/_components/add";
import EditUser from "../page/(dashboard)/user/_components/edit";
import NotFound from "../page/(dashboard)/_components/NotFound";
import Login from "../page/(dashboard)/auth/login";


export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="" element={<Navigate to="admin" />} />

          <Route path="admin" element={<Layout />}>
            <Route path="" element={<Dashboard />} />


            <Route path="products" element={<ProductManagement />}>
              <Route path="add" element={<AddProduct />} />
              <Route path=":id" element={<EditProduct />} />
            </Route>

            <Route path="users" element={<UserManagement />}>
              <Route path="add" element={<AddUser />} />
              <Route path=":id" element={<EditUser />} />
            </Route>


          </Route>
          <Route path="admin/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
