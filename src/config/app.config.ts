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
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'Book a table', 'View menus', 'Edit personal information'],
  ownerAbilities: [
    'Manage the restaurant information',
    'Manage user information',
    'Create and update menus for the restaurant',
    'Manage bookings for the restaurant',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/25583d25-581f-4bf0-8ec0-3850ac15c1f9',
};
