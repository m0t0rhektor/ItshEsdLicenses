// Import admin module
import "./module/sw-product/page/sw-product-detail";
import "./module/sw-product/view/sw-product-detail-esd";

// Here you create your new route, refer to the mentioned guide for more information
Shopware.Module.register("sw-new-tab-esd", {
  routeMiddleware(next, currentRoute) {
    const customRouteName = "sw.product.detail.esd";
    if (
      currentRoute.name === "sw.product.detail" &&
      currentRoute.children.every(
        (currentRoute) => currentRoute.name !== customRouteName
      )
    ) {
      currentRoute.children.push({
        name: customRouteName,
        path: "/sw/product/detail/:id/esd",
        component: "sw-product-detail-esd",
        meta: {
          parentPath: "sw.product.index",
        },
      });
    }
    next(currentRoute);
  },
});
