import toast from "react-hot-toast";

export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if(!data) return null;
  return JSON.parse(data);
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearFromLocalStorage = () => {
  localStorage.clear();
};

export const saveToLocalStorage = (key, value) => {
  let data = localStorage.getItem(key);
  data = JSON.parse(data);

  if (data) {
    const alreadyAdded = data.find((item) => item.bookId === value.bookId);
    if (!alreadyAdded) {
      addToLocalStorage(key, JSON.stringify([...data, value]));
      toast.success(`Added to ${key === "read" ? "Read Books" : "Wishlist Books"}`);
    } else {
      toast.error(
        `Already Added to ${key === "read" ? "Read Books" : "Wishlist Books"}`
      );
    }
  } else {
    addToLocalStorage(key, JSON.stringify([value]));
    toast.success(`Added to ${key === "read" ? "Read Books" : "Wishlist Books"}`);
  }
};

export const addToWishlist = (key, value) => {
  let data = localStorage.getItem('read');
  data = JSON.parse(data);

  if(data){
    const alreadyAdded = data.find((item) => item.bookId === value.bookId);
    if(alreadyAdded){
      toast.error(
        'Already Added to Read Books'
      );
    }else{
      saveToLocalStorage(key, value);
    }
  }else{
    saveToLocalStorage(key, value);
  }
};

export const addToRead = (key, value) => {
  saveToLocalStorage(key, value);
}
