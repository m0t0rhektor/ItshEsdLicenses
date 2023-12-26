import template from "./sw-product-detail-esd.html.twig";

Shopware.Component.register("sw-product-detail-esd", {
  template,

  metaInfo() {
    return {
      title: "Esd",
    };
  },
});
