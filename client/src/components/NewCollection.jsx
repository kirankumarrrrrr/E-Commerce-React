import React, { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";

const NewCollection = () => {
  const [productData, SetproductData] = useState([]);
  const [CategoryChoicesarray, setCategoryChoicesarray] = useState([]);
  const [tempProducts, setTempProducts] = useState([]);
  const [itemsChecked,setitemsChecked] =  useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        SetproductData(data);
        let choicess = [];
        data.map((ele)=>{
          if(!choicess.includes(ele.category)){
            choicess.push(ele.category);
          }
        });
        let obj={};
        choicess.map((ele)=>{
          obj[ele] = false;
        })
      
        setCategoryChoicesarray(choicess);
        setitemsChecked(obj);
        setTempProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const sortby = (e) => {
    SetproductData(tempProducts);
    let sortabledata = [...productData];
    if(e.target.value == 'lth'){
      let sorteddata = sortabledata.sort((a, b) => {
        return a.price - b.price; // Ascending order
      });
      SetproductData(sorteddata);
    }
    if(e.target.value == 'htl'){
      let sorteddata = sortabledata.sort((a, b) => {
        return b.price - a.price; // Descending order
      });
      SetproductData(sorteddata);
    }
    if(e.target.value == "rate"){
      let sorteddata = sortabledata.sort((a,b)=>{
        return b.rating.rate - a.rating.rate
      });
      SetproductData(sorteddata);
    }
    if(e.target.value == ""){
      SetproductData(tempProducts);
    }
  }

  const addtocart = (product, index) => {
    console.log("clicked", product, index);
  };
  const handleclick = (e) => {
    let tempchecks = itemsChecked;
    tempchecks[e.target.value] = e.target.checked;
    console.log(tempchecks,"uooo");
    let filteredarray = [...tempProducts];
    setitemsChecked(tempchecks);
    let finalfilteredarray = [];
    filteredarray.map((ele)=>{
      if(tempchecks[ele.category]){
        finalfilteredarray.push(ele);
      }else {
        if(finalfilteredarray.includes(ele)){
          finalfilteredarray.pop(ele);
        }
      }
    })
    // let finalfilteredarray = filteredarray.filter((ele)=>{
    //   if(ele.category == e.target.value){
    //     return ele;
    //   }
    // })
    SetproductData(finalfilteredarray);
    if(!finalfilteredarray.length){
      SetproductData(tempProducts);
    }
    console.log(e.target.value);
    console.log(e.target.checked);
  };

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[1fr_4fr] gap-14 my-10 mt-10">
        <div>
          <p className="text-xl cursor-pointer gap-2">Filters</p>
          {/* <div className="flex flex-col border border-gray-300 pl-5 py-3 mt-6 sm:block">
            <h2 className="mb-3 text-sm font-medium">Categories</h2>
            <div className="flex flex-row gap-2 p-2">
              <input type="checkbox" value="Men" onChange={handleclick} />
              <label>Men</label>
            </div>
            <div className="flex flex-row gap-2 p-2">
              <input type="checkbox" value="Women" onChange={handleclick} />
              <label>Women</label>
            </div>
            <div className="flex flex-row gap-2 p-2">
              <input type="checkbox" value="Kids" onChange={handleclick} />
              <label>Kids</label>
            </div>
          </div> */}
          <div className="flex flex-col border border-gray-300 pl-5 py-3 mt-6 sm:block">
            <h2 className="mb-3 text-sm font-medium">TYPE</h2>
            {CategoryChoicesarray.map((ele,index)=>(
              <div key={index} className="flex flex-row gap-2 p-2">
              <input type="checkbox" value={ele} onChange={handleclick} />
              <label>{ele}</label>
            </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center">
          <p className="mr-auto text-xl cursor-pointer gap-2">All Collections</p>
          <div className="flex justify-end items-center">
            <label className="text-xl cursor-pointer px-4">Sort By: </label>  
            <select className="border mr-0 px-6 py-2 text-black rounded-md shadow" onChange={sortby}>
              <option value="">None</option>
              <option value="rate">Rating</option>
              <option value="lth">Low to High</option>
              <option value="htl">High to Low</option>
            </select>
          </div>
          </div>
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {productData.map((product, index) => (
              <div
                key={index}
                className="cursor-pointer flex gap-5 bg-rgb(90, 86, 86)-200 flex flex-col items-center justify-center"
              >
                <img
                  className="transform transition-transform duration-300 hover:scale-110 items-center justify-center w-48 h-48 object-contain"
                  src={product.image}
                  alt={product.title}
                />
                <div className="flex flex-col justify-center pb-2">
                  <p>{product.title}</p>
                  <p className="text-sm font-medium font-bold">
                    $ {product.price}
                  </p>
                </div>
                <div className="mt-auto mr-auto flex flex-col justify-start items-start gap-4 pb-5 width-100%">
                  <button
                    className="border px-4 py-2 bg-grey-600 text-black font-semibold rounded-md shadow hover:bg-[rgb(243,132,11)] transition duration-300"
                    onClick={() => addtocart(product, index)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
