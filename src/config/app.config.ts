interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Manager'],
  tenantName: 'Business',
  applicationName: 'the mobile store',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Create orders', 'Read order information', 'Create reviews'],
  ownerAbilities: [
    'Manage user information',
    'Manage business details',
    'Manage product listings',
    'Manage orders and inventory',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/182e2bcb-725c-4246-8870-7a835d29e70b',
};
