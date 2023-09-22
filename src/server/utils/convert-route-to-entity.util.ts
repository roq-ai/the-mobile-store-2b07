const mapping: Record<string, string> = {
  businesses: 'business',
  inventories: 'inventory',
  orders: 'order',
  products: 'product',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
