import Card from "../components/Card";
import apiClient from "./Client"

const endPoint = '/listings'

const getListings = () =>apiClient.get(endPoint);

export const addListing = (listing,onUploadProgess) =>{
    const data = new FormData();
    data.append('title',listing.title);
    data.append('price',listing.price);
    data.append('categoryId',listing.category.value);
    data.append('description',listing.description);

    listing.images.forEach((image,index)=>
    data.append('images',{
        name:"image" + index,
        type:"images/jpeg",
        uri:image
    }))

    if (listing.location)
data.append("location", JSON.stringify(listing.location));

   return apiClient.post(endPoint,data,{
       onUploadProgress:(progess) =>
       onUploadProgess(progess.loaded/progess.total)
   })
};


export default {
    getListings,
    addListing 
}