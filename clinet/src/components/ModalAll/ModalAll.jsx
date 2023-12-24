import React, { useState } from "react";
// import { Typography, Dialog } from "@mui/material";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ModalAll = ({ children, title, open, setOpen }) => {
  function closeModal() {
    setOpen(false);
  }
  return (
    // <Dialog open={open} onClose={() => setOpen(!open)}>
    //   <main className="w-[385px] md:w-[700px] px-4 py-5 no-scrollbar">
    //     <Typography
    //       className="text-center pb-10"
    //       id="spring-modal-title"
    //       variant="h6"
    //       component="h2"
    //     >
    //       {title}
    //     </Typography>
    //     {children}
    //   </main>
    // </Dialog>
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalAll;
