import { Outlet } from "react-router-dom";
import ListUser from "./_components/list";

export default function UserManagement() {
  return (
    <>
    
      <ListUser />
      <Outlet />
    </>
  );
}
