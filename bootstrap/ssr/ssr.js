import { resolveComponent, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, openBlock, createBlock, unref, useModel, ref, onMounted, withModifiers, toDisplayString, createCommentVNode, computed, onUnmounted, renderSlot, watch, withKeys, nextTick, watchEffect, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrGetDynamicModelProps, ssrLooseContain, ssrRenderStyle, ssrRenderTeleport } from "vue/server-renderer";
import { Link, useForm, Head, usePage, createInertiaApp } from "@inertiajs/vue3";
import { useReCaptcha, VueReCaptcha } from "vue-recaptcha-v3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import VueSilentbox from "vue-silentbox";
const _sfc_main$N = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  props: {
    bgImage: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = resolveComponent("NavBar");
      _push(`<template><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col xl:flex-row gap-4" }, _attrs))}><header class="${ssrRenderClass([__props.bgImage, "border-box xl:w-6/12 h-[96vh] relative"])}">`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "headerContent", {}, null, _push, _parent);
      _push(`</header><main class="relative flex flex-col gap-4 xl:w-6/12 xl:h-[96vh]">`);
      ssrRenderSlot(_ctx.$slots, "mainContent", {}, null, _push, _parent);
      _push(`</main></div></template>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$M = {
  __name: "HeadingBox",
  __ssrInlineRender: true,
  props: {
    heading: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute bottom-32 left-2 xs:left-10" }, _attrs))} data-v-141443d5><h1 class="text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-fontLight heading font-heading" data-v-141443d5>${ssrInterpolate(__props.heading)}</h1><p class="pt-2 text-sm xs:text-base sm:text-lg font-extralight heading text-fontLight mr-16" data-v-141443d5>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeadingBox.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const HeadingBox = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-141443d5"]]);
const _sfc_main$L = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center gap-2" }, _attrs))} data-v-8c7e2dc3><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-3 opacity-50" data-v-8c7e2dc3><h3 class="text-3xl xl:text-2xl 2xl:text-3xl text-center uppercase text-fontHeading heading" data-v-8c7e2dc3>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h3><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-3 opacity-50" data-v-8c7e2dc3></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionHeading.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const SectionHeadingVue = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-8c7e2dc3"]]);
const _sfc_main$K = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Footer = resolveComponent("Footer");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-18ccb895>`);
      _push(ssrRenderComponent(_component_Head, { title: "O Nas | Twórcy Wyjątkowych Doświadczeń Wizualnych" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Tatralight - Odkryj naszą pasję do niepowtarzalnych doświadczeń świetlnych. Poznaj historię, jak transformujemy przestrzenie biznesowe innowacyjnym oświetleniem. Tworzymy światło, które inspiruje." data-v-18ccb895${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Tatralight - Odkryj naszą pasję do niepowtarzalnych doświadczeń świetlnych. Poznaj historię, jak transformujemy przestrzenie biznesowe innowacyjnym oświetleniem. Tworzymy światło, które inspiruje."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, { bgImage: "bg-[url('/assets/images/small/tl-small_5.webp')] sm:bg-[url('/assets/images/big/tl-big_9.webp')] bg-cover bg-center bg-gray-300 bg-blend-multiply" }, {
        headerContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeadingBox, { heading: "O nas" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Poznaj naszą pasję do światła i historię, w której tworzymy niepowtarzalne doświadczenia.`);
                } else {
                  return [
                    createTextVNode("Poznaj naszą pasję do światła i historię, w której tworzymy niepowtarzalne doświadczenia.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeadingBox, { heading: "O nas" }, {
                default: withCtx(() => [
                  createTextVNode("Poznaj naszą pasję do światła i historię, w której tworzymy niepowtarzalne doświadczenia.")
                ]),
                _: 1
              })
            ];
          }
        }),
        mainContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-box" data-v-18ccb895${_scopeId}><div class="border-box text-box" data-v-18ccb895${_scopeId}>`);
            _push2(ssrRenderComponent(SectionHeadingVue, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nasza misja`);
                } else {
                  return [
                    createTextVNode("Nasza misja")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="space-y-4 2xl:mt-6" data-v-18ccb895${_scopeId}><p data-v-18ccb895${_scopeId}>Nasza misja to przynoszenie magicznego światła do życia i biznesu. Inspirowani innowacjami tworzymy niepowtarzalne przestrzenie, podkreślając ich wyjątkowy charakter.</p><p data-v-18ccb895${_scopeId}>W Tatralight dążymy do ożywienia emocji i atmosfery poprzez kreatywne i zaawansowane technologicznie rozwiązania oświetleniowe. Każdy nasz projekt ma na celu nie tylko spełnienie funkcjonalnych potrzeb, lecz także dostarczenie niezapomnianych doświadczeń i inspiracji.</p></div></div><div class="border-box image-box" data-v-18ccb895${_scopeId}><img src="/assets/images/small/tl-small_29.webp" alt="nasza realizacja" class="sm:hidden" data-v-18ccb895${_scopeId}><img src="/assets/images/big/tl-big_29.webp" alt="nasza realizacja" class="hidden sm:inline-block" data-v-18ccb895${_scopeId}></div></div><div class="flex justify-center items-center" data-v-18ccb895${_scopeId}><div class="flex gap-6 mx-44 col-span-12" data-v-18ccb895${_scopeId}><a href="https://www.facebook.com/tatralight.reklama/" target="_blank" class="border-box social-box group" data-v-18ccb895${_scopeId}><svg width="26" height="26" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-18ccb895${_scopeId}><path d="M47.4008 25.8H41.8008H39.8008V23.8V17.6V15.6H41.8008H46.0008C47.1008 15.6 48.0008 14.8 48.0008 13.6V3C48.0008 1.9 47.2008 1 46.0008 1H38.7008C30.8008 1 25.3008 6.6 25.3008 14.9V23.6V25.6H23.3008H16.5008C15.1008 25.6 13.8008 26.7 13.8008 28.3V35.5C13.8008 36.9 14.9008 38.2 16.5008 38.2H23.1008H25.1008V40.2V60.3C25.1008 61.7 26.2008 63 27.8008 63H37.2008C37.8008 63 38.3008 62.7 38.7008 62.3C39.1008 61.9 39.4008 61.2 39.4008 60.6V40.3V38.3H41.5008H46.0008C47.3008 38.3 48.3008 37.5 48.5008 36.3V36.2V36.1L49.9008 29.2C50.0008 28.5 49.9008 27.7 49.3008 26.9C49.1008 26.4 48.2008 25.9 47.4008 25.8Z" class="fill-fontLight group-hover:fill-fontHeading" data-v-18ccb895${_scopeId}></path></svg></a><a href="" target="_blank" class="border-box social-box group" data-v-18ccb895${_scopeId}><svg width="26" height="26" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-18ccb895${_scopeId}><path d="M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z" class="fill-fontLight group-hover:fill-fontHeading" data-v-18ccb895${_scopeId}></path></svg></a><a href="https://www.instagram.com/tatralight_reklama/" target="_blank" class="border-box social-box group" data-v-18ccb895${_scopeId}><svg fill="#fff" width="26" height="26" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="fill-fontLight group-hover:fill-fontHeading" data-v-18ccb895${_scopeId}><path d="M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z" data-v-18ccb895${_scopeId}></path><path d="M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z" data-v-18ccb895${_scopeId}></path><path d="M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z" data-v-18ccb895${_scopeId}></path></svg></a></div></div><div class="container-box" data-v-18ccb895${_scopeId}><div class="border-box image-box order-1 md:order-none" data-v-18ccb895${_scopeId}><img src="/assets/images/small/tl-small_15.webp" alt="nasza realizacja w Fitness Factory" class="sm:hidden" data-v-18ccb895${_scopeId}><img src="/assets/images/big/tl-big_15.webp" alt="nasza realizacja w Fitness Factory" class="hidden sm:inline-block" data-v-18ccb895${_scopeId}></div><div class="border-box text-box" data-v-18ccb895${_scopeId}>`);
            _push2(ssrRenderComponent(SectionHeadingVue, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Nasza historia`);
                } else {
                  return [
                    createTextVNode("Nasza historia")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="space-y-4 2xl:mt-6" data-v-18ccb895${_scopeId}><p data-v-18ccb895${_scopeId}>Tatralight ma swoją siedzibę w urokliwym Nowym Targu. Nasza historia to podróż pełna pasji, innowacji i unikalnych projektów oświetleniowych, które odmieniają przestrzenie życiowe i biznesowe.</p><p data-v-18ccb895${_scopeId}>W Nowym Targu, sercu inspiracji, Tatralight rozpoczyna swoją historię. Nasze projekty oświetleniowe to rezultat pasji, kreatywności i zaangażowania, które zmieniają sposób, w jaki doświadczamy światła w codziennym życiu i biznesie.</p></div></div></div>`);
            _push2(ssrRenderComponent(_component_Footer, { customClass: "py-4 xl:hidden lg:px-48" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "container-box" }, [
                createVNode("div", { class: "border-box text-box" }, [
                  createVNode(SectionHeadingVue, null, {
                    default: withCtx(() => [
                      createTextVNode("Nasza misja")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "space-y-4 2xl:mt-6" }, [
                    createVNode("p", null, "Nasza misja to przynoszenie magicznego światła do życia i biznesu. Inspirowani innowacjami tworzymy niepowtarzalne przestrzenie, podkreślając ich wyjątkowy charakter."),
                    createVNode("p", null, "W Tatralight dążymy do ożywienia emocji i atmosfery poprzez kreatywne i zaawansowane technologicznie rozwiązania oświetleniowe. Każdy nasz projekt ma na celu nie tylko spełnienie funkcjonalnych potrzeb, lecz także dostarczenie niezapomnianych doświadczeń i inspiracji.")
                  ])
                ]),
                createVNode("div", { class: "border-box image-box" }, [
                  createVNode("img", {
                    src: "/assets/images/small/tl-small_29.webp",
                    alt: "nasza realizacja",
                    class: "sm:hidden"
                  }),
                  createVNode("img", {
                    src: "/assets/images/big/tl-big_29.webp",
                    alt: "nasza realizacja",
                    class: "hidden sm:inline-block"
                  })
                ])
              ]),
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("div", { class: "flex gap-6 mx-44 col-span-12" }, [
                  createVNode("a", {
                    href: "https://www.facebook.com/tatralight.reklama/",
                    target: "_blank",
                    class: "border-box social-box group"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "26",
                      height: "26",
                      viewBox: "0 0 64 64",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M47.4008 25.8H41.8008H39.8008V23.8V17.6V15.6H41.8008H46.0008C47.1008 15.6 48.0008 14.8 48.0008 13.6V3C48.0008 1.9 47.2008 1 46.0008 1H38.7008C30.8008 1 25.3008 6.6 25.3008 14.9V23.6V25.6H23.3008H16.5008C15.1008 25.6 13.8008 26.7 13.8008 28.3V35.5C13.8008 36.9 14.9008 38.2 16.5008 38.2H23.1008H25.1008V40.2V60.3C25.1008 61.7 26.2008 63 27.8008 63H37.2008C37.8008 63 38.3008 62.7 38.7008 62.3C39.1008 61.9 39.4008 61.2 39.4008 60.6V40.3V38.3H41.5008H46.0008C47.3008 38.3 48.3008 37.5 48.5008 36.3V36.2V36.1L49.9008 29.2C50.0008 28.5 49.9008 27.7 49.3008 26.9C49.1008 26.4 48.2008 25.9 47.4008 25.8Z",
                        class: "fill-fontLight group-hover:fill-fontHeading"
                      })
                    ]))
                  ]),
                  createVNode("a", {
                    href: "",
                    target: "_blank",
                    class: "border-box social-box group"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "26",
                      height: "26",
                      viewBox: "0 0 64 64",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z",
                        class: "fill-fontLight group-hover:fill-fontHeading"
                      })
                    ]))
                  ]),
                  createVNode("a", {
                    href: "https://www.instagram.com/tatralight_reklama/",
                    target: "_blank",
                    class: "border-box social-box group"
                  }, [
                    (openBlock(), createBlock("svg", {
                      fill: "#fff",
                      width: "26",
                      height: "26",
                      viewBox: "0 0 64 64",
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "fill-fontLight group-hover:fill-fontHeading"
                    }, [
                      createVNode("path", { d: "M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z" }),
                      createVNode("path", { d: "M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z" }),
                      createVNode("path", { d: "M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z" })
                    ]))
                  ])
                ])
              ]),
              createVNode("div", { class: "container-box" }, [
                createVNode("div", { class: "border-box image-box order-1 md:order-none" }, [
                  createVNode("img", {
                    src: "/assets/images/small/tl-small_15.webp",
                    alt: "nasza realizacja w Fitness Factory",
                    class: "sm:hidden"
                  }),
                  createVNode("img", {
                    src: "/assets/images/big/tl-big_15.webp",
                    alt: "nasza realizacja w Fitness Factory",
                    class: "hidden sm:inline-block"
                  })
                ]),
                createVNode("div", { class: "border-box text-box" }, [
                  createVNode(SectionHeadingVue, null, {
                    default: withCtx(() => [
                      createTextVNode("Nasza historia")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "space-y-4 2xl:mt-6" }, [
                    createVNode("p", null, "Tatralight ma swoją siedzibę w urokliwym Nowym Targu. Nasza historia to podróż pełna pasji, innowacji i unikalnych projektów oświetleniowych, które odmieniają przestrzenie życiowe i biznesowe."),
                    createVNode("p", null, "W Nowym Targu, sercu inspiracji, Tatralight rozpoczyna swoją historię. Nasze projekty oświetleniowe to rezultat pasji, kreatywności i zaangażowania, które zmieniają sposób, w jaki doświadczamy światła w codziennym życiu i biznesie.")
                  ])
                ])
              ]),
              createVNode(_component_Footer, { customClass: "py-4 xl:hidden lg:px-48" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-18ccb895"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$I = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const PrimaryButton$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$E = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        ref_key: "input",
        ref: input
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton$1, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$G, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(PrimaryButton$1, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$D
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton$1, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$G, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(PrimaryButton$1, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$B, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(PrimaryButton$1, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$G, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$G, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$B, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(PrimaryButton$1, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton$1, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$G, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$G, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$G, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$G, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton$1, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton$1, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$G, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$G, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$G, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(PrimaryButton$1, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$I, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton$1, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(PrimaryButton$1, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-full p-2 group border-primaryColor" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SocialIcon.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const SocialIcon = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$v = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "border-none text-fontLight font-semibold upper bg-primaryColor border-1 border-primaryColor rounded-xl focus:border-primaryColor px-10 py-3 hover:opacity-85 transition-opacity" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/PrimaryButton.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$u = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Field.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const Field = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$t = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        class: "text-black w-full border-1 border-primaryColor rounded-lg focus:ring-3 focus:ring-primaryColor focus:border-primaryColor"
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Input.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center mt-6 xl:mt-12 gap-5" }, _attrs))}><div class="sm:px-12"><img src="/assets/logo/logo--green.png" alt="logo firmy TatraLight" class="rounded-2xl w-56"></div><svg fill="#16514f" width="32" height="32" version="1.1" id="lni_lni-checkmark-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="${ssrRenderStyle({ "enable-background": "new 0 0 64 64" })}" xml:space="preserve"><g><path d="M32,1.8C15.3,1.8,1.8,15.3,1.8,32S15.3,62.3,32,62.3S62.3,48.7,62.3,32S48.7,1.8,32,1.8z M32,57.8
		C17.8,57.8,6.3,46.2,6.3,32C6.3,17.8,17.8,6.3,32,6.3c14.2,0,25.8,11.6,25.8,25.8C57.8,46.2,46.2,57.8,32,57.8z"></path><path d="M40.6,22.7L28.7,34.3L23.3,29c-0.9-0.9-2.3-0.8-3.2,0c-0.9,0.9-0.8,2.3,0,3.2l6.4,6.2c0.6,0.6,1.4,0.9,2.2,0.9
		c0.8,0,1.6-0.3,2.2-0.9L43.8,26c0.9-0.9,0.9-2.3,0-3.2S41.5,21.9,40.6,22.7z"></path></g></svg><span class="px-8 text-base font-thin text-center">Skontaktujemy się z Tobą najszybciej jak to możliwe</span><span class="text-2xl font-heading text-fontHeading">DZIĘKUJEMY</span></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/FormSuccess.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const FormSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$r = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-2 text-left text-sm font-thin ml-1 text-red-600" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Error.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Error$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$q = {
  __name: "ReservationForm",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object,
    recaptcha_site_key: String
  },
  setup(__props) {
    useReCaptcha();
    const form = useForm({
      name: "",
      email: "",
      message: "",
      captcha_token: null
    });
    const sendForm = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (!sendForm.value) {
        _push(`<form${ssrRenderAttrs(mergeProps({
          method: "post",
          class: "mt-6"
        }, _attrs))}><div class="flex gap-6"><div class="w-1/2">`);
        _push(ssrRenderComponent(Field, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$t, {
                id: "name",
                type: "text",
                placeholder: "Imię i Nazwisko",
                modelValue: unref(form).name,
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                required: ""
              }, null, _parent2, _scopeId));
              if (unref(form).errors.name) {
                _push2(ssrRenderComponent(Error$1, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(form).errors.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(form).errors.name), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_sfc_main$t, {
                  id: "name",
                  type: "text",
                  placeholder: "Imię i Nazwisko",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(form).errors.name), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="w-1/2">`);
        _push(ssrRenderComponent(Field, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$t, {
                id: "phone",
                type: "tel",
                placeholder: "Telefon",
                modelValue: unref(form).phone,
                "onUpdate:modelValue": ($event) => unref(form).phone = $event
              }, null, _parent2, _scopeId));
              if (unref(form).errors.phone) {
                _push2(ssrRenderComponent(Error$1, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(form).errors.phone)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(form).errors.phone), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_sfc_main$t, {
                  id: "phone",
                  type: "tel",
                  placeholder: "Telefon",
                  modelValue: unref(form).phone,
                  "onUpdate:modelValue": ($event) => unref(form).phone = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                unref(form).errors.phone ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(form).errors.phone), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(Field, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$t, {
                id: "email",
                type: "email",
                placeholder: "Email",
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                required: ""
              }, null, _parent2, _scopeId));
              if (unref(form).errors.email) {
                _push2(ssrRenderComponent(Error$1, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(form).errors.email)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(form).errors.email), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_sfc_main$t, {
                  id: "email",
                  type: "email",
                  placeholder: "Email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                unref(form).errors.email ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(form).errors.email), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div><textarea rows="4" class="text-black w-full border-1 border-primaryColor rounded-lg focus:ring-3 focus:ring-primaryColor focus:border-primaryColor" id="message" placeholder="Wiadomość" required>${ssrInterpolate(unref(form).message)}</textarea>`);
        if (unref(form).errors.message) {
          _push(ssrRenderComponent(Error$1, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(form).errors.message)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(form).errors.message), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="my-2"><span class="text-xs"> Ta strona jest chroniona przez reCAPTCHA i obowiązuje ją <a href="https://policies.google.com/privacy" target="_blank">Polityka Prywatności</a> and <a href="https://policies.google.com/terms" target="_blank">Warunki Korzystania </a>z usługi Google.</span></div><div class="mt-2">`);
        _push(ssrRenderComponent(PrimaryButton, {
          type: "submit",
          disabled: unref(form).processing
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Wyślij`);
            } else {
              return [
                createTextVNode("Wyślij")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></form>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(FormSuccess, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/ReservationForm.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Footer = resolveComponent("Footer");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-50887c12>`);
      _push(ssrRenderComponent(_component_Head, { title: "Wprowadź Światło do Swojej Przestrzeni Biznesowej" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="TataLight - skontaktuj się z nami aby odkryć możliwości transformacji przestrzeni za pomocą unikalnych rozwiązań świetlnych. Jesteśmy gotowi na Twoje pytania i współpracę!" data-v-50887c12${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "TataLight - skontaktuj się z nami aby odkryć możliwości transformacji przestrzeni za pomocą unikalnych rozwiązań świetlnych. Jesteśmy gotowi na Twoje pytania i współpracę!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, { bgImage: "bg-[url('/assets/images/small/tl-small_16.webp')] sm:bg-[url('/assets/images/big/tl-big_16.webp')] bg-cover bg-center" }, {
        headerContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeadingBox, { heading: "Kontakt" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Jesteśmy zawsze do Twojej dyspozycji! Wybierz sposób kontaktu, który Ci odpowiada!`);
                } else {
                  return [
                    createTextVNode("Jesteśmy zawsze do Twojej dyspozycji! Wybierz sposób kontaktu, który Ci odpowiada!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeadingBox, { heading: "Kontakt" }, {
                default: withCtx(() => [
                  createTextVNode("Jesteśmy zawsze do Twojej dyspozycji! Wybierz sposób kontaktu, który Ci odpowiada!")
                ]),
                _: 1
              })
            ];
          }
        }),
        mainContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-3/6 flex flex-col sm:flex-row gap-4" data-v-50887c12${_scopeId}><div class="sm:w-1/2 h-full border-box flex flex-col justify-between p-6 min-h-[330px] xl:min-h-0" data-v-50887c12${_scopeId}><div class="flex justify-center items-center gap-2" data-v-50887c12${_scopeId}><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-3 opacity-50" data-v-50887c12${_scopeId}><h3 class="text-2xl uppercase text-fontHeading heading" data-v-50887c12${_scopeId}>kontakt</h3><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-3 opacity-50" data-v-50887c12${_scopeId}></div><div class="xs:px-16 sm:px-0 md:px-6 lg:px-16 xl:px-2 2xl:px-12 text" data-v-50887c12${_scopeId}><div class="flex justify-between items-center my-3" data-v-50887c12${_scopeId}><span class="text-lg font-medium" data-v-50887c12${_scopeId}>Adres</span><span class="text-end" data-v-50887c12${_scopeId}>Ludźmierska 29<br data-v-50887c12${_scopeId}>Nowy Targ</span></div><div class="flex justify-between items-center my-3" data-v-50887c12${_scopeId}><span class="text-lg font-medium" data-v-50887c12${_scopeId}>Telefon</span><a href="tel:+48504655819" data-v-50887c12${_scopeId}>+48 504 655 819</a></div><div class="flex justify-between items-center my-3" data-v-50887c12${_scopeId}><span class="text-lg font-medium" data-v-50887c12${_scopeId}>Email</span><a href="mailto:biuro@tatralight.pl" data-v-50887c12${_scopeId}>biuro@tatralight.pl</a></div></div><div class="flex justify-center gap-4" data-v-50887c12${_scopeId}>`);
            _push2(ssrRenderComponent(SocialIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://www.facebook.com/tatralight.reklama/" target="_blank" data-v-50887c12${_scopeId2}><svg fill="#16514f" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="hover:scale-110 duration-300" data-v-50887c12${_scopeId2}><path d="M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002
                        H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z" data-v-50887c12${_scopeId2}></path></svg></a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "https://www.facebook.com/tatralight.reklama/",
                      target: "_blank"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "#16514f",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 64 64",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "hover:scale-110 duration-300"
                      }, [
                        createVNode("path", { d: "M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002\r\n                        H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z" })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(SocialIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://www.instagram.com/tatralight_reklama/" target="_blank" data-v-50887c12${_scopeId2}><svg fill="#16514f" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-v-50887c12${_scopeId2}><path d="M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z" class="hover:scale-110 duration-300" data-v-50887c12${_scopeId2}></path></svg></a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "https://www.instagram.com/tatralight_reklama/",
                      target: "_blank"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "#16514f",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 64 64",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z",
                          class: "hover:scale-110 duration-300"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(SocialIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="https://www.instagram.com/tatralight_reklama/" target="_blank" data-v-50887c12${_scopeId2}><svg fill="#16514f" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="hover:scale-110 duration-300" data-v-50887c12${_scopeId2}><path d="M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z" data-v-50887c12${_scopeId2}></path><path d="M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z" data-v-50887c12${_scopeId2}></path><path d="M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z" data-v-50887c12${_scopeId2}></path></svg></a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "https://www.instagram.com/tatralight_reklama/",
                      target: "_blank"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "#16514f",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 64 64",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "hover:scale-110 duration-300"
                      }, [
                        createVNode("path", { d: "M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z" }),
                        createVNode("path", { d: "M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z" }),
                        createVNode("path", { d: "M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z" })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="sm:w-1/2 h-full border-box overflow-hidden" data-v-50887c12${_scopeId}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4121252458935!2d19.99954999227976!3d49.46239150718129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e50663fd7dbf%3A0x43ff3006c572bcc2!2sLud%C5%BAmierska%2029%2C%2034-400%20Nowy%20Targ!5e0!3m2!1spl!2spl!4v1706596185493!5m2!1spl!2spl" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full min-h-[328px] xl:min-h-0" data-v-50887c12${_scopeId}></iframe></div></div><div class="w-full h-4/6 flex gap-4" data-v-50887c12${_scopeId}><div class="w-full h-full border-box py-6 px-6 sm:px-12 lg:px-36 xl:px-6 2xl:px-36" data-v-50887c12${_scopeId}><div class="flex justify-center items-center gap-2" data-v-50887c12${_scopeId}><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-3 opacity-50" data-v-50887c12${_scopeId}><h3 class="text-2xl uppercase text-fontHeading text-center heading" data-v-50887c12${_scopeId}>napisz do nas</h3><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-3 opacity-50" data-v-50887c12${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$q, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_Footer, { customClass: "py-2" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-full h-3/6 flex flex-col sm:flex-row gap-4" }, [
                createVNode("div", { class: "sm:w-1/2 h-full border-box flex flex-col justify-between p-6 min-h-[330px] xl:min-h-0" }, [
                  createVNode("div", { class: "flex justify-center items-center gap-2" }, [
                    createVNode("img", {
                      src: "/assets/logo/logo--sign-dark.png",
                      alt: "",
                      class: "w-3 opacity-50"
                    }),
                    createVNode("h3", { class: "text-2xl uppercase text-fontHeading heading" }, "kontakt"),
                    createVNode("img", {
                      src: "/assets/logo/logo--sign-dark.png",
                      alt: "",
                      class: "w-3 opacity-50"
                    })
                  ]),
                  createVNode("div", { class: "xs:px-16 sm:px-0 md:px-6 lg:px-16 xl:px-2 2xl:px-12 text" }, [
                    createVNode("div", { class: "flex justify-between items-center my-3" }, [
                      createVNode("span", { class: "text-lg font-medium" }, "Adres"),
                      createVNode("span", { class: "text-end" }, [
                        createTextVNode("Ludźmierska 29"),
                        createVNode("br"),
                        createTextVNode("Nowy Targ")
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-between items-center my-3" }, [
                      createVNode("span", { class: "text-lg font-medium" }, "Telefon"),
                      createVNode("a", { href: "tel:+48504655819" }, "+48 504 655 819")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center my-3" }, [
                      createVNode("span", { class: "text-lg font-medium" }, "Email"),
                      createVNode("a", { href: "mailto:biuro@tatralight.pl" }, "biuro@tatralight.pl")
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-center gap-4" }, [
                    createVNode(SocialIcon, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "https://www.facebook.com/tatralight.reklama/",
                          target: "_blank"
                        }, [
                          (openBlock(), createBlock("svg", {
                            fill: "#16514f",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 64 64",
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "hover:scale-110 duration-300"
                          }, [
                            createVNode("path", { d: "M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002\r\n                        H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z" })
                          ]))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(SocialIcon, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "https://www.instagram.com/tatralight_reklama/",
                          target: "_blank"
                        }, [
                          (openBlock(), createBlock("svg", {
                            fill: "#16514f",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 64 64",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M61.5016 29.2001H32.8016V37.7001H53.4016C52.3016 49.5001 42.7016 54.6001 33.4016 54.6001C21.6016 54.6001 11.1016 45.4001 11.1016 32.1001C11.1016 19.3001 21.1016 9.60011 33.4016 9.60011C42.8016 9.60011 48.5016 15.7001 48.5016 15.7001L54.3016 9.60011C54.3016 9.60011 46.5016 1.10011 33.0016 1.10011C15.2016 1.00011 1.60156 15.9001 1.60156 32.0001C1.60156 47.6001 14.4016 63.0001 33.3016 63.0001C50.0016 63.0001 62.0016 51.7001 62.0016 34.8001C62.1016 31.3001 61.5016 29.2001 61.5016 29.2001Z",
                              class: "hover:scale-110 duration-300"
                            })
                          ]))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(SocialIcon, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "https://www.instagram.com/tatralight_reklama/",
                          target: "_blank"
                        }, [
                          (openBlock(), createBlock("svg", {
                            fill: "#16514f",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 64 64",
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "hover:scale-110 duration-300"
                          }, [
                            createVNode("path", { d: "M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z" }),
                            createVNode("path", { d: "M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z" }),
                            createVNode("path", { d: "M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z" })
                          ]))
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "sm:w-1/2 h-full border-box overflow-hidden" }, [
                  createVNode("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4121252458935!2d19.99954999227976!3d49.46239150718129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e50663fd7dbf%3A0x43ff3006c572bcc2!2sLud%C5%BAmierska%2029%2C%2034-400%20Nowy%20Targ!5e0!3m2!1spl!2spl!4v1706596185493!5m2!1spl!2spl",
                    style: { "border": "0" },
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                    class: "w-full h-full min-h-[328px] xl:min-h-0"
                  })
                ])
              ]),
              createVNode("div", { class: "w-full h-4/6 flex gap-4" }, [
                createVNode("div", { class: "w-full h-full border-box py-6 px-6 sm:px-12 lg:px-36 xl:px-6 2xl:px-36" }, [
                  createVNode("div", { class: "flex justify-center items-center gap-2" }, [
                    createVNode("img", {
                      src: "/assets/logo/logo--sign-dark.png",
                      alt: "",
                      class: "w-3 opacity-50"
                    }),
                    createVNode("h3", { class: "text-2xl uppercase text-fontHeading text-center heading" }, "napisz do nas"),
                    createVNode("img", {
                      src: "/assets/logo/logo--sign-dark.png",
                      alt: "",
                      class: "w-3 opacity-50"
                    })
                  ]),
                  createVNode(_sfc_main$q)
                ])
              ]),
              createVNode(_component_Footer, { customClass: "py-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-50887c12"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$m, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ms-6"><div class="ms-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$n, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$n, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$l, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$k, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Dashboard</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Dashboard")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}>You&#39;re logged in!</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, "You're logged in!")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="absolute inset-0 w-full h-full bg-black opacity-30 -z-10" data-v-d1a4a67c></div><video autoplay loop muted poster="/assets/images/poster-small.webp" class="video sm:hidden" data-v-d1a4a67c><source src="/assets/videos/home-small.mp4" type="video/mp4" data-v-d1a4a67c> Twoja przeglądarka nie obsługuje odtwarzacza wideo. </video><video autoplay loop muted poster="/assets/images/poster-big.webp" class="video hidden sm:block" data-v-d1a4a67c><source src="/assets/videos/home-big.mp4" type="video/mp4" data-v-d1a4a67c> Twoja przeglądarka nie obsługuje odtwarzacza wideo. </video><!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Header/VideoBackgorund.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VideoBackground = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d1a4a67c"]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VideoBackground
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: { customClass: String },
  setup(__props) {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["border-box lg:mb-4 xl:mb-0 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-evenly items-center bg-bgDark text-fontLight", __props.customClass]
      }, _attrs))} data-v-f5bc8c04>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/polityka_prywatnosci",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Polityka Prywatności`);
          } else {
            return [
              createTextVNode("Polityka Prywatności")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img src="/assets/logo/logo--sign.png" alt="" class="decoration" data-v-f5bc8c04>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-f5bc8c04${_scopeId}><span class="text-sm" data-v-f5bc8c04${_scopeId}>©${ssrInterpolate(unref(year))}</span> Tatralight</span>`);
          } else {
            return [
              createVNode("span", null, [
                createVNode("span", { class: "text-sm" }, "©" + toDisplayString(unref(year)), 1),
                createTextVNode(" Tatralight")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img src="/assets/logo/logo--sign.png" alt="" class="decoration" data-v-f5bc8c04><a href="https://marekgacekdev.pl" target="_blank" class="link" data-v-f5bc8c04>created by Marek Gacek</a></footer>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Footer.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-f5bc8c04"]]);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Footer
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "Error",
  __ssrInlineRender: true,
  props: { status: Number },
  setup(__props) {
    const back = () => {
      window.history.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Rozświetlamy Wyobraźnię, Tworzymy Niepowtarzalne Projekty Świetlne" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        headerContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VideoBackground, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HeadingBox, { heading: "TatraLight" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!`);
                } else {
                  return [
                    createTextVNode("Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VideoBackground),
              createVNode(HeadingBox, { heading: "TatraLight" }, {
                default: withCtx(() => [
                  createTextVNode("Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!")
                ]),
                _: 1
              })
            ];
          }
        }),
        mainContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-box h-full flex flex-col justify-center items-center text-center gap-4 lg:gap-12 py-12 lg:py-0"${_scopeId}><h1 class="font-heading text-6xl"${_scopeId}>Niestety nie ma takiej strony</h1><button${_scopeId}>powrót</button></div>`);
            _push2(ssrRenderComponent(Footer, { customClass: "py-3" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "border-box h-full flex flex-col justify-center items-center text-center gap-4 lg:gap-12 py-12 lg:py-0" }, [
                createVNode("h1", { class: "font-heading text-6xl" }, "Niestety nie ma takiej strony"),
                createVNode("button", { onClick: back }, "powrót")
              ]),
              createVNode(Footer, { customClass: "py-3" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Error.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eac8ec7b>`);
      _push(ssrRenderComponent(_component_Head, { title: "Rozświetlamy Wyobraźnię, Tworzymy Niepowtarzalne Projekty Świetlne" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni." data-v-eac8ec7b${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, null, {
        headerContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VideoBackground, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HeadingBox, { heading: "TatraLight" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!`);
                } else {
                  return [
                    createTextVNode("Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VideoBackground),
              createVNode(HeadingBox, { heading: "TatraLight" }, {
                default: withCtx(() => [
                  createTextVNode("Pozwól nam wnieść światło do Twojego biznesu i przekształcić przestrzeń w coś wyjątkowego!")
                ]),
                _: 1
              })
            ];
          }
        }),
        mainContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-box" data-v-eac8ec7b${_scopeId}><div class="border-box text-box" data-v-eac8ec7b${_scopeId}><h3 class="heading" data-v-eac8ec7b${_scopeId}> Od naklejki po Reklamy Świetlne </h3><div class="flex justify-center" data-v-eac8ec7b${_scopeId}><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-5 opacity-30" data-v-eac8ec7b${_scopeId}></div><div class="text" data-v-eac8ec7b${_scopeId}><p data-v-eac8ec7b${_scopeId}> Jesteśmy pasjonatami unikalnych rozwiązań w dziedzinie reklamy świetlnej i nietuzinkowych dekoracji. </p><p data-v-eac8ec7b${_scopeId}> Nasza oferta obejmuje nie tylko litery 3D, kasetony, lightboxy i neony, ale także wiele innych innowacyjnych pomysłów, które sprawią, że Twoja przestrzeń stanie się niezwykle wyjątkowa. </p></div></div><div class="border-box image-box" data-v-eac8ec7b${_scopeId}><img src="/assets/images/big/tl-big_30.webp" alt="nasza realizacja w Fitness Factory" class="hidden sm:block" data-v-eac8ec7b${_scopeId}><img src="/assets/images/small/tl-small_30.webp" alt="nasza realizacja w Fitness Factory" class="sm:hidden" data-v-eac8ec7b${_scopeId}></div></div><div class="container-box" data-v-eac8ec7b${_scopeId}><div class="border-box image-box order-1 md:order-none" data-v-eac8ec7b${_scopeId}><img src="/assets/images/big/tl-big_18.webp" alt="nasze realizacja weselna" class="hidden sm:block" data-v-eac8ec7b${_scopeId}><img src="/assets/images/small/tl-small_18.webp" alt="nasze realizacja weselna" class="sm:hidden" data-v-eac8ec7b${_scopeId}></div><div class="border-box text-box" data-v-eac8ec7b${_scopeId}><h3 class="heading" data-v-eac8ec7b${_scopeId}> Nasze Dekoracje Przyciągają Uwagę </h3><div class="flex justify-center" data-v-eac8ec7b${_scopeId}><img src="/assets/logo/logo--sign-dark.png" alt="" class="w-5 opacity-30" data-v-eac8ec7b${_scopeId}></div><div class="text" data-v-eac8ec7b${_scopeId}><p data-v-eac8ec7b${_scopeId}> Dla nas każdy projekt to sztuka, dlatego tworzymy niepowtarzalne oznaczenia i dekoracje, dopasowane do indywidualnych potrzeb klientów. Nasze rozwiązania nie tylko przyciągają uwagę, ale również zachwycają jakością wykonania i pomysłowością. </p><p data-v-eac8ec7b${_scopeId}> Z nami Twoja przestrzeń nabierze nowego blasku, a Twoja marka zyska niezapomniany charakter. i do tej czesci potrzebuje krotki naglowek </p></div></div></div>`);
            _push2(ssrRenderComponent(Footer, { customClass: "py-3" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "container-box" }, [
                createVNode("div", { class: "border-box text-box" }, [
                  createVNode("h3", { class: "heading" }, " Od naklejki po Reklamy Świetlne "),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode("img", {
                      src: "/assets/logo/logo--sign-dark.png",
                      alt: "",
                      class: "w-5 opacity-30"
                    })
                  ]),
                  createVNode("div", { class: "text" }, [
                    createVNode("p", null, " Jesteśmy pasjonatami unikalnych rozwiązań w dziedzinie reklamy świetlnej i nietuzinkowych dekoracji. "),
                    createVNode("p", null, " Nasza oferta obejmuje nie tylko litery 3D, kasetony, lightboxy i neony, ale także wiele innych innowacyjnych pomysłów, które sprawią, że Twoja przestrzeń stanie się niezwykle wyjątkowa. ")
                  ])
                ]),
                createVNode("div", { class: "border-box image-box" }, [
                  createVNode("img", {
                    src: "/assets/images/big/tl-big_30.webp",
                    alt: "nasza realizacja w Fitness Factory",
                    class: "hidden sm:block"
                  }),
                  createVNode("img", {
                    src: "/assets/images/small/tl-small_30.webp",
                    alt: "nasza realizacja w Fitness Factory",
                    class: "sm:hidden"
                  })
                ])
              ]),
              createVNode("div", { class: "container-box" }, [
                createVNode("div", { class: "border-box image-box order-1 md:order-none" }, [
                  createVNode("img", {
                    src: "/assets/images/big/tl-big_18.webp",
                    alt: "nasze realizacja weselna",
                    class: "hidden sm:block"
                  }),
                  createVNode("img", {
                    src: "/assets/images/small/tl-small_18.webp",
                    alt: "nasze realizacja weselna",
                    class: "sm:hidden"
                  })
                ]),
                createVNode("div", { class: "border-box text-box" }, [
                  createVNode("h3", { class: "heading" }, " Nasze Dekoracje Przyciągają Uwagę "),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode("img", {
                      src: "/assets/logo/logo--sign-dark.png",
                      alt: "",
                      class: "w-5 opacity-30"
                    })
                  ]),
                  createVNode("div", { class: "text" }, [
                    createVNode("p", null, " Dla nas każdy projekt to sztuka, dlatego tworzymy niepowtarzalne oznaczenia i dekoracje, dopasowane do indywidualnych potrzeb klientów. Nasze rozwiązania nie tylko przyciągają uwagę, ale również zachwycają jakością wykonania i pomysłowością. "),
                    createVNode("p", null, " Z nami Twoja przestrzeń nabierze nowego blasku, a Twoja marka zyska niezapomniany charakter. i do tej czesci potrzebuje krotki naglowek ")
                  ])
                ])
              ]),
              createVNode(Footer, { customClass: "py-3" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-eac8ec7b"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Footer = resolveComponent("Footer");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d87d38f3>`);
      _push(ssrRenderComponent(_component_Head, { title: "Rozświetlamy Wyobraźnię, Tworzymy Niepowtarzalne Projekty Świetlne" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni." data-v-d87d38f3${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, { bgImage: "bg-[url('/assets/images/small/tl-small_5.webp')] sm:bg-[url('/assets/images/big/tl-big_5.webp')] bg-cover bg-center bg-gray-300 bg-blend-multiply" }, {
        headerContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeadingBox, { heading: "Polityka Prywatności" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeadingBox, { heading: "Polityka Prywatności" })
            ];
          }
        }),
        mainContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-x-auto border border-primaryColor rounded-lg p-4" data-v-d87d38f3${_scopeId}><h2 data-v-d87d38f3${_scopeId}>Polityka Prywatności</h2><p data-v-d87d38f3${_scopeId}> Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <a href="https://tatralight.pl" data-v-d87d38f3${_scopeId}>tatralight.pl</a></p><p data-v-d87d38f3${_scopeId}> Operatorem serwisu oraz Administratorem danych osobowych jest: tatralight.pl oś. Bór 2/1, 34-400 Nowy Targ </p><p data-v-d87d38f3${_scopeId}> Adres kontaktowy poczty elektronicznej operatora: <a href="mailto:biuro@tatralight.pl" data-v-d87d38f3${_scopeId}>biuro@tatralight.pl</a></p><p data-v-d87d38f3${_scopeId}> Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie. </p><span data-v-d87d38f3${_scopeId}>Serwis wykorzystuje dane osobowe w następujących celach:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}>Obsługa zapytań przez formularz</li><li data-v-d87d38f3${_scopeId}>Prezentacja oferty lub informacji</li></ul><span data-v-d87d38f3${_scopeId}>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}> Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora. </li><li data-v-d87d38f3${_scopeId}> Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”). </li></ul><h2 data-v-d87d38f3${_scopeId}>Wybrane Metody Ochrony Danych</h2><p data-v-d87d38f3${_scopeId}> Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze. </p><p data-v-d87d38f3${_scopeId}> Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo - nie jest możliwe odwrócenie jej działania, co stanowi obecnie współczesny standard w zakresie przechowywania haseł użytkowników. </p><p data-v-d87d38f3${_scopeId}> Operator okresowo zmienia swoje hasła administracyjne. </p><p data-v-d87d38f3${_scopeId}> W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa. </p><p data-v-d87d38f3${_scopeId}> Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych. </p><h2 data-v-d87d38f3${_scopeId}>Hosting i Logi Serwerowe</h2><p data-v-d87d38f3${_scopeId}> Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: HOSTIDO </p><span data-v-d87d38f3${_scopeId}>Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}> zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików), </li><li data-v-d87d38f3${_scopeId}>czas nadejścia zapytania,</li><li data-v-d87d38f3${_scopeId}>czas wysłania odpowiedzi,</li><li data-v-d87d38f3${_scopeId}> nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP, </li><li data-v-d87d38f3${_scopeId}> informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP, </li><li data-v-d87d38f3${_scopeId}> adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik, </li><li data-v-d87d38f3${_scopeId}>informacje o przeglądarce użytkownika,</li><li data-v-d87d38f3${_scopeId}>informacje o adresie IP,</li><li data-v-d87d38f3${_scopeId}> informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie, </li><li data-v-d87d38f3${_scopeId}> informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora. </li></ul><h2 data-v-d87d38f3${_scopeId}> Twoje Prawa i Dodatkowe Informacje o Sposobie Wykorzystania Danych </h2><span data-v-d87d38f3${_scopeId}>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}>firma hostingowa na zasadzie powierzenia,</li><li data-v-d87d38f3${_scopeId}> upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony, </li><li data-v-d87d38f3${_scopeId}> firmy, świadczące usługi marketingu na rzecz Administratora. </li></ul><p data-v-d87d38f3${_scopeId}> Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata. </p><span data-v-d87d38f3${_scopeId}>Przysługuje Ci prawo żądania od Administratora:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}>dostępu do danych osobowych Ciebie dotyczących,</li><li data-v-d87d38f3${_scopeId}>sprostowania,</li><li data-v-d87d38f3${_scopeId}>usunięcia,</li><li data-v-d87d38f3${_scopeId}>ograniczenia przetwarzania,</li><li data-v-d87d38f3${_scopeId}>oraz przenoszenia danych.</li></ul><p data-v-d87d38f3${_scopeId}> Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania. </p><p data-v-d87d38f3${_scopeId}> Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa. </p><p data-v-d87d38f3${_scopeId}> Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu. </p><p data-v-d87d38f3${_scopeId}> W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego. </p><p data-v-d87d38f3${_scopeId}> Dane osobowe nie są przekazywane do krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej. </p><h2 data-v-d87d38f3${_scopeId}>Informacje w Formularzach</h2><p data-v-d87d38f3${_scopeId}>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</p><p data-v-d87d38f3${_scopeId}>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</p><p data-v-d87d38f3${_scopeId}>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu URL strony zawierającej formularz.</p><p data-v-d87d38f3${_scopeId}>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</p><h2 data-v-d87d38f3${_scopeId}>Logi Administratora i Techniki Marketingowe</h2><p data-v-d87d38f3${_scopeId}>Informacje o zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</p><p data-v-d87d38f3${_scopeId}>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: <a href="https://www.google.com/ads/preferences/" data-v-d87d38f3${_scopeId}>https://www.google.com/ads/preferences/</a></p><p data-v-d87d38f3${_scopeId}>Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.</p><h2 data-v-d87d38f3${_scopeId}>Informacja o Plikach Cookies</h2><p data-v-d87d38f3${_scopeId}>Serwis korzysta z plików cookies.</p><p data-v-d87d38f3${_scopeId}>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</p><p data-v-d87d38f3${_scopeId}>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</p><span data-v-d87d38f3${_scopeId}>Pliki cookies wykorzystywane są w następujących celach:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}>utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li><li data-v-d87d38f3${_scopeId}>realizacji celów określonych powyżej w części &quot;Istotne techniki marketingowe&quot;.</li></ul><p data-v-d87d38f3${_scopeId}>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</p><p data-v-d87d38f3${_scopeId}>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</p><p data-v-d87d38f3${_scopeId}>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</p><h2 data-v-d87d38f3${_scopeId}>Zarządzanie Plikami Cookies – Jak Wyrażać i Cofać Zgodę?</h2><p data-v-d87d38f3${_scopeId}>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.</p><span data-v-d87d38f3${_scopeId}>W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową, której używasz, i postępuj zgodnie z instrukcjami:</span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plikow-cookie-w-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" data-v-d87d38f3${_scopeId}>Microsoft Edge</a></li><li data-v-d87d38f3${_scopeId}><a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" data-v-d87d38f3${_scopeId}>Internet Explorer</a></li><li data-v-d87d38f3${_scopeId}><a href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" data-v-d87d38f3${_scopeId}>Chrome</a></li><li data-v-d87d38f3${_scopeId}><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" data-v-d87d38f3${_scopeId}>Safari</a></li><li data-v-d87d38f3${_scopeId}><a href="https://support.mozilla.org/pl/kb/Włączanie i wyłączanie obsługi ciasteczek" target="_blank" data-v-d87d38f3${_scopeId}>Firefox</a></li><li data-v-d87d38f3${_scopeId}><a href="https://help.opera.com/pl/latest/web-preferences/#cookies" target="_blank" data-v-d87d38f3${_scopeId}>Opera</a></li></ul><span data-v-d87d38f3${_scopeId}><strong data-v-d87d38f3${_scopeId}>Urządzenia mobilne:</strong></span><ul data-v-d87d38f3${_scopeId}><li data-v-d87d38f3${_scopeId}><a href="https://support.google.com/chrome/answer/95647?hl=pl&amp;co=GENIE.Platform%3DAndroid&amp;oco=1" target="_blank" data-v-d87d38f3${_scopeId}>Android</a></li><li data-v-d87d38f3${_scopeId}><a href="https://support.apple.com/pl-pl/HT201265" target="_blank" data-v-d87d38f3${_scopeId}>Safari (iOS)</a></li><li data-v-d87d38f3${_scopeId}><a href="https://support.microsoft.com/pl-pl/help/11696/windows-phone-7" target="_blank" data-v-d87d38f3${_scopeId}>Windows Phone</a></li></ul></div>`);
            _push2(ssrRenderComponent(_component_Footer, { customClass: "py-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "overflow-x-auto border border-primaryColor rounded-lg p-4" }, [
                createVNode("h2", null, "Polityka Prywatności"),
                createVNode("p", null, [
                  createTextVNode(" Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: "),
                  createVNode("a", { href: "https://tatralight.pl" }, "tatralight.pl")
                ]),
                createVNode("p", null, " Operatorem serwisu oraz Administratorem danych osobowych jest: tatralight.pl oś. Bór 2/1, 34-400 Nowy Targ "),
                createVNode("p", null, [
                  createTextVNode(" Adres kontaktowy poczty elektronicznej operatora: "),
                  createVNode("a", { href: "mailto:biuro@tatralight.pl" }, "biuro@tatralight.pl")
                ]),
                createVNode("p", null, " Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie. "),
                createVNode("span", null, "Serwis wykorzystuje dane osobowe w następujących celach:"),
                createVNode("ul", null, [
                  createVNode("li", null, "Obsługa zapytań przez formularz"),
                  createVNode("li", null, "Prezentacja oferty lub informacji")
                ]),
                createVNode("span", null, "Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:"),
                createVNode("ul", null, [
                  createVNode("li", null, " Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora. "),
                  createVNode("li", null, " Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”). ")
                ]),
                createVNode("h2", null, "Wybrane Metody Ochrony Danych"),
                createVNode("p", null, " Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze. "),
                createVNode("p", null, " Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo - nie jest możliwe odwrócenie jej działania, co stanowi obecnie współczesny standard w zakresie przechowywania haseł użytkowników. "),
                createVNode("p", null, " Operator okresowo zmienia swoje hasła administracyjne. "),
                createVNode("p", null, " W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa. "),
                createVNode("p", null, " Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych. "),
                createVNode("h2", null, "Hosting i Logi Serwerowe"),
                createVNode("p", null, " Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: HOSTIDO "),
                createVNode("span", null, "Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:"),
                createVNode("ul", null, [
                  createVNode("li", null, " zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików), "),
                  createVNode("li", null, "czas nadejścia zapytania,"),
                  createVNode("li", null, "czas wysłania odpowiedzi,"),
                  createVNode("li", null, " nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP, "),
                  createVNode("li", null, " informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP, "),
                  createVNode("li", null, " adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik, "),
                  createVNode("li", null, "informacje o przeglądarce użytkownika,"),
                  createVNode("li", null, "informacje o adresie IP,"),
                  createVNode("li", null, " informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie, "),
                  createVNode("li", null, " informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora. ")
                ]),
                createVNode("h2", null, " Twoje Prawa i Dodatkowe Informacje o Sposobie Wykorzystania Danych "),
                createVNode("span", null, "W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:"),
                createVNode("ul", null, [
                  createVNode("li", null, "firma hostingowa na zasadzie powierzenia,"),
                  createVNode("li", null, " upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony, "),
                  createVNode("li", null, " firmy, świadczące usługi marketingu na rzecz Administratora. ")
                ]),
                createVNode("p", null, " Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata. "),
                createVNode("span", null, "Przysługuje Ci prawo żądania od Administratora:"),
                createVNode("ul", null, [
                  createVNode("li", null, "dostępu do danych osobowych Ciebie dotyczących,"),
                  createVNode("li", null, "sprostowania,"),
                  createVNode("li", null, "usunięcia,"),
                  createVNode("li", null, "ograniczenia przetwarzania,"),
                  createVNode("li", null, "oraz przenoszenia danych.")
                ]),
                createVNode("p", null, " Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania. "),
                createVNode("p", null, " Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa. "),
                createVNode("p", null, " Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu. "),
                createVNode("p", null, " W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego. "),
                createVNode("p", null, " Dane osobowe nie są przekazywane do krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej. "),
                createVNode("h2", null, "Informacje w Formularzach"),
                createVNode("p", null, "Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane."),
                createVNode("p", null, "Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP)."),
                createVNode("p", null, "Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu URL strony zawierającej formularz."),
                createVNode("p", null, "Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy."),
                createVNode("h2", null, "Logi Administratora i Techniki Marketingowe"),
                createVNode("p", null, "Informacje o zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem."),
                createVNode("p", null, [
                  createTextVNode("Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: "),
                  createVNode("a", { href: "https://www.google.com/ads/preferences/" }, "https://www.google.com/ads/preferences/")
                ]),
                createVNode("p", null, "Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika."),
                createVNode("h2", null, "Informacja o Plikach Cookies"),
                createVNode("p", null, "Serwis korzysta z plików cookies."),
                createVNode("p", null, "Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer."),
                createVNode("p", null, "Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu."),
                createVNode("span", null, "Pliki cookies wykorzystywane są w następujących celach:"),
                createVNode("ul", null, [
                  createVNode("li", null, "utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;"),
                  createVNode("li", null, 'realizacji celów określonych powyżej w części "Istotne techniki marketingowe".')
                ]),
                createVNode("p", null, "W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika."),
                createVNode("p", null, "Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej."),
                createVNode("p", null, "Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu."),
                createVNode("h2", null, "Zarządzanie Plikami Cookies – Jak Wyrażać i Cofać Zgodę?"),
                createVNode("p", null, "Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www."),
                createVNode("span", null, "W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową, której używasz, i postępuj zgodnie z instrukcjami:"),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plikow-cookie-w-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                      target: "_blank"
                    }, "Microsoft Edge")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer",
                      target: "_blank"
                    }, "Internet Explorer")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.google.com/chrome/answer/95647?hl=pl",
                      target: "_blank"
                    }, "Chrome")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.apple.com/pl-pl/guide/safari/sfri11471/mac",
                      target: "_blank"
                    }, "Safari")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.mozilla.org/pl/kb/Włączanie i wyłączanie obsługi ciasteczek",
                      target: "_blank"
                    }, "Firefox")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://help.opera.com/pl/latest/web-preferences/#cookies",
                      target: "_blank"
                    }, "Opera")
                  ])
                ]),
                createVNode("span", null, [
                  createVNode("strong", null, "Urządzenia mobilne:")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.google.com/chrome/answer/95647?hl=pl&co=GENIE.Platform%3DAndroid&oco=1",
                      target: "_blank"
                    }, "Android")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.apple.com/pl-pl/HT201265",
                      target: "_blank"
                    }, "Safari (iOS)")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "https://support.microsoft.com/pl-pl/help/11696/windows-phone-7",
                      target: "_blank"
                    }, "Windows Phone")
                  ])
                ])
              ]),
              createVNode(_component_Footer, { customClass: "py-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-d87d38f3"]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PrivacyPolicy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$c = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900">Delete Account</h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$c, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$H, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ms-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$G, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$E, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$H, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$b, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Password</h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$G, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$G, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$G, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton$1, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$G, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$G, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="text-sm mt-2 text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton$1, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$k, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Profile")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$8, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$9, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$a, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Realisations",
  __ssrInlineRender: true,
  props: {
    images: Array
  },
  setup(__props) {
    const props = __props;
    const gallery = ref(props.images);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_silent_box = resolveComponent("silent-box");
      const _component_Footer = resolveComponent("Footer");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Realizajce | Coś więcej niż zwykła reklama" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "TataLight - Tworzymy niepowtarzalne reklamy świetlne i dekoracje, dostosowane do Twoich potrzeb. Odkryj unikalne projekty, które przyciągają uwagę i dodają blasku przestrzeni."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, { bgImage: "bg-[url('/assets/images/small/tl-small_10.webp')] sm:bg-[url('/assets/images/big/tl-big_10.webp')] bg-cover bg-center bg-gray-300 bg-blend-multiply" }, {
        headerContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeadingBox, { heading: "Realizacje" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Inspiruj się naszymi projektami i zobacz, jak możemy wnieść światło i magię do Twojego biznesu!`);
                } else {
                  return [
                    createTextVNode("Inspiruj się naszymi projektami i zobacz, jak możemy wnieść światło i magię do Twojego biznesu!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeadingBox, { heading: "Realizacje" }, {
                default: withCtx(() => [
                  createTextVNode("Inspiruj się naszymi projektami i zobacz, jak możemy wnieść światło i magię do Twojego biznesu!")
                ]),
                _: 1
              })
            ];
          }
        }),
        mainContent: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-x-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_silent_box, {
              class: "silentbox group",
              gallery: gallery.value
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Footer, { customClass: "py-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode(_component_silent_box, {
                  class: "silentbox group",
                  gallery: gallery.value
                }, null, 8, ["gallery"])
              ]),
              createVNode(_component_Footer, { customClass: "py-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Realisations.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  methods: {
    toggle() {
      this.$el.classList.toggle("change");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "hamburger group",
    style: { "z-index": "1000000000000000" }
  }, _attrs))} data-v-4a30ecf5><div class="bar1 group-hover:translate-y-1" data-v-4a30ecf5></div><div class="bar2" data-v-4a30ecf5></div><div class="bar3 group-hover:-translate-y-1" data-v-4a30ecf5></div></button>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Navigation/Hamburger.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4a30ecf5"]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hamburger
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "HamburgerMenu",
  __ssrInlineRender: true,
  props: {
    showModal: Boolean
  },
  setup(__props) {
    const props = __props;
    let body;
    onMounted(() => {
      body = document.querySelector("body");
      watchEffect(() => {
        if (props.showModal) {
          body.classList.add("overflow-y-hidden");
        } else {
          body.classList.remove("overflow-y-hidden");
        }
      });
    });
    onUnmounted(() => {
      body.classList.remove("overflow-y-hidden");
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.showModal) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bgLight fixed lg:absolute top-0 bottom-0 right-0 left-0 z-40 overflow-hidden" }, _attrs))} data-v-accb67d5><ul class="modal flex justify-center items-center flex-col gap-12" data-v-accb67d5><img src="/assets/logo/logo--sign.png" alt="logo firmy TatraLight" class="w-10 opacity-30" data-v-accb67d5><li data-v-accb67d5>`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/o_nas",
          class: "link",
          onClick: _ctx.addOverflow
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`O nas`);
            } else {
              return [
                createTextVNode("O nas")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-accb67d5>`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/realizacje",
          class: "link",
          onClick: _ctx.addOverflow
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Realizacje`);
            } else {
              return [
                createTextVNode("Realizacje")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-accb67d5>`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/kontakt",
          class: "link",
          onClick: _ctx.addOverflow
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Kontakt`);
            } else {
              return [
                createTextVNode("Kontakt")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><img src="/assets/logo/logo--sign.png" alt="logo firmy TatraLight" class="w-10 opacity-30" data-v-accb67d5></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Navigation/HamburgerMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HamburgerMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-accb67d5"]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HamburgerMenu
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex gap-1 sm:gap-2" }, _attrs))} data-v-23a8f6a6><li data-v-23a8f6a6>`);
  _push(ssrRenderComponent(_component_Link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/assets/logo/logo--white.png" alt="logo firmy TatraLight" class="w-28" data-v-23a8f6a6${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: "/assets/logo/logo--white.png",
            alt: "logo firmy TatraLight",
            class: "w-28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-23a8f6a6>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/o_nas",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` O nas `);
      } else {
        return [
          createTextVNode(" O nas ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-23a8f6a6>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/realizacje",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Realizacje `);
      } else {
        return [
          createTextVNode(" Realizacje ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-23a8f6a6>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/kontakt",
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` kontakt `);
      } else {
        return [
          createTextVNode(" kontakt ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Navigation/NavLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NavLinks = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-23a8f6a6"]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NavLinks
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    let body;
    onMounted(() => {
      body = document.querySelector("body");
      watchEffect(() => {
        if (showModal.value) {
          body.classList.add("overflow-y-hidden");
        } else {
          body.classList.remove("overflow-y-hidden");
        }
      });
    });
    onUnmounted(() => {
      body.classList.remove("overflow-y-hidden");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "border-box absolute top-10 left-10 flex justify-center items-center py-2 px-2 sm:px-4 space-x-5 bg-bgDark text-fontLight text-sm uppercase" }, _attrs))}>`);
      _push(ssrRenderComponent(Hamburger, {
        onClick: ($event) => showModal.value = !showModal.value
      }, null, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(HamburgerMenu, { showModal: showModal.value }, null, _parent));
      }, "body", false, _parent);
      _push(ssrRenderComponent(NavLinks, null, null, _parent));
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/Navigation/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "SocialBox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-3 py-3 absolute -right-0 bottom-0 flex space-x-2 bg-black rounded-tl-2xl" }, _attrs))}>`);
      _push(ssrRenderComponent(SocialIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://facebook.com" target="_blank"${_scopeId}><svg fill="white" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="hover:scale-110 duration-300"${_scopeId}><path d="M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002
                        H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z"${_scopeId}></path></svg></a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://facebook.com",
                target: "_blank"
              }, [
                (openBlock(), createBlock("svg", {
                  fill: "white",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 64 64",
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "hover:scale-110 duration-300"
                }, [
                  createVNode("path", { d: "M36.2008 63.8002H28.4008C26.4008 63.8002 24.8008 62.1002 24.8008 60.0002V36.2002\r\n                        H18.4008C16.4008 36.2002 14.8008 34.5002 14.8008 32.4002V25.5002C14.8008 23.4002 16.4008 21.7002 18.4008 21.7002H24.6008V15.4002C24.6008 6.30019 30.0008 0.200195 38.0008 0.200195H44.0008C46.0008 0.200195 47.6008 1.9002 47.6008 4.0002V12.1002C47.6008 14.2002 46.0008 15.9002 44.0008 15.9002H39.9008C39.8008 15.9002 39.8008 15.9002 39.7008 15.9002C39.7008 16.0002 39.7008 16.1002 39.7008 16.2002V21.6002H45.4008C46.6008 21.7002 47.6008 22.2002 48.3008 23.0002C49.0008 23.9002 49.3008 25.1002 49.1008 26.2002L47.9008 33.0002C47.7008 34.8002 46.2008 36.1002 44.3008 36.1002H39.7008V60.0002C39.7008 62.0002 38.1008 63.8002 36.2008 63.8002ZM26.5008 32.7002C27.5008 32.7002 28.3008 33.5002 28.3008 34.5002V60.0002C28.3008 60.2002 28.4008 60.3002 28.4008 60.3002H36.2008C36.2008 60.3002 36.3008 60.2002 36.3008 60.0002V34.3002C36.3008 33.3002 37.1008 32.5002 38.1008 32.5002H44.4008C44.4008 32.5002 44.5008 32.5002 44.5008 32.4002V32.3002L45.7008 25.6002C45.7008 25.4002 45.7008 25.3002 45.6008 25.2002C45.6008 25.2002 45.5008 25.1002 45.4008 25.1002H38.0008C37.0008 25.1002 36.2008 24.3002 36.2008 23.3002V16.2002C36.2008 14.4002 36.5008 12.4002 39.9008 12.4002H44.0008C44.0008 12.4002 44.1008 12.3002 44.1008 12.1002V4.1002C44.1008 3.9002 44.0008 3.8002 44.0008 3.8002H38.1008C32.1008 3.8002 28.2008 8.4002 28.2008 15.5002V23.6002C28.2008 24.6002 27.4008 25.4002 26.4008 25.4002H18.4008C18.4008 25.4002 18.3008 25.5002 18.3008 25.7002V32.6002C18.3008 32.8002 18.4008 32.9002 18.4008 32.9002L26.5008 32.7002Z" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SocialIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://instagram.com" target="_blank"${_scopeId}><svg fill="white" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="hover:scale-110 duration-300"${_scopeId}><path d="M32.0016 17.5996C24.1016 17.5996 17.6016 23.9996 17.6016 31.9996C17.6016 39.8996 24.0016 46.3996 32.0016 46.3996C39.9016 46.3996 46.3016 39.9996 46.3016 31.9996C46.3016 24.0996 39.9016 17.5996 32.0016 17.5996ZM32.0016 41.8996C26.6016 41.8996 22.1016 37.4996 22.1016 31.9996C22.1016 26.5996 26.5016 22.0996 32.0016 22.0996C37.4016 22.0996 41.8016 26.4996 41.8016 31.9996C41.8016 37.3996 37.4016 41.8996 32.0016 41.8996Z"${_scopeId}></path><path d="M47 11.5996C45 11.5996 43.5 13.1996 43.5 15.0996C43.5 16.9996 45.1 18.5996 47 18.5996C48.9 18.5996 50.5 16.9996 50.5 15.0996C50.5 13.1996 49 11.5996 47 11.5996Z"${_scopeId}></path><path d="M46.9008 1.7998H17.1008C8.60078 1.7998 1.80078 8.5998 1.80078 17.0998V46.9998C1.80078 55.3998 8.70078 62.2998 17.1008 62.2998H47.0008C55.4008 62.2998 62.3008 55.3998 62.3008 46.9998V17.0998C62.3008 8.5998 55.4008 1.7998 46.9008 1.7998ZM57.8008 46.8998C57.8008 52.8998 53.0008 57.6998 47.0008 57.6998H17.1008C11.1008 57.6998 6.30078 52.8998 6.30078 46.8998V17.0998C6.30078 11.0998 11.2008 6.2998 17.1008 6.2998H46.9008C52.9008 6.2998 57.7008 11.1998 57.7008 17.0998V46.8998H57.8008Z"${_scopeId}></path></svg></a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://instagram.com",
                target: "_blank"
              }, [
                (openBlock(), createBlock("svg", {
                  fill: "white",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 64 64",
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "hover:scale-110 duration-300"
                }, [
                  createVNode("path", { d: "M32.0016 17.5996C24.1016 17.5996 17.6016 23.9996 17.6016 31.9996C17.6016 39.8996 24.0016 46.3996 32.0016 46.3996C39.9016 46.3996 46.3016 39.9996 46.3016 31.9996C46.3016 24.0996 39.9016 17.5996 32.0016 17.5996ZM32.0016 41.8996C26.6016 41.8996 22.1016 37.4996 22.1016 31.9996C22.1016 26.5996 26.5016 22.0996 32.0016 22.0996C37.4016 22.0996 41.8016 26.4996 41.8016 31.9996C41.8016 37.3996 37.4016 41.8996 32.0016 41.8996Z" }),
                  createVNode("path", { d: "M47 11.5996C45 11.5996 43.5 13.1996 43.5 15.0996C43.5 16.9996 45.1 18.5996 47 18.5996C48.9 18.5996 50.5 16.9996 50.5 15.0996C50.5 13.1996 49 11.5996 47 11.5996Z" }),
                  createVNode("path", { d: "M46.9008 1.7998H17.1008C8.60078 1.7998 1.80078 8.5998 1.80078 17.0998V46.9998C1.80078 55.3998 8.70078 62.2998 17.1008 62.2998H47.0008C55.4008 62.2998 62.3008 55.3998 62.3008 46.9998V17.0998C62.3008 8.5998 55.4008 1.7998 46.9008 1.7998ZM57.8008 46.8998C57.8008 52.8998 53.0008 57.6998 47.0008 57.6998H17.1008C11.1008 57.6998 6.30078 52.8998 6.30078 46.8998V17.0998C6.30078 11.0998 11.2008 6.2998 17.1008 6.2998H46.9008C52.9008 6.2998 57.7008 11.1998 57.7008 17.0998V46.8998H57.8008Z" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SocialIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://tiktok.com" target="_blank"${_scopeId}><svg fill="white" width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="hover:scale-110 duration-300"${_scopeId}><g clip-path="url(#clip0_412_113)"${_scopeId}><path d="M33.4133 0.0533333C36.9067 0 40.3733 0.0266667 43.84 0C44.0533 4.08 45.52 8.24 48.5067 11.12C51.4933 14.08 55.7067 15.44 59.8133 15.8933V26.64C55.9733 26.5067 52.1067 25.7067 48.6133 24.0533C47.0933 23.36 45.68 22.48 44.2933 21.5733C44.2667 29.36 44.32 37.1467 44.24 44.9067C44.0267 48.64 42.8 52.3467 40.64 55.4133C37.1467 60.5333 31.0933 63.8667 24.88 63.9733C21.0667 64.1867 17.2533 63.1467 14 61.2267C8.61334 58.0533 4.82668 52.24 4.26668 46C4.21334 44.6667 4.18668 43.3333 4.24001 42.0267C4.72001 36.96 7.22668 32.1067 11.12 28.8C15.5467 24.96 21.7333 23.12 27.52 24.2133C27.5733 28.16 27.4133 32.1067 27.4133 36.0533C24.7733 35.2 21.68 35.44 19.36 37.04C17.68 38.1333 16.4 39.8133 15.7333 41.7067C15.1733 43.0667 15.3333 44.56 15.36 46C16 50.3733 20.2133 54.0533 24.6933 53.6533C27.68 53.6267 30.5333 51.8933 32.08 49.36C32.5867 48.48 33.1467 47.5733 33.1733 46.5333C33.44 41.76 33.3333 37.0133 33.36 32.24C33.3867 21.4933 33.3333 10.7733 33.4133 0.0533333Z"${_scopeId}></path></g><defs${_scopeId}><clipPath id="clip0_412_113"${_scopeId}><rect width="64" height="64" fill="white"${_scopeId}></rect></clipPath></defs></svg></a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://tiktok.com",
                target: "_blank"
              }, [
                (openBlock(), createBlock("svg", {
                  fill: "white",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 64 64",
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "hover:scale-110 duration-300"
                }, [
                  createVNode("g", { "clip-path": "url(#clip0_412_113)" }, [
                    createVNode("path", { d: "M33.4133 0.0533333C36.9067 0 40.3733 0.0266667 43.84 0C44.0533 4.08 45.52 8.24 48.5067 11.12C51.4933 14.08 55.7067 15.44 59.8133 15.8933V26.64C55.9733 26.5067 52.1067 25.7067 48.6133 24.0533C47.0933 23.36 45.68 22.48 44.2933 21.5733C44.2667 29.36 44.32 37.1467 44.24 44.9067C44.0267 48.64 42.8 52.3467 40.64 55.4133C37.1467 60.5333 31.0933 63.8667 24.88 63.9733C21.0667 64.1867 17.2533 63.1467 14 61.2267C8.61334 58.0533 4.82668 52.24 4.26668 46C4.21334 44.6667 4.18668 43.3333 4.24001 42.0267C4.72001 36.96 7.22668 32.1067 11.12 28.8C15.5467 24.96 21.7333 23.12 27.52 24.2133C27.5733 28.16 27.4133 32.1067 27.4133 36.0533C24.7733 35.2 21.68 35.44 19.36 37.04C17.68 38.1333 16.4 39.8133 15.7333 41.7067C15.1733 43.0667 15.3333 44.56 15.36 46C16 50.3733 20.2133 54.0533 24.6933 53.6533C27.68 53.6267 30.5333 51.8933 32.08 49.36C32.5867 48.48 33.1467 47.5733 33.1733 46.5333C33.44 41.76 33.3333 37.0133 33.36 32.24C33.3867 21.4933 33.3333 10.7733 33.4133 0.0533333Z" })
                  ]),
                  createVNode("defs", null, [
                    createVNode("clipPath", { id: "clip0_412_113" }, [
                      createVNode("rect", {
                        width: "64",
                        height: "64",
                        fill: "white"
                      })
                    ])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shared/SocialBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">`);
      if (__props.canLogin) {
        _push(`<div class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Dashboard`);
              } else {
                return [
                  createTextVNode("Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Log in`);
              } else {
                return [
                  createTextVNode("Log in")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex justify-center"><svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="#FF2D20"></path></svg></div><div class="mt-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><a href="https://laravel.com/docs" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Documentation</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laracasts.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laracasts</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laravel News</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Vibrant Ecosystem</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Forge</a>, <a href="https://vapor.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Vapor</a>, <a href="https://nova.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Nova</a>, and <a href="https://envoyer.io" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Telescope</a>, and more. </p></div></div></div></div><div class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between"><div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-start"><div class="flex items-center gap-4"><a href="https://github.com/sponsors/taylorotwell" class="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="-mt-px me-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg> Sponsor </a></div></div><div class="ms-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i(t4, r2, n2) {
  return i = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t5) {
      return false;
    }
  }() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, i.apply(null, arguments);
}
function u(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return u = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return i(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, u(t4);
}
var f = String.prototype.replace, a = /%20/g, c = "RFC3986", l = { default: c, formatters: { RFC1738: function(t4) {
  return f.call(t4, a, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: c }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && g(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = m.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && g(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var T2 = Object.keys(h2);
    k2 = a2 ? T2.sort(a2) : T2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var C2 = k2[N2], D2 = "object" == typeof C2 && void 0 !== C2.value ? C2.value : h2[C2];
    if (!i2 || null !== D2) {
      var $2 = g(h2) ? "function" == typeof e2 ? e2(n2, C2) : n2 : n2 + (c2 ? "." + C2 : "[" + C2 + "]");
      w(x2, t3(D2, $2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, T = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, C = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, D = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : C(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, $ = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return T;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? T.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : T.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : T.arrayLimit, charset: void 0 === t5.charset ? T.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : T.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : T.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : T.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : T.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : T.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : T.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : T.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : T.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : T.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, T.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), T.decoder, u3, "key"), a3 = d.maybeMap(C(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, T.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = D(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, F = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(decodeURI(o2));
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: $(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n3, e2, o2) {
      var i2, u2;
      if (!o2 && [null, void 0].includes(t5[e2]))
        throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + r2.name + "'.");
      if (r2.wheres[e2] && !new RegExp("^" + (o2 ? "(" + r2.wheres[e2] + ")?" : r2.wheres[e2]) + "$").test(null != (u2 = t5[e2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + e2 + "' parameter does not match required format '" + r2.wheres[e2] + "' for route '" + r2.name + "'.");
      return encodeURI(null != (i2 = t5[e2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    var t5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === t5 ? "/" : t5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), I = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new F(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : g(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new F(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new F(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.g(r2), this.m(t5, r2));
  }, f2.g = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.m = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ u(String)), P = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new I(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_1, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_2, "./Pages/Auth/Login.vue": __vite_glob_0_3, "./Pages/Auth/Register.vue": __vite_glob_0_4, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_5, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_6, "./Pages/Contact.vue": __vite_glob_0_7, "./Pages/Dashboard.vue": __vite_glob_0_8, "./Pages/Error.vue": __vite_glob_0_9, "./Pages/Index.vue": __vite_glob_0_10, "./Pages/PrivacyPolicy.vue": __vite_glob_0_11, "./Pages/Profile/Edit.vue": __vite_glob_0_12, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_13, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_14, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_15, "./Pages/Realisations.vue": __vite_glob_0_16, "./Pages/Shared/Footer.vue": __vite_glob_0_17, "./Pages/Shared/Header/VideoBackgorund.vue": __vite_glob_0_18, "./Pages/Shared/Navigation/Hamburger.vue": __vite_glob_0_19, "./Pages/Shared/Navigation/HamburgerMenu.vue": __vite_glob_0_20, "./Pages/Shared/Navigation/NavLinks.vue": __vite_glob_0_21, "./Pages/Shared/Navigation/Navbar.vue": __vite_glob_0_22, "./Pages/Shared/SocialBox.vue": __vite_glob_0_23, "./Pages/Welcome.vue": __vite_glob_0_24 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(P).use(VueSilentbox).use(VueReCaptcha, { siteKey: captcheKey, loaderOptions: { useRecaptchaNet: true } }).component("Link", Link).component("Head", Head).component("NavBar", _sfc_main$2).component("Footer", Footer).component("HeadingBox", HeadingBox);
    }
  })
);
