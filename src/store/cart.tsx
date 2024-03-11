
import { create, StateCreator } from 'zustand';
import { API_PRODUCTS } from '@/shared/apis';

interface Product {
    id: string;
    quantity: number;
    price: number;
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
}

const useProductStore = create<State>((set, get) => ({
    products: [],
    cart: [],
    fetchProducts: async () => {
        const response = await fetch(API_PRODUCTS);
        const json = await response.json();
        set((state) => ({ ...state, products: json.data }));
    },
    addToCart: (id: string) => {
        set((state) => {
            const product = state.products.find(
                (currentProduct: Product) => id === currentProduct.id,
            );
            const productInCartIndex = state.cart.findIndex(
                (currentProduct: Product) => id === currentProduct.id,
            );
            if (productInCartIndex === -1) {
                product!.quantity = 1;
                return { ...state, cart: [...state.cart, product!] };
            }
            state.cart[productInCartIndex].quantity += 1;
            return { ...state };
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
}));

export default useProductStore;

