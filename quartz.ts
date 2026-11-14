import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader";
import HomeLinkConstructor from "./quartz/components/HomeLink";

const config = await loadQuartzConfig();
const baseLayout = await loadQuartzLayout();
const HomeLink = HomeLinkConstructor();

export default config;
export const layout = await loadQuartzLayout({
  defaults: {
    left: [HomeLink, ...(baseLayout.defaults.left ?? [])],
  },
});
