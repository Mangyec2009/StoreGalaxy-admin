"use client";
import { useAdmin } from '@/store/useAdmin';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { softApi } from '@/config/config';
import { Pencil } from 'lucide-react';

let fileApi = softApi + "/images/";

const Category = () => {
  let { category, getCategory, postCategory, putCategory } = useAdmin();
  let [name, setName] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("CategoryImage", e.target.elements["image"].files[0]);
    formData.append("CategoryName", e.target.elements["name"].value);

    try {
      await postCategory(formData);
      alert("Category added successfully!");
    } catch (error) {
      console.error("Error adding Category:", error.response?.data || error.message);
      alert("Failed to add Category. Please check the input and try again.");
    }
  };

  const handleEdit = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("CategoryImage", e.target.elements["image"].files[0]);
    formData.append("CategoryName", e.target.elements["name"].value);
    formData.append("Id", id);
    try {
      await putCategory(formData);
      alert("Category updated successfully!");
    } catch (error) {
      console.error("Error updating Category:", error.response?.data || error.message);
      alert("Failed to update Category. Please check the input and try again.");
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      {/* Dialog for adding a category */}
      <Dialog>
        <DialogTrigger className="px-4 py-2 my-[20px] bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
          + Add new
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-gray-700">Add New Category</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Category Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter category name"
                className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Category Cards */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {category.map((el) => (
          <div
            key={el.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <Image
              src={fileApi + el.categoryImage}
              width={400}
              height={250}
              alt={el.categoryName}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">{el.categoryName}</h1>
              <Dialog>
                <DialogTrigger>
                  <Pencil className="text-blue-500" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-gray-700">Edit Category</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={(e) => handleEdit(e, el.id)} className="space-y-4">
                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700">Category Image</label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Category Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
