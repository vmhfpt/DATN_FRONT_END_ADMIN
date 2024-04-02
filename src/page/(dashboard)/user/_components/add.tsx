import { Link } from "react-router-dom";

export default function AddUser() {
  return (
    <>
      <div>
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
          role="dialog"
          data-teleport-target="true"
        >
          <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"></div>

          
          <div className="scrollbar-sm relative flex max-w-4xl flex-col overflow-y-auto rounded-lg bg-white px-4 py-10  transition-opacity duration-300 dark:bg-navy-700 sm:px-5">
            <div>
              <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                <div className="col-span-12 sm:col-span-8">
                  <div className="card p-4 sm:p-5">
                    <p className="text-base font-medium text-slate-700 dark:text-navy-100">
                      Add user
                    </p>
                    <div className="mt-4 space-y-4">
                      <label className="block">
                        <span>Company name</span>
                        <span className="relative mt-1.5 flex">
                          <input
                            className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            placeholder="Your Company"
                            type="text"
                          />
                          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                            <i className="fa-regular fa-building text-base"></i>
                          </span>
                        </span>
                      </label>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span>Client name</span>
                          <span className="relative mt-1.5 flex">
                            <input
                              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              placeholder="Your Name"
                              type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                              <i className="far fa-user text-base"></i>
                            </span>
                          </span>
                        </label>
                        <label className="block">
                          <span>Phone number</span>
                          <span className="relative mt-1.5 flex">
                            <input
                              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              placeholder="(999) 999-9999"
                              type="text"
                              x-input-mask="{numericOnly: true, blocks: [0, 3, 3, 4], delimiters: ['(', ') ', '-']}"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                              <i className="fa fa-phone"></i>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                        <label className="block sm:col-span-8">
                          <span>Email Address</span>
                          <div className="relative mt-1.5 flex">
                            <input
                              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              placeholder="Email address"
                              type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                              <i className="fa-regular fa-envelope text-base"></i>
                            </span>
                          </div>
                        </label>
                        <label className="block sm:col-span-4">
                          <span>Pincode</span>
                          <div className="relative mt-1.5 flex">
                            <input
                              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              placeholder="Pincode"
                              type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                              <i className="fa-solid fa-map-pin text-base"></i>
                            </span>
                          </div>
                        </label>
                      </div>
                      <label className="block">
                        <span>Address</span>
                        <textarea
                          placeholder="Your Address (Area and Street)"
                          className="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        ></textarea>
                      </label>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span>City</span>
                          <span className="relative mt-1.5 flex">
                            <input
                              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              placeholder="Your City/Town"
                              type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                              <i className="fa-solid fa-city text-base"></i>
                            </span>
                          </span>
                        </label>
                        <label className="block">
                          <span>State</span>
                          <span className="relative mt-1.5 flex">
                            <input
                              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                              placeholder="Your State"
                              type="text"
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                              <i className="fa-solid fa-flag"></i>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div x-data="{sameBillingAddress:true}">
                        <div className="flex-wrap items-start space-y-2 pt-2 sm:flex sm:space-y-0 sm:space-x-5">
                          <label className="inline-flex items-center space-x-2">
                            <input
                              x-model="sameBillingAddress"
                              className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                              type="checkbox"
                            />
                            <span>Same is Billing Address</span>
                          </label>
                          <div>
                            <button className="border-b border-dotted border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
                              Add Billing Address
                            </button>
                          </div>
                        </div>
                        <div x-show="!sameBillingAddress" x-collapse>
                          <label className="block pt-4">
                            <span>Billing Address</span>
                            <textarea
                              placeholder="Enter billing address"
                              className="form-textarea mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                            ></textarea>
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Link to="..">
                        <button className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>Back</span>
                        </button>
                        </Link>
                       
                        <button className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                          <span>Submit</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:col-span-4 sm:block">
                  <div className="sticky top-24 mt-3">
                    <ol className="steps is-vertical line-space">
                      <li className="step pb-8 before:bg-primary dark:before:bg-accent">
                        <div className="step-header rounded-full bg-primary text-white dark:bg-accent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="ml-4 text-slate-700 dark:text-navy-100">
                          Create Account
                        </h3>
                      </li>
                      <li className="step pb-8 before:bg-primary dark:before:bg-accent">
                        <div className="step-header rounded-full bg-primary text-white dark:bg-accent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="ml-4 text-slate-700 dark:text-navy-100">
                          Select Service
                        </h3>
                      </li>
                      <li className="step pb-8 before:bg-slate-200 dark:before:bg-navy-500">
                        <div className="step-header rounded-full bg-primary text-white dark:bg-accent">
                          3
                        </div>
                        <h3 className="ml-4 text-slate-700 dark:text-navy-100">
                          Address
                        </h3>
                      </li>
                      <li className="step pb-8 before:bg-slate-200 dark:before:bg-navy-500">
                        <div className="step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white">
                          4
                        </div>
                        <h3 className="ml-4 text-slate-700 dark:text-navy-100">
                          Submit
                        </h3>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
