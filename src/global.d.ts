type RegularProductName = "arcade" | "advanced" | "pro";
type AddOnsProductName =
  | "onlineService"
  | "largerStorage"
  | "customizableProfile";
type ProductName = RegularProductName | AddOnsProductName | string;
type ProductType = "yearly" | "monthly";
type Discount = {
  inMounths?: number;
  inValue?: number;
};
type Price = {
  actual: number;
  discount: Discount | null;
  final: number;
};
type UserInfo = {
  name: string;
  email: string;
  phoneNumber: string | number;
};
type Plan = {
  product: ProductName;
  type: ProductType;
};

type UserData = {
  user: UserInfo;
  plan: Plan;
  addOns: AddOnsProductName[];
};

type Step = {
  title: string;
  indicatorTitle: string;
  description: string;
};

interface Product {
  name: ProductName;
  type: ProductType;
  description: string | null;
  price: Price;
}
