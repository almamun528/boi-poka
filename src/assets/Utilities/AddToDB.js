//! this all function is Raw Javascript not react function


const getStoreReadList =()=>{ //!step: 1
//read-list
// local storage data formate is String. 
 const storedListStr = localStorage.getItem('read-list') //!step:5
 // --localStorage.getItem('') by this function we can get data
        

    if(storedListStr){ //!step:6
         // when storeLit variable send the data into 
       // getStoreReadList() this function we may set it into local storage by string formate, as we already write localStorage.getItem function.
        const storeList = JSON.parse(storedListStr) //!step:7
        //now we are convert the data into JsonObject because localStorage keeps data into string.
        return storeList
    } else{ //!step:8
        return []
    }
}

const addToStoreReadList =(id)=>{ //! step:2
    //we will  an ID 
    const storeList = getStoreReadList()//!step:3 
    //we get data from getStoreList function.
    //We may get collection data collection of array  

    if(storeList.includes(id)){//!step:4
        console.log("THis book is already exist",id)
        //checking data is exist or not, 
    }
    else{
        //if the data is not exist into database 
        //we will keep the data into storeList() variable. 
        //as the data is coming with array formate, we have to use array push methods.
        storeList.push(id) //!step:4.5


        const storedListStr =JSON.stringify(storeList) //!step:9
        //convert the data into string to set into localStorage.
        localStorage.setItem('read-list',storedListStr) //!step:10
        //set the data into localStorage. 
    }
    
}
// =====================Wish List Function to Save data into Local Storage========


const getDataByWhislist=()=>{ //step : 1
    const storedWishlistStr = localStorage.getItem("wishlist") //step : 5
    if(storedWishlistStr){
        const storedWhsiList = JSON.parse(storedWishlistStr) //step : 7
        return storedWhsiList
    }
    else{ //step : 8
        return []
    }
}
const addDataFromWhishList =(id) =>{ //step : 2
    const storedWhsiList = getDataByWhislist() //step : 3
    if(storedWhsiList.includes(id)){ //step : 4
        console.log("Data is exist", id);
        return 
    }
    else{ //step : 4.5
        storedWhsiList.push(id)
    }
    const storedWishlistStr = JSON.stringify(storedWhsiList)
    localStorage.getItem("wishList", storedWishlistStr)
}

export {addToStoreReadList, getStoreReadList,addDataFromWhishList,getDataByWhislist}