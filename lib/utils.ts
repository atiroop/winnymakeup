export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number, currency: string = "THB") {
  return new Intl.NumberFormat("th-TH").format(price);
}
