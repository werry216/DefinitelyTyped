// Type definitions for shopify-buy v1.0.0
// Project: http://shopify.github.io/js-buy-sdk/api/
// Definitions for 0.4.2 by: Martin Köhn <https://github.com/openminder>
// Definitions update by: Stephen Traiforos <https://github.com/straiforos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7.*

/**
 * The JS Buy SDK is a lightweight library that allows you to build ecommerce into any website.
 * It is based on Shopify’s API and provides the ability to retrieve products and collections from your shop,
 * add products to a cart, and checkout.
 * It can render data on the client side or server. This will allow you to add ecommerce functionality to any
 * website or javascript application. This is helpful if you already have a website and need to add ecommerce
 * or only need a simple buy button on your site.
 */

declare namespace ShopifyBuy {
    export function buildClient(config: ShopifyBuy.Config): Client;

    export interface Client {
        product: ShopifyBuy.ProductAPI;
        collection: ShopifyBuy.CollectionAPI;
        checkout: ShopifyBuy.CheckoutAPI;
    }
    export interface Config {
        domain: string;
        storefrontAccessToken: string;
    }

    export interface ProductAPI {
        fetch(id: string): Promise<Product[]>;
        fetchQuery(id: Query): Promise<Product[]>;
        fetchAll(): Promise<Product[]>;
    }

    export interface CollectionAPI {
        fetch(id: string): Promise<Product[]>;
        fetchWithProducts(id: string): Promise<any[]>; // TODO fix to be a type
    }

    export interface CheckoutAPI {
        /**
         * Remove all line items from cart
         */
        clearLineItems(): Promise<Cart>;

        /**
         * Add items to cart. Updates cart's lineItems
         */
        addVariants(item: Item, nextItem?: Array<Item>): Promise<Cart>;

        /**
         * Add items to the cart. Updates cart's lineItems based on variants passed in.
         */
        createLineItemsFromVariants(...items: Item[]): Promise<Cart>;

        /**
         * Remove a line item from cart based on line item id
         */
        removeLineItem(id: string): Promise<Cart>;

        /**
         * Update a line item quantity based on line item id
         */
        updateLineItem(id: string, quantitiy: number): Promise<Cart>;

        /**
         * Force update of cart model on server. This function will only be used in advanced
         * situations and does not need to be called explicitly to update line items.
         * It is automatically called after createLineItemsFromVariants, updateLineItem,
         * removeLineItem, and removeLineItem
         */
        updateModel(): Promise<Cart>;
    }

    export interface Query {
        query: string;
        sortBy: string;
        after?: string;
        before?: string;
        first?: string;
        last?: string;
        reverse?: boolean;
    }

    export interface Product {
        /**
         * A product description.
         */
        description: string;

        /**
         * Product unique ID
         */
        id: string | number;

        /**
         * An Array of Objects that contain meta data about an image including src of the images.
         */
        images: Array<Image>;

        /**
         * All variants of a product.
         */
        variants: Array<ProductVariant>;

        /**
         * Get an array of Product Options. Product Options can be used to define
         * the currently selectedVariant from which you can get a checkout url (ProductVariant.checkoutUrl)
         * or can be added to a cart (Cart.createLineItemsFromVariants).
         */
        options: Array<Option>;

        /**
         * Retrieve variant for currently selected options. By default the first value in each option is selected
         * which means selectedVariant will never be null. With a selectedVariant you can
         * create checkout url (ProductVariant.checkoutUrl) or
         * it can be added to a cart (Cart.createLineItemsFromVariants).
         */
        selectedVariant: ProductVariant;

        /**
         * Retrieve image for currently selected variantImage.
         */
        selectedVariantImage: Image;

        /**
         * A read only Array of Strings represented currently selected option values. eg. ["Large", "Red"]
         */
        selections: Array<string>;

        /**
         * The product title
         */
        title: string;
    }

    export interface ProductVariant {
        /**
         * Variant in stock. Always true if inventory tracking is disabled.
         */
        available: boolean;

        /**
         * Compare at price for variant. The compareAtPrice would be the price of the
         * product previously before the product went on sale.
         */
        compareAtPrice: string;

        /**
         * Price of variant, formatted according to shop currency format string. For instance "$10.00"
         */
        formattedPrice: string;

        /**
         * Variant weight in grams. If no weight is defined grams will be 0.
         */
        grams: number;

        /**
         * Variant unique ID
         */
        id: string | number;

        /**
         * Image for variant
         */

        image: Image;

        /**
         * Image variants available for a variant.
         */
        imageVariant: Array<ImageVariant>;

        /**
         * Option values associated with this variant, ex {name: "color", value: "Blue"}
         */
        optionValues: Array<OptionValue>;

        /**
         * Price of the variant. The price will be in the following form: "10.00"
         */
        price: string;

        /**
         * ID of product variant belongs to
         */
        productId: string | number;

        /**
         * Title of product variant belongs to
         */
        productTitle: string;

        /**
         * Title of variant
         */
        title: string;

        /*
        * Get a checkout url for a specific product variant.
        * You can optionally pass a quantity.
        * If no quantity is passed then quantity will default to 1.
        */
        checkoutUrl(quantitiy: number): string;
    }

    export interface Option {
        /**
         * name of option (ex. "Size", "Color")
         */
        name: string;

        /**
         * get/set the currently selected option value with one of the values from the Product Options/values array.
         * For instance if the option values array had the following ["Large", "Medium", "Small"] setting selected to be
         * "Large", "Medium", or "Small" would be valid any other value would throw an Error.
         */
        selected: string;

        /**
         * an Array possible values for option. For instance if this option
         * is a "Size" option an example value for values could be: ["Large", "Medium", "Small"]
         */
        values: Array<any>;
    }

    /* 
    *   TODO this should be solved during TDD
    *   export interface Collection {} 
    */

    export interface Cart {
        /**
         * Get checkout URL for current cart
         */
        checkoutUrl: string;

        /**
         * get ID for current cart
         */
        id: string | number;

        /**
         * Gets the total quantity of all line items. Example: you've added two variants
         * with quantities 3 and 2. lineItemCount will be 5.
         */
        lineItemCount: number;

        /**
         * Get an Array of CartLineItemModel's
         */
        lineItems: LineItem;

        /**
         * Get current subtotal price for all line items.
         * Example: two items have been added to the cart that cost $1.25 then the subtotal will be 2.50
         */
        subtotal: string;
    }

    export interface LineItem {
        /**
         * Compare at price for variant. The compareAtPrice would be the price of the product
         * previously before the product went on sale.
         * If no compareAtPrice is set then this value will be null. An example value: "5.00".
         */
        compare_at_price: string;

        /**
         * Variant's weight in grams. If no weight is set then 0 is returned.
         */
        grams: number;

        /**
         * A line item ID.
         */
        id: string | number;

        /**
         * Variant's image.
         */
        image: Image;

        /**
         * The total price for this line item. For instance if the variant costs 1.50 and you have a
         * quantity of 2 then line_price will be 3.00.
         */
        line_price: string;

        /**
         * Price of the variant. For example: "5.00".
         */
        price: string;

        /**
         * ID of variant's product.
         */
        product_id: string | number;

        /**
         * Count of variants to order.
         */
        quantity: number;

        /**
         * Product title of variant's parent product.
         */
        title: string;

        /**
         * ID of line item variant.
         */
        variant_id: string | number;

        /**
         * Title of variant.
         */
        variant_title: string;
    }

    export interface Item {
        variant: ProductVariant;
        quantity: number;
    }

    /**
     * Internal Image description
     */
    export interface Image {
        id: string | number;
        created_at: string;
        position: number;
        updated_at: string;
        product_id: string;
        src: string;
        variant_ids: Array<string>;
    }

    export interface ImageVariant {
        name: string;
        dimensions: string;
        src: string;
    }

    export interface OptionValue {
        name: string;
        option_id: string;
        value: any;
    }
}

declare module "shopify-buy" {
    export = ShopifyBuy;
}
