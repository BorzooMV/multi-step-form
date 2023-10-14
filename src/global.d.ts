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

type UserData = {
  user: UserInfo;
  plan: Product;
  addOns: AddOnProduct[];
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

interface AddOnProduct extends Product {
  name: AddOnsProductName;
  title: string;
}
