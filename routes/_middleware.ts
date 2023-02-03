import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 499,
  site: "actx",
  domains: ["actx.deco.site"],
});