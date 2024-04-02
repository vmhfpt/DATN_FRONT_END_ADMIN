import { Link } from "react-router-dom";
interface Ibreadcumb {
    data : {
        name_manage : string;
        name_feature : string;
    }
}
export default function Breadcumb({data} : Ibreadcumb){
    return (<>
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Home
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <Link
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              to=""
            >
              {data.name_manage}
            </Link>
            <svg
              x-ignore
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>{data.name_feature}</li>
        </ul>
      </div>
    </>)
}