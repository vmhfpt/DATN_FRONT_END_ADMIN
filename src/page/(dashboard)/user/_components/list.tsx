import { Link } from "react-router-dom";
import Breadcumb from "../../_components/Breadcumb";
import Pagination from "../../_components/Paginagion";
import SearchInput from "../../_components/SearchInput";
import { popupSuccess } from "../../../../components/ui/toast";
export default function ListUser() {
  const props = {
    name_manage: "Users",
    name_feature: "List users",
  };
  const onDelete = () => {
    popupSuccess('Delete success');
  }
  return (
    <>
      <Breadcumb data={props} />
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
        <div className="card px-4 pb-4 sm:px-5 ">


         <div className="flex items-center justify-between">


         <div className=" my-3 flex h-8 items-center justify-between">
            <SearchInput />
          </div>

         <div className="mt-3">
               <Link to="add"> <button className="btn space-x-2 bg-primary px-5 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                  <span>Add user</span>
                </button></Link>
          </div>
         </div>


          <div>
            <div className="mt-5">
              <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
                <table className="is-hoverable w-full text-left">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                        #
                      </th>
                      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                        name
                      </th>
                      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                        Email
                      </th>
                      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                        Image
                      </th>
                      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                        Role
                      </th>
                      <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                        
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                      <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                        1
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        Admin
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        admin@email.com
                      </td>
                      <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" width="100" alt="" className="" />
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                         <div   className="badge rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">Admin</div>
                      </td>

                      <td className="">

                     <Link to="1">
                     <button className="mx-2 btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90" >
                        Edit
                      </button>
                     </Link>

                     <button onClick={ () => onDelete()}className="btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90" >
                            Delete
                        </button>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Pagination />



        </div>
      </div>
    </>
  );
}
