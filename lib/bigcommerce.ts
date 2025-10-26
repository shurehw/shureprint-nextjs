// BigCommerce GraphQL Client
const BIGCOMMERCE_GRAPHQL_API_URL = process.env.NEXT_PUBLIC_BIGCOMMERCE_STOREFRONT_API_URL;
const BIGCOMMERCE_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_BIGCOMMERCE_STOREFRONT_API_TOKEN;

async function bigCommerceGraphQL(query: string, variables = {}) {
  const res = await fetch(BIGCOMMERCE_GRAPHQL_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BIGCOMMERCE_STOREFRONT_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

// Get all products
export async function getAllProducts() {
  const query = `
    query {
      site {
        products {
          edges {
            node {
              entityId
              name
              path
              sku
              description
              prices {
                price {
                  value
                  currencyCode
                }
              }
              defaultImage {
                url(width: 800)
                altText
              }
              images {
                edges {
                  node {
                    url(width: 800)
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await bigCommerceGraphQL(query);
  return data.site.products.edges.map((edge: any) => edge.node);
}

// Get single product by ID
export async function getProduct(productId: number) {
  const query = `
    query ProductById($productId: Int!) {
      site {
        product(entityId: $productId) {
          entityId
          name
          path
          sku
          description
          prices {
            price {
              value
              currencyCode
            }
          }
          defaultImage {
            url(width: 1200)
            altText
          }
          images {
            edges {
              node {
                url(width: 1200)
                altText
              }
            }
          }
          variants {
            edges {
              node {
                entityId
                sku
                defaultImage {
                  url(width: 800)
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await bigCommerceGraphQL(query, { productId });
  return data.site.product;
}

// Get products by category
export async function getProductsByCategory(categoryId: number) {
  const query = `
    query ProductsByCategory($categoryId: Int!) {
      site {
        category(entityId: $categoryId) {
          name
          products {
            edges {
              node {
                entityId
                name
                path
                sku
                prices {
                  price {
                    value
                    currencyCode
                  }
                }
                defaultImage {
                  url(width: 800)
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await bigCommerceGraphQL(query, { categoryId });
  return data.site.category.products.edges.map((edge: any) => edge.node);
}

// Create cart
export async function createCart(lineItems: any[]) {
  const query = `
    mutation CreateCart($createCartInput: CreateCartInput!) {
      cart {
        createCart(input: $createCartInput) {
          cart {
            entityId
            lineItems {
              physicalItems {
                name
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    createCartInput: {
      lineItems,
    },
  };

  const data = await bigCommerceGraphQL(query, variables);
  return data.cart.createCart.cart;
}

// Add item to cart
export async function addToCart(cartId: string, lineItems: any[]) {
  const query = `
    mutation AddCartLineItems($addCartLineItemsInput: AddCartLineItemsInput!) {
      cart {
        addCartLineItems(input: $addCartLineItemsInput) {
          cart {
            entityId
            lineItems {
              physicalItems {
                name
                quantity
                productEntityId
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    addCartLineItemsInput: {
      cartId,
      data: {
        lineItems,
      },
    },
  };

  const data = await bigCommerceGraphQL(query, variables);
  return data.cart.addCartLineItems.cart;
}

// Get cart
export async function getCart(cartId: string) {
  const query = `
    query GetCart($cartId: String!) {
      site {
        cart(entityId: $cartId) {
          entityId
          currencyCode
          lineItems {
            physicalItems {
              name
              quantity
              productEntityId
              variantEntityId
              listPrice
              salePrice
              extendedListPrice
              extendedSalePrice
              imageUrl
            }
          }
          baseAmount {
            value
            currencyCode
          }
          discountedAmount {
            value
            currencyCode
          }
          amount {
            value
            currencyCode
          }
        }
      }
    }
  `;

  const data = await bigCommerceGraphQL(query, { cartId });
  return data.site.cart;
}

export default {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  createCart,
  addToCart,
  getCart,
};
