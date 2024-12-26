"use client"
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { softApi } from '@/config/config';
import { useAdmin } from '@/store/useAdmin'
import { Pencil, Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

let fileAPI = softApi + "/images/"

const Products = () => {
    let { products, getProd, deleteProd, postProd, putProd} = useAdmin();  
    const [checked, setChecked] = useState(false);
    let [delMod, setDelMod] = useState(false);
    let [modalAdd, setModalAdd] = useState(false);
    let [brand, setBrand] = useState("");
    let [color, setColor] = useState("");
    let [name, setName] = useState("");
    let [desc, setDesc] = useState("");
    let [idx, setIdx] = useState(null);


    useEffect(() => {
        getProd();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
    
        const imageFiles = e.target.elements["image"].files;
        for (let file of imageFiles) {
            formData.append("Images", file);
        }
    
        formData.append("BrandId", parseInt(e.target.elements["brandId"].value, 10));
        formData.append("ColorId", parseInt(e.target.elements["colorId"].value, 10));
        formData.append("ProductName", e.target.elements["productName"].value);
        formData.append("Description", e.target.elements["description"].value);
        formData.append("Quantity", parseInt(e.target.elements["quantity"].value, 10));
        formData.append("Weight",  ""); // Optional
        formData.append("Size",  ""); // Optional
        formData.append("Code", e.target.elements["code"].value);
        formData.append("Price", parseFloat(e.target.elements["price"].value));
        formData.append("HasDiscount", e.target.elements["discount"].value === "true");
        // formData.append("DiscountPrice", parseFloat(e.target.elements["discountPrice"].value) || 0);
        formData.append("SubCategoryId", parseInt(e.target.elements["subCategoryId"].value, 10));
    
        try {
            await postProd(formData);
            alert("Product added successfully!");
        } catch (error) {
            console.error("Error adding product:", error.response?.data || error.message);
            alert("Failed to add product. Please check the input and try again.");
        }
    };

    const handleSubmit2 = async (e, id) => {
        e.preventDefault();
    
        const formData = new FormData();
    
        const imageFiles = e.target.elements["image"].files;
        for (let file of imageFiles) {
            formData.append("Images", file);
        }
    
        formData.append("BrandId", parseInt(e.target.elements["brandId2"].value, 10));
        formData.append("ColorId", parseInt(e.target.elements["colorId2"].value, 10));
        formData.append("ProductName", e.target.elements["productName2"].value);
        formData.append("Description", e.target.elements["description2"].value);
        formData.append("Quantity", parseInt(e.target.elements["quantity2"].value, 10));
        formData.append("Weight",  ""); // Optional
        formData.append("Size",  ""); // Optional
        formData.append("Code", e.target.elements["code2"].value);
        formData.append("Price", parseFloat(e.target.elements["price2"].value));
        formData.append("HasDiscount", e.target.elements["discount2"].value === "true");
        // formData.append("DiscountPrice", parseFloat(e.target.elements["discountPrice"].value) || 0);
        formData.append("SubCategoryId", parseInt(e.target.elements["subCategoryId2"].value, 10));
    
        try {
            await putProd(formData, id);
            alert("Product added successfully!");
        } catch (error) {
            console.error("Error adding product:", error.response?.data || error.message);
            alert("Failed to add product. Please check the input and try again.");
        }
    };

    return (
        <div className=''>
            <h1 className="text-3xl font-semibold mb-6">Списки товаров</h1>
            <Dialog>
                <DialogTrigger>
                    Add product
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Product adding</DialogTitle>                                
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <input type="file" name="image" id="" />
                        <input type="number" className='border-[2px] border-[black]' placeholder='BrandId' name="brandId" id="" />
                        <input type="number" className='border-[2px] border-[black]' placeholder='ColorId' name="colorId" id="" />
                        <input type="text" className='border-[2px] border-[black]' placeholder='Product Name' name="productName" id="" />
                        <input type="text" className='border-[2px] border-[black]' placeholder='Description' name="description" id="" />
                        <input type="number" className='border-[2px] border-[black]' placeholder='Quantity' name="quantity" id="" />
                        <input type="text" className='border-[2px] border-[black]' placeholder='Code' name="code" id="" />
                        <input type="number" className='border-[2px] border-[black]' placeholder='Price' name="price" id="" />
                        <select name="discount" id="" className='border-[2px] border-[black]'>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <input type="number" className='border-[2px] border-[black]' placeholder='SubCategoryId' name="subCategoryId" id="" />
                        <Button type="submit" variant="primary">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">
                                <input type="checkbox" onChange={(e) => {setChecked(!checked)}} checked={checked} className="w-4 h-4" />
                            </th>
                            <th className="py-3 px-4 text-left">Товар</th>
                            <th className="py-3 px-4 text-left">Колвичество</th>
                            <th className="py-3 px-4 text-left">Категория</th>
                            <th className="py-3 px-4 text-left">Цена</th>
                            <th className="py-3 px-4 text-left">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((el) => {
                            return (
                                <tr key={el.id} className="border-t hover:bg-gray-100">
                                    <td className="py-3 px-4">
                                        <input type="checkbox" checked={checked} onChange={(e) => {setChecked(!checked)}} className="w-4 h-4" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center">
                                            <Image src={fileAPI + el.image} width={50} height={50} alt={el.productName} className="rounded-lg" />
                                            <span className="ml-2">{el.productName}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">{el.quantity}</td>
                                    <td className="py-3 px-4">{el.color}</td>
                                    <td className="py-3 px-4">{el.price} $</td>
                                    <td className="py-3 px-4">
                                        <Dialog>
                                            <DialogTrigger><Pencil className='text-blue-500 mr-[10px]' /></DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Product editing</DialogTitle>                                
                                                </DialogHeader>
                                                <form onSubmit={(e) => {handleSubmit2(e, el.id)}}>
                                                    <input type="file" name="image" id="" />
                                                    <input type="number" className='border-[2px] border-[black]' placeholder='BrandId' name="brandId2" id="" />
                                                    <input type="number" className='border-[2px] border-[black]' placeholder='ColorId' name="colorId2" id="" />
                                                    <input type="text" className='border-[2px] border-[black]' placeholder='Product Name' name="productName2" id="" />
                                                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className='border-[2px] border-[black]' placeholder='Description' name="description2" id="" />
                                                    <input type="number" className='border-[2px] border-[black]' placeholder='Quantity' name="quantity2" id="" />
                                                    <input type="text" className='border-[2px] border-[black]' placeholder='Code' name="code2" id="" />
                                                    <input type="number" className='border-[2px] border-[black]' placeholder='Price' name="price2" id="" />
                                                    <select name="discount2" id="" className='border-[2px] border-[black]'>
                                                        <option value="true">Yes</option>
                                                        <option value="false">No</option>
                                                    </select>
                                                    <input type="number" className='border-[2px] border-[black]' placeholder='SubCategoryId' name="subCategoryId2" id="" />
                                                    <Button type="submit" variant="primary">Submit</Button>
                                                </form>
                                            </DialogContent>
                                        
                                        </Dialog>
                                        <Dialog>
                                        <DialogTrigger>
                                          <Trash className="text-red-500" /> 
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                        
                                                <h1 className=''>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                                </h1>
                                                <div className=''>
                                                    <button onClick={() => {deleteProd(el.id)}}>
                                                    <Button type="button" variant="destructive">Delete</Button>
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
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products
