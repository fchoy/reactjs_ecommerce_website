/*Used to contain arrays of objects that contain attributes of an item that we can use in different components*/
import imgSrc from "./Components/Images/clothing1.jpg"
import imgSrc2 from "./Components/Images/clothing2.webp"
import loungeWear from "./Components/Images/loungewear.png"
import btshirt from "./Components/Images/blacktshirt.png"
import pants from "./Components/Images/chinos1.jpg"
import shoes from "./Components/Images/shoes.jpeg"

export const sliderItems= [
    {
        id : 1, 
        img : imgSrc,
        title : "Summer Sale",
        decription : "Don't miss out on this opportunity! Get 30% off on selected styles.",
        bg : "f5fafd",
    },

    {
        id : 2, 
        img : imgSrc2,
        title : "Autumn Collection",
        decription : "New styles for your fall wardrobe. Get 30% off selected autumn clothing.",
        bg : "fcf1ed",
    },

    {
        id : 3, 
        img : loungeWear,
        title : "Loungewear",
        decription : "Sleep no longer has to be boring. Get 30% off selected loungewear.",
        bg : "fcf1ed",
    }
];

export const categories = [
    {
        id : 1, 
        img : btshirt,
        title : "Tops",
    },

    {
        id : 2, 
        img : pants,
        title : "Bottoms",
    },

    {
        id : 3, 
        img : shoes,
        title : "Footwear",
    }
];

export const popularProducts = [
    {
        id: 1, 
        img : "https://essentialshoodie.store/wp-content/uploads/2022/01/Fear-Of-God-Essentials-Hoodie.jpg",
        height : ""
    }, 
    
    {
        id: 2, 
        img : "https://media.gq.com/photos/624c7fa19a57a1eb0f870666/master/w_2000,h_1333,c_limit/nike-5.jpg",
        height : ""
    },     
    
    {
        id: 3, 
        img : "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422371/item/goods_31_422371.jpg",
        height : ""
    }, 

    {
        id: 4, 
        img : "https://cdn.shopify.com/s/files/1/0330/1705/products/ame_hoodie_1.jpg?v=1638483444",
        height : "30vh"
    }, 
    
    {
        id: 5, 
        img : "https://cdn.shopify.com/s/files/1/0330/1705/products/BAELZ_CAP_1000x.png?v=1659116612",
        height : "35vh"
    },     
    
    {
        id: 6, 
        img : shoes,
        height : ""
    } 
];

const size = {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobile : `(max-width: ${size.mobile})`
};