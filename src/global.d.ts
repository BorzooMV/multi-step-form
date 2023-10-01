type RegularProductName = "arcade" | "advanced" | "pro";
type AddOnesProductName =
  | "onlineService"
  | "largerStorage"
  | "customizableProfile";
type ProductName = RegularProductName | AddOnesProductName;
type ProductType = "yearly" | "monthly";
type Discount = {
  inMounths?: number;
  inValue?: number;
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

type Product = {
  name: ProductName;
  type: ProductType;
  description: string | null;
  price: {
    actual: number;
    discount: Discount | null;
    final: number;
  };
};

type UserData = {
  user: UserInfo;
  plan: Plan;
  addOnes: AddOnesProductName[];
};
