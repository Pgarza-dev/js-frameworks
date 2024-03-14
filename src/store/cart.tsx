import { create } from "zustand";
import { API_PRODUCTS } from "@/shared/apis";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountedPrice: number;
  tags: string[];
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  reviews: [
    {
      id: string;
      username: string;
      rating: number;
      description: string;
    }
  ];
  productsId: string;
  quantity: number;
}

interface State {
  products: Product[];
  cart: Product[];
  fetchProducts: () => Promise<void>;
  addToCart: (id: string) => void;
  clearCart: () => void;
  deleteProductFromCart: (id: string) => void;
  getCartTotal: () => number;
  getTotalNumberOfItemsInCart: () => number;
  deleteSingleProductFromCart: (id: string) => void;
  addSingleProductToCart: (id: string) => void;
}

const useProductStore = create<State>((set, get) => ({
  products: [],
  cart: [],
  fetchProducts: async () => {
    // console.log("fetching products");

    const response = await fetch(API_PRODUCTS);
    const json = await response.json();
    set((state) => ({ ...state, products: json.data }));
  },
  addToCart: (id: string) => {
    set((state) => {
      const product = state.products.reduce(
        (foundProduct: Product | null, currentProduct: Product) => {
          if (id === currentProduct.id) {
            return currentProduct;
          }
          return foundProduct;
        },
        null
      );
      const productInCartIndex = state.cart.findIndex(
        (currentProduct: Product) => id === currentProduct.id
      );
      if (productInCartIndex === -1) {
        product!.quantity = 1;
        return { ...state, cart: [...state.cart, product!] };
      }

      state.cart[productInCartIndex].quantity += 1;
      return { ...state, cart: [...state.cart, product!] };
    });
  },
  clearCart: () => set(() => ({ cart: [] })),
  deleteProductFromCart: (id: string) =>
    set((state) => {
      const updatedCart = state.cart.filter((product: Product) => {
        if (product.id === id) {
          return false;
        }
        return true;
      });
      return { ...state, cart: updatedCart };
    }),
  getCartTotal: () =>
    get().cart.reduce((total: number, product: Product) => {
      const currentPrice = product.quantity * product.price;
      total += currentPrice;
      return total;
    }, 0),
  getTotalNumberOfItemsInCart: () =>
    get().cart.reduce((total: number, product: Product) => {
      total += product.quantity;
      return total;
    }, 0),
  deleteSingleProductFromCart: (id: string) =>
    set((state) => {
      const productInCartIndex = state.cart.findIndex(
        (currentProduct: Product) => id === currentProduct.id
      );
      if (state.cart[productInCartIndex].quantity > 1) {
        state.cart[productInCartIndex].quantity -= 1;
        return { ...state, cart: [...state.cart] };
      }
      const updatedCart = state.cart.filter((product: Product) => {
        if (product.id === id) {
          return false;
        }
        return true;
      });
      return { ...state, cart: updatedCart };
    }),
  addSingleProductToCart: (id: string) =>
    set((state) => {
      const productInCartIndex = state.cart.findIndex(
        (currentProduct: Product) => id === currentProduct.id
      );
      state.cart[productInCartIndex].quantity += 1;
      return { ...state, cart: [...state.cart] };
    }),
}));

export default useProductStore;
