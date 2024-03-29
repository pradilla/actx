import { createClient as createVTEXClient } from "$live/std/commerce/vtex/client.ts";
import { createClient as createShopifyClient } from "$live/std/commerce/shopify/client.ts";
import { createClient as createOccClient } from "$live/std/commerce/occ/client.ts";

export const defaultVTEXSettings = {
  account: "actxnow",
  locale: "es-CO",
  salesChannel: "1",
};
export const vtex = createVTEXClient({
  platform: "vtex",
});

export const shopify = createShopifyClient({
  platform: "shopify",
  storeName: "gimenesdevstore",
  storefrontAccessToken: "27c1ac16fe30a0fb6c5d634eeb63bf81",
});

export const occ = createOccClient({
  platform: "occ",
  baseUrl: "https://deco.cx.teste/",
});
