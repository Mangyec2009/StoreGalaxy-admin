import axiosRequest from "@/utils/axiosRequest";

const { create } = require("zustand");

export const useAdmin = create((set, get) => ({
    products: [],
    getProd: async () => {
        try {
            let {data} = await axiosRequest("/Product/get-products?PageSize=1000");
            set({products: data?.data?.products});
        } catch (error) {
            console.error(error);
        }
    },
    deleteProd: async (id) => {
        try {
            await axiosRequest.delete(`/Product/delete-product?id=${id}`);
            get().getProd()
        } catch (error) {
            console.error(error);
        }
    },
    postProd: async (formData) => {
        try {
            await axiosRequest.post("/Product/add-product", formData);  
            get().getProd();          
        } catch (error) {
            console.error("API error:", error.response?.data || error.message);
            throw error;
        }
    },
    putProd: async (formData, id) => {
        try {
            await axiosRequest.put(`/Product/update-product?Id=${id}`, formData);
            get().getProd();
        } catch (error) {
            console.error(error);
        }
    },
    brands: [],
    getBrands: async () => {
        try {
            let {data} = await axiosRequest("/Brand/get-brands?PageSize=1000");
            set({brands: data.data});
        } catch (error) {
            console.error(error);
        }
    },
    postBrand: async (name) => {
        try {
            await axiosRequest.post(`/Brand/add-brand?BrandName=${name}`);
            get().getBrands();
        } catch (error) {
            console.error(error);
        }
    },
    putBrand: async (name, id) => {
        try {
            await axiosRequest.put(`/Brand/update-brand?Id=${id}&BrandName=${name}`);
            get().getBrands();
        } catch (error) {
            console.error(error);
        }
    },
    deleteBrand: async (id) => {
        try {
            await axiosRequest.delete(`/Brand/delete-brand?id=${id}`);
            get().getBrands()
        } catch (error) {
            console.error(error);
        }
    },


    colors: [],
    getColors: async () => {
        try {
            let {data} = await axiosRequest("/Color/get-colors?PageSize=1000");
            set({colors: data.data});
        } catch (error) {
            console.error(error);
        }
    },
    postColor: async (name) => {
        try {
            await axiosRequest.post(`/Color/add-color?ColorName=${name}`);
            get().getColors();
        } catch (error) {
            console.error(error);
        }
    },
    putColor: async (name, id) => {
        try {
            await axiosRequest.put(`/Color/update-color?Id=${id}&ColorName=${name}`);
            get().getColors();
        } catch (error) {
            console.error(error);
        }
    },
    deleteColor: async (id) => {
        try {
            await axiosRequest.delete(`/Color/delete-color?id=${id}`);
            get().getColors()
        } catch (error) {
            console.error(error);
        }
    },
    category: [],
    getCategory: async () => {
        try {
            let {data} = await axiosRequest("/Category/get-categories");
            set({category: data.data});
        } catch (error) {
            console.error(error);
        }
    },
    postCategory: async (obj) => {
        try {
            await axiosRequest.post("/Category/add-category", obj);
            get().getCategory();
        } catch (error) {
            console.error(error);
        }
    },
    putCategory: async (obj) => {
        try {
            await axiosRequest.put(`/Category/update-category`, obj)
        } catch (error) {
            
        }
    },
    deleteCategory: async (id) => {
        try {
            await axiosRequest.delete();
        } catch (error) {
            
        }
    },

    profile: [],
    getProfile: async() => {
        try {
            let {data} = await axiosRequest("/UserProfile/get-user-profiles");
            set({profile: data.data});
        } catch (error) {
            console.error(error);
        }
    }
}))