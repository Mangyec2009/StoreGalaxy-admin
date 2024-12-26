"use client"
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAdmin } from '@/store/useAdmin'
import { Pencil, Trash } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Other = () => {
  let { brands, getBrands, postBrand, deleteBrand, putBrand } = useAdmin();
  let [edit, setEdit] = useState(false);
  let [name, setName] = useState("");
  let [idx, setIdx] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target["name"].value;
    e.target["name"].value = "";
    postBrand(name);
  };

  return (
    <>
      <div className="w-[90%] mx-auto flex items-start mt-[20px] justify-between">
        <div className="overflow-x-auto w-[40%]">
          <table className="w-[100%] table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-purple-600 text-white">
              <tr className="text-left">
                <th className="py-3 px-[10px] text-left">Brand Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {brands?.map((el) => {
                return (
                  <tr key={el.id} className="border-t text-left hover:bg-gray-100">
                    <td className="py-3">
                      <div className="flex items-center">
                        {edit && idx === el.id ? (
                          <input
                            ref={inputRef}
                            type="text"
                            value={name}
                            className="border-[2px] border-black"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter new name"
                            name=""
                            id=""
                          />
                        ) : (
                          <span className="ml-2">{el.brandName}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 flex items-center gap-[10px]">
                      {edit && idx === el.id ? (
                        <button
                          onClick={() => {
                            setEdit(false);
                            putBrand(name, idx);
                          }}
                        >
                          Submit
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setName(el.brandName);
                            setEdit(true);
                            setIdx(el.id);
                          }}
                        >
                          <Pencil className="text-blue-500 mr-[10px]" />
                        </button>
                      )}

                      <Dialog>
                        <DialogTrigger>
                          <Trash className="text-red-500" />
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>

                            <h1 className="">
                              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                            </h1>
                            <div className="">
                              <button
                                onClick={() => {
                                  deleteBrand(el.id);
                                }}
                              >
                                <Button type="button" variant="destructive">
                                  Delete
                                </Button>
                              </button>
                              <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                  Close
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="w-[45%] max-w-full h-[250px] shadow-md border border-gray-300 rounded-lg bg-white p-6 flex flex-col justify-center">
          <h1 className="text-xl font-semibold mb-6">Add new brand</h1>
          <form className="flex flex-col items-end" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Brand name"
              className="h-10 px-3 py-[10px] w-full border border-gray-300 rounded-md mb-5 text-sm"
            />
            <button
              className="h-10 px-[40px] bg-blue-600 text-white rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 hover:bg-blue-800"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Other;
