$(".carousel").owlCarousel({
  margin: 20,
  loop: !0,
  autoplayTimeOut: 2e3,
  autoplayHoverPauser: !0,
  responsive: {
    0: { items: 1, nav: !1 },
    600: { items: 2, nav: !1 },
    1e3: { items: 3, nav: !1 },
  },
});
