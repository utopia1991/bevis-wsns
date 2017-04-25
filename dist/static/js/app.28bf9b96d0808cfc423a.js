webpackJsonp([1,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(71),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
	routes: [{ path: '/', component: __webpack_require__(59) }, { path: '/index', redirect: '/' }, { path: '/classify/:id', component: __webpack_require__(57) }, { path: '/go*', component: __webpack_require__(58) }]
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'swiper-slide',
  data() {
    return {
      slideClass: 'swiper-slide'
    };
  },
  ready() {
    this.update();
  },
  mounted() {
    this.update();
    if (this.$parent.options.slideClass) {
      this.slideClass = this.$parent.options.slideClass;
    }
  },
  updated() {
    this.update();
  },
  attached() {
    this.update();
  },
  methods: {
    update() {
      if (this.$parent && this.$parent.swiper && this.$parent.swiper.update) {
        this.$parent.swiper.update(true);
        if (this.$parent.options.loop) {
          this.$parent.swiper.reLoop();
        }
      }
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

var browser = typeof window !== 'undefined';
if (browser) {
  window.Swiper = __webpack_require__(9);
  __webpack_require__(49);
}
/* harmony default export */ __webpack_exports__["default"] = {
  name: 'swiper',
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: 3500
        };
      }
    }
  },
  data() {
    return {
      defaultSwiperClasses: {
        wrapperClass: 'swiper-wrapper'
      }
    };
  },
  ready() {
    if (!this.swiper && browser) {
      this.swiper = new Swiper(this.$el, this.options);
    }
  },
  mounted() {
    var self = this;
    var mount = function () {
      if (!self.swiper && browser) {
        delete self.options.notNextTick;
        var setClassName = false;
        for (var className in self.defaultSwiperClasses) {
          if (self.defaultSwiperClasses.hasOwnProperty(className)) {
            if (self.options[className]) {
              setClassName = true;
              self.defaultSwiperClasses[className] = self.options[className];
            }
          }
        }
        var mountInstance = function () {
          self.swiper = new Swiper(self.$el, self.options);
        };
        setClassName ? self.$nextTick(mountInstance) : mountInstance();
      }
    };
    this.options.notNextTick ? mount() : this.$nextTick(mount);
  },
  updated() {
    if (this.swiper) {
      this.swiper.update();
    }
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
      delete this.swiper;
    }
  }
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	name: 'app'
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
	data() {
		return {
			title: '',
			count: '',
			goods: []
		};
	},
	created: function () {
		this.fetchData();
	},
	methods: {
		fetchData: function () {
			var id = this.$route.params.id;
			var self = this;
			var apiURL = 'http://houmen.wsns66.com/wsns/mobile/goods!queryGoodsList.do?catId=' + id + '&pageBean.currentPage=1&pageBean.perPageSize=300';
			var titleName = {
				'38': '背心',
				'15': 'T恤',
				'23': '外套',
				'19': '牛仔裤',
				'17': '衬衫',
				'16': '连衣裙',
				'20': '半身裙',
				'21': '休闲裤',
				'37': '打底裤',
				'22': '卫衣',
				'18': '针织衫',
				'10': '女鞋',
				'11': '包包',
				'12': '美妆',
				'13': '配饰',
				'14': '内衣',
				'36': '大码气场',
				'35': '心机露肉',
				'34': '透视尤怜',
				'33': '爱牛仔裤',
				'32': '上班穿着',
				'31': '性感到底',
				'30': '气质衬衫',
				'29': '缤纷裙子',
				'28': '包治百病',
				'27': 'T恤潮搭',
				'26': '拯救粗腿',
				'25': '穿对鞋子',
				'24': '专属风格',
				'39': '休闲套装'
			};
			this.title = titleName[id];

			$.get(apiURL, function (data) {
				var oGoods = data.result.goodsList;
				_.map(oGoods, function (oGood) {
					oGood.pcLinkurl = '/go?url=' + oGood.pcLinkurl;
				});
				self.goods = oGoods;
				self.count = data.result.total;
			});
		}
	},
	watch: {
		'$route'(to, from) {
			this.fetchData();
		}
	}
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	methods: {
		backTop() {
			$('body,html').animate({ scrollTop: 0 }, 400);
		}
	}
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	mounted() {
		var id = this.$route.params.id;
		$('#' + id).addClass('active').siblings().removeClass('active');
	},
	methods: {
		search() {
			var text = $('#searchInput').val();
			var url = 'https://ai.taobao.com/search/index.htm?key=' + text + '&pid=mm_54988395_23866520_79878241';
			if (text != "") {
				window.open(url);
			}
		},
		mouseOver() {
			$(".qr").removeClass("none");
		},
		mouseleave() {
			$(".qr").addClass("none");
		}
	},
	watch: {
		'$route'(to, from) {
			var id = this.$route.params.id;
			console.log($('#' + id).siblings());
			$('#' + id).addClass('active').siblings().removeClass('active');
		}
	}
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	methods: {
		goAnchor(e) {
			var target = e.currentTarget.className;
			// $('#'+target).scrollTop = 0;
			$("html,body").animate({ scrollTop: $("#" + target).offset().top - 50 }, 300);
		}
	}
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_swiper__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_awesome_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_libs_jquery_slides_min_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_libs_jquery_slides_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_js_libs_jquery_slides_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_awesome_swiper___default.a);

/* harmony default export */ __webpack_exports__["default"] = {
	data() {
		return {
			tcount: '',
			dresscount: '',
			coatcount: '',
			jeanscount: '',
			shirtcount: '',
			skirtcount: '',
			pathcount: '',
			warecount: '',
			innerpathcount: '',
			fleececount: '',
			knitwearcount: '',
			banners: [],
			tgoods: [],
			dressgoods: [],
			coatgoods: [],
			jeansgoods: [],
			shirtgoods: [],
			skirtgoods: [],
			pathgoods: [],
			waregoods: [],
			innerpathgoods: [],
			fleecegoods: [],
			knitweargoods: [],
			swiperOption: {
				pagination: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				autoplay: 3000,
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
			}
		};
	},
	created: function () {
		this.fetchData();
	},
	mounted() {
		// 穿衣搭配轮播
		$("#slides").slidesjs({
			height: 290,
			pagination: {
				active: false
			}
		});
	},
	components: {
		swiper: __WEBPACK_IMPORTED_MODULE_1_vue_awesome_swiper__["swiper"],
		swiperSlide: __WEBPACK_IMPORTED_MODULE_1_vue_awesome_swiper__["swiperSlide"]
	},
	methods: {
		fetchData: function () {
			var self = this;
			var apiURL = 'http://houmen.wsns66.com/wsns/mobile/goods!queryGoodsList.do?catId=';
			var id = self.$route.params.id;

			// banner
			$.get('http://houmen.wsns66.com/wsns/mobile/active!getCarrousels.do?isBanner=1', function (data) {
				self.banners = data.result.activeList;
			});
			// 背心
			$.get(apiURL + '38', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.waregoods = goods;
				self.warecount = data.result.total;
			});
			// T恤
			$.get(apiURL + '15', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.tgoods = goods;
				self.tcount = data.result.total;
			});
			// 连衣裙
			$.get(apiURL + '16', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.dressgoods = goods;
				self.dresscount = data.result.total;
			});
			// 牛仔裤
			$.get(apiURL + '19', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.jeansgoods = goods;
				self.jeanscount = data.result.total;
			});
			// 衬衫
			$.get(apiURL + '17', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.shirtgoods = goods;
				self.shirtcount = data.result.total;
			});
			// 半身裙
			$.get(apiURL + '20', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.skirtgoods = goods;
				self.skirtcount = data.result.total;
			});
			// 休闲裤
			$.get(apiURL + '21', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.pathgoods = goods;
				self.pathcount = data.result.total;
			});
			// 打底裤
			$.get(apiURL + '37', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.innerpathgoods = goods;
				self.innerpathcount = data.result.total;
			});
			// 针织衫
			$.get(apiURL + '18', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.knitweargoods = goods;
				self.knitwearcount = data.result.total;
			});
			// 卫衣
			$.get(apiURL + '22', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.fleecegoods = goods;
				self.fleececount = data.result.total;
			});
			// 外套
			$.get(apiURL + '23', function (data) {
				var goods = data.result.goodsList.slice(0, 7);
				_.map(goods, function (good) {
					good.pcLinkurl = '/go?url=' + good.pcLinkurl;
				});
				self.coatgoods = goods;
				self.coatcount = data.result.total;
			});
		}
	}
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_subHeader__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_subHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_subHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_classifyWrapper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_classifyWrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_classifyWrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_siderBar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_siderBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_siderBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_footer__);
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
	name: 'app',
	components: {
		top: __WEBPACK_IMPORTED_MODULE_0__components_header___default.a,
		subHeader: __WEBPACK_IMPORTED_MODULE_1__components_subHeader___default.a,
		classifyWrapper: __WEBPACK_IMPORTED_MODULE_2__components_classifyWrapper___default.a,
		siderBar: __WEBPACK_IMPORTED_MODULE_3__components_siderBar___default.a,
		bottom: __WEBPACK_IMPORTED_MODULE_4__components_footer___default.a
	}
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_subHeader__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_subHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_subHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_wrapper__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_siderBar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_siderBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_siderBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_footer__);
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
	name: 'app',
	components: {
		top: __WEBPACK_IMPORTED_MODULE_0__components_header___default.a,
		subHeader: __WEBPACK_IMPORTED_MODULE_1__components_subHeader___default.a,
		wrapper: __WEBPACK_IMPORTED_MODULE_2__components_wrapper___default.a,
		siderBar: __WEBPACK_IMPORTED_MODULE_3__components_siderBar___default.a,
		bottom: __WEBPACK_IMPORTED_MODULE_4__components_footer___default.a
	}
};

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(61),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sub-header-affix none"
  }, [_c('div', {
    staticClass: "header-affix-inner"
  }, [_c('img', {
    staticClass: "affix-logo",
    attrs: {
      "src": "/static/images/icon.png"
    }
  }), _vm._v(" "), _c('ul', [_c('li', {
    on: {
      "click": _vm.goAnchor
    }
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("首页")])]), _vm._v(" "), _c('li', {
    staticClass: "wareAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("背心")]), _vm._v(" "), _c('li', {
    staticClass: "tAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("T恤")]), _vm._v(" "), _c('li', {
    staticClass: "dressAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("连衣裙")]), _vm._v(" "), _c('li', {
    staticClass: "shirtAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("衬衫")]), _vm._v(" "), _c('li', {
    staticClass: "innerpathAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("打底裤")]), _vm._v(" "), _c('li', {
    staticClass: "knitwearAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("针织衫")]), _vm._v(" "), _c('li', {
    staticClass: "jeansAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("牛仔裤")]), _vm._v(" "), _c('li', {
    staticClass: "skirtAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("半身裙")]), _vm._v(" "), _c('li', {
    staticClass: "pathAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("休闲裤")]), _vm._v(" "), _c('li', {
    staticClass: "fleeceAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("卫衣")]), _vm._v(" "), _c('li', {
    staticClass: "coatAnchor",
    on: {
      "click": _vm.goAnchor
    }
  }, [_vm._v("外套")])])])])
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_vm._v("\n\t重新加载中，请等待。。。\n")])
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('top'), _vm._v(" "), _c('subHeader'), _vm._v(" "), _c('wrapper'), _vm._v(" "), _c('siderBar'), _vm._v(" "), _c('bottom')], 1)
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('top'), _vm._v(" "), _c('div', {
    staticClass: "none"
  }, [_c('subHeader')], 1), _vm._v(" "), _c('classifyWrapper'), _vm._v(" "), _c('siderBar'), _vm._v(" "), _c('bottom')], 1)
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    attrs: {
      "id": "insight-header"
    }
  }, [_c('div', {
    staticClass: "header-body fixWidth",
    attrs: {
      "id": "header-body"
    }
  }, [_c('router-link', {
    staticClass: "header-logo router-link-active",
    attrs: {
      "to": "/",
      "title": ""
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/logo.png",
      "alt": "logo"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "rightInput"
  }, [_c('input', {
    attrs: {
      "id": "searchInput",
      "placeholder": "搜天猫/淘宝宝贝"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "search"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])]), _vm._v(" "), _c('ul', {
    staticClass: "rightIcon"
  }, [_vm._m(0), _vm._v(" "), _c('li', {
    staticClass: "app-qr",
    on: {
      "mouseover": _vm.mouseOver,
      "mouseleave": _vm.mouseleave
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/icon-phone.png",
      "alt": ""
    }
  }), _vm._v(" APP下载\n\t\t\t\t"), _c('img', {
    staticClass: "qr none",
    attrs: {
      "src": "/static/images/qr.png"
    }
  })]), _vm._v(" "), _vm._m(1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "sub-header"
  }, [_c('ul', {
    staticClass: "fixWidth"
  }, [_c('router-link', {
    staticClass: "active",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/38",
      "id": "38"
    }
  }, [_vm._v("背心")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/15",
      "id": "15"
    }
  }, [_vm._v("T恤")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/16",
      "id": "16"
    }
  }, [_vm._v("连衣裙")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/17",
      "id": "17"
    }
  }, [_vm._v("衬衫")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/37",
      "id": "37"
    }
  }, [_vm._v("打底裤")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/18",
      "id": "18"
    }
  }, [_vm._v("针织衫")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/19",
      "id": "19"
    }
  }, [_vm._v("牛仔裤")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/20",
      "id": "20"
    }
  }, [_vm._v("半身裙")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/21",
      "id": "21"
    }
  }, [_vm._v("休闲裤")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/22",
      "id": "22"
    }
  }, [_vm._v("卫衣")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/classify/23",
      "id": "23"
    }
  }, [_vm._v("外套")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/icon-time.png",
      "alt": ""
    }
  }), _vm._v(" 每天十点更新\n\t\t\t")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/icon-wechat.png",
      "alt": ""
    }
  }), _vm._v(" 关注公众号\n\t\t\t")])
}]}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.slideClass
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "wrapper"
    }
  }, [_c('p', {
    staticClass: "c-title"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.title) + "\n\t\t"), _c('span', {
    staticClass: "c-discription"
  }, [_vm._v("过去24小时内 我们为您精心挑选了" + _vm._s(_vm.count) + "件" + _vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "contain-body margin-top-30"
  }, [_c('div', {
    staticClass: "pannel"
  }, _vm._l((_vm.goods), function(good) {
    return _c('a', {
      staticClass: "contain-items-classify",
      attrs: {
        "href": good.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('span', {
      staticClass: "c-icon"
    }, [_vm._v(_vm._s(good.fromPlace))]), _vm._v(" "), _c('div', {
      staticClass: "c-contain-good"
    }, [_c('img', {
      attrs: {
        "src": good.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "c-contain-info"
    }, [_c('div', {
      staticClass: "c-goodName"
    }, [_vm._v(_vm._s(good.title))]), _vm._v(" "), _c('div', {
      staticClass: "c-goodMoney"
    }, [_vm._v(_vm._s(good.price) + "元")]), _vm._v(" "), _c('div', {
      staticClass: "c-goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(good.nums))])])])])
  }))])])])
},staticRenderFns: []}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    class: _vm.defaultSwiperClasses.wrapperClass
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2)
},staticRenderFns: []}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "footer"
    }
  }, [_vm._m(0), _vm._v(" "), _c('span', {
    staticClass: "backTop",
    on: {
      "click": _vm.backTop
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/top.png"
    }
  })]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "id": "sub-footer",
      "href": "http://a.app.qq.com/o/simple.jsp?pkgname=com.bangma.wsns",
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/fixed-qr.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thr-footer"
  }, [_c('div', {
    staticClass: "thr-footer-top"
  }, [_c('ul', [_c('li', [_c('img', {
    attrs: {
      "src": "/static/images/icon-time2.png"
    }
  }), _vm._v("\n\t\t\t\t\t每天10点更新\n\t\t\t\t")]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/icon-girl.png"
    }
  }), _vm._v("\n\t\t\t\t\t我是女生\n\t\t\t\t")]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "/static/images/icon-like.png"
    }
  }), _vm._v("\n\t\t\t\t\t好货买不停\n\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "thr-footer-bottom"
  }, [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("关于我们")])]), _vm._v("  |  \n\t\t\t\t"), _c('li', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("联系我们")])]), _vm._v("  |  \n\t\t\t\t"), _c('li', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("意见反馈")])]), _vm._v("  |      \n\t\t\t\t"), _c('li', [_vm._v("友情链接 : ")]), _vm._v("  \n\t\t\t\t"), _c('li', [_c('a', {
    attrs: {
      "href": "http://www.amagbuy.com/",
      "target": "_blank"
    }
  }, [_vm._v("阿猫阿狗")])]), _vm._v("  |  \n\t\t\t\t"), _c('li', [_c('a', {
    attrs: {
      "href": "http://chihoooo.com/",
      "target": "_blank"
    }
  }, [_vm._v("吃货")])])]), _vm._v(" "), _c('p', [_vm._v("厦门尚马信息科技有限公司 闽ICP备14004842号-44")])])])
}]}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "wrapper"
    }
  }, [_c('div', {
    attrs: {
      "id": "banner"
    }
  }, [_c('swiper', {
    staticClass: "contain-body fixWidth",
    attrs: {
      "options": _vm.swiperOption
    }
  }, [_vm._l((_vm.banners), function(banner) {
    return _c('swiper-slide', [_c('a', {
      attrs: {
        "href": banner.pcLink,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": banner.pcImage,
        "alt": banner.remark
      }
    })])])
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-button-prev",
    slot: "button-prev"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-button-next",
    slot: "button-next"
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "contain-body margin-top-30"
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('router-link', {
    staticClass: "classify-items",
    attrs: {
      "to": "/classify/10"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/shoes.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("女鞋")])]), _vm._v(" "), _c('router-link', {
    staticClass: "classify-items",
    attrs: {
      "to": "/classify/11"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/bag.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("包包")])]), _vm._v(" "), _c('router-link', {
    staticClass: "classify-items",
    attrs: {
      "to": "/classify/12"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/makeup.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("美妆")])]), _vm._v(" "), _c('router-link', {
    staticClass: "classify-items",
    attrs: {
      "to": "/classify/13"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/accessories.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("配饰")])]), _vm._v(" "), _c('router-link', {
    staticClass: "classify-items",
    attrs: {
      "to": "/classify/14"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/underware.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("内衣")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "contain-body margin-top-30"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "slides"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/33"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-1.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/28"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-2.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/29"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-3.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/25"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-4.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/36"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-5.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/30"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-6.png"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "pannel"
  }, [_c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/32"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-7.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/34"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-8.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/35"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-9.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/31"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-10.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/26"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-11.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/24"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-12.png"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "pannel"
  }, [_c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/27"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-13.png"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "match-items",
    attrs: {
      "to": "/classify/39"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/index/match-14.png"
    }
  })])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "contain-body"
  }, [_c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("背心")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/38"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "wareAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/ware.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("背心")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.warecount) + "件背心")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/38"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.waregoods), function(waregood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": waregood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": waregood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(waregood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(waregood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(waregood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(waregood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("T恤")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/15"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "tAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/t.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("T恤")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.tcount) + "件T恤")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/15"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.tgoods), function(tgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": tgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": tgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(tgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(tgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(tgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(tgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("连衣裙")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/16"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "dressAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/dress.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("连衣裙")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.dresscount) + "件连衣裙")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/16"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.dressgoods), function(dressgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": dressgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": dressgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(dressgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(dressgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(dressgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(dressgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("衬衫")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/17"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "shirtAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/shirt.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("衬衫")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.shirtcount) + "件衬衫")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/17"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.shirtgoods), function(shirtgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": shirtgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": shirtgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(shirtgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(shirtgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(shirtgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(shirtgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("打底裤")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/37"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "innerpathAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/innerpath.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("打底裤")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.innerpathcount) + "件打底裤")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/37"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.innerpathgoods), function(innerpathgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": innerpathgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": innerpathgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(innerpathgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(innerpathgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(innerpathgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(innerpathgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("针织衫")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/18"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "knitwearAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/knitwear.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("针织衫")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.knitwearcount) + "件针织衫")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/18"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.knitweargoods), function(knitweargood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": knitweargood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": knitweargood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(knitweargood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(knitweargood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(knitweargood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(knitweargood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("牛仔裤")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/19"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "jeansAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/jeans.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("牛仔裤")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.jeanscount) + "件牛仔裤")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/19"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.jeansgoods), function(jeansgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": jeansgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": jeansgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(jeansgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(jeansgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(jeansgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(jeansgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("半身裙")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/20"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "skirtAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/skirt.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("半身裙")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.skirtcount) + "件半身裙")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/20"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.skirtgoods), function(skirtgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": skirtgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": skirtgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(skirtgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(skirtgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(skirtgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(skirtgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("休闲裤")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/21"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "pathAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/path.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("休闲裤")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.pathcount) + "件休闲裤")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/21"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.pathgoods), function(pathgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": pathgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": pathgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(pathgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(pathgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(pathgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(pathgood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("卫衣")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/22"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "fleeceAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/fleece.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("卫衣")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.fleececount) + "件卫衣")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/22"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.fleecegoods), function(fleecegood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": fleecegood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": fleecegood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(fleecegood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(fleecegood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(fleecegood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(fleecegood.nums))])])])])])
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("外套")]), _vm._v(" "), _c('router-link', {
    staticClass: "more-link",
    attrs: {
      "to": "/classify/23"
    }
  }, [_vm._v("\n\t\t\t\t\tMORE +\n\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "contain-body",
    attrs: {
      "id": "coatAnchor"
    }
  }, [_c('div', {
    staticClass: "pannel"
  }, [_c('div', {
    staticClass: "contain-items",
    attrs: {
      "target": "_blank",
      "href": ""
    }
  }, [_c('img', {
    staticClass: "contain-items-img",
    attrs: {
      "src": "/static/images/index/coat.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-title"
  }, [_vm._v("外套")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-underline"
  }, [_vm._v("____")]), _vm._v(" "), _c('p', {
    staticClass: "contain-items-p contain-items-discription"
  }, [_vm._v("过去24小时内我们为您精心挑选了" + _vm._s(_vm.coatcount) + "件外套")]), _vm._v(" "), _c('router-link', {
    staticClass: "contain-items-link",
    attrs: {
      "to": "/classify/23"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t查看全部 >\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _vm._l((_vm.coatgoods), function(coatgood) {
    return _c('a', {
      staticClass: "contain-items",
      attrs: {
        "href": coatgood.pcLinkurl,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "contain-good"
    }, [_c('img', {
      attrs: {
        "src": coatgood.pcImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contain-info"
    }, [_c('div', {
      staticClass: "goodName"
    }, [_vm._v(_vm._s(coatgood.title))]), _vm._v(" "), _c('div', {
      staticClass: "goodMoney"
    }, [_c('span', [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(coatgood.price))]), _vm._v(" "), _c('span', {
      staticClass: "goodIcon"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(coatgood.fromPlace) + "\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "goodSale"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t月销 : "), _c('span', {
      attrs: {
        "id": "saleCount"
      }
    }, [_vm._v(_vm._s(coatgood.nums))])])])])])
  })], 2)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "match-styles"
  }, [_c('span', [_vm._v("穿衣搭配")])])
}]}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "right-menu"
    }
  }, [_c('div', [_vm._v("\n\t\t淘宝精选\n\t")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://temai.taobao.com/cheap.htm?pid=mm_54988395_23866520_79878241",
      "target": "_blank"
    }
  }, [_vm._v("\n\t\t\t\t全部\n\t\t\t\t"), _c('br'), _vm._v("\n\t\t\t\t9块9\n\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://uland.taobao.com/coupon/list?pid=mm_54988395_23866520_79878241",
      "target": "_blank"
    }
  }, [_vm._v("\n\t\t\t\t专享\n\t\t\t\t"), _c('br'), _vm._v("\n\t\t\t\t优惠券\n\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://ju.taobao.com/jusp/nv/fcdppc/tp.htm?pid=mm_54988395_23866520_79878241",
      "target": "_blank"
    }
  }, [_vm._v("\n\t\t\t\t天天\n\t\t\t\t"), _c('br'), _vm._v("\n\t\t\t\t聚划算\n\t\t\t")])])])])
}]}

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

/*
  SlidesJS 3.0.4 http://slidesjs.com
  (c) 2013 by Nathan Searles http://nathansearles.com
  Updated: June 26th, 2013
  Apache License: http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){(function(e,t,n){var r,i,s;s="slidesjs";i={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}};r=function(){function t(t,n){this.element=t;this.options=e.extend(!0,{},i,n);this._defaults=i;this._name=s;this.init()}return t}();r.prototype.init=function(){var n,r,i,s,o,u,a=this;n=e(this.element);this.data=e.data(this);e.data(this,"animating",!1);e.data(this,"total",n.children().not(".slidesjs-navigation",n).length);e.data(this,"current",this.options.start-1);e.data(this,"vendorPrefix",this._getVendorPrefix());if(typeof TouchEvent!="undefined"){e.data(this,"touch",!0);this.options.effect.slide.speed=this.options.effect.slide.speed/2}n.css({overflow:"hidden"});n.slidesContainer=n.children().not(".slidesjs-navigation",n).wrapAll("<div class='slidesjs-container'>",n).parent().css({overflow:"hidden",position:"relative"});e(".slidesjs-container",n).wrapInner("<div class='slidesjs-control'>",n).children();e(".slidesjs-control",n).css({position:"relative",left:0});e(".slidesjs-control",n).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"});e.each(e(".slidesjs-control",n).children(),function(t){var n;n=e(this);return n.attr("slidesjs-index",t)});if(this.data.touch){e(".slidesjs-control",n).on("touchstart",function(e){return a._touchstart(e)});e(".slidesjs-control",n).on("touchmove",function(e){return a._touchmove(e)});e(".slidesjs-control",n).on("touchend",function(e){return a._touchend(e)})}n.fadeIn(0);this.update();this.data.touch&&this._setuptouch();e(".slidesjs-control",n).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return e(this).css({zIndex:10})});if(this.options.navigation.active){o=e("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(n);r=e("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(n)}e(".slidesjs-next",n).click(function(e){e.preventDefault();a.stop(!0);return a.next(a.options.navigation.effect)});e(".slidesjs-previous",n).click(function(e){e.preventDefault();a.stop(!0);return a.previous(a.options.navigation.effect)});if(this.options.play.active){s=e("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(n);u=e("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(n);s.click(function(e){e.preventDefault();return a.play(!0)});u.click(function(e){e.preventDefault();return a.stop(!0)});this.options.play.swap&&u.css({display:"none"})}if(this.options.pagination.active){i=e("<ul>",{"class":"slidesjs-pagination"}).appendTo(n);e.each(new Array(this.data.total),function(t){var n,r;n=e("<li>",{"class":"slidesjs-pagination-item"}).appendTo(i);r=e("<a>",{href:"#","data-slidesjs-item":t,html:t+1}).appendTo(n);return r.click(function(t){t.preventDefault();a.stop(!0);return a.goto(e(t.currentTarget).attr("data-slidesjs-item")*1+1)})})}e(t).bind("resize",function(){return a.update()});this._setActive();this.options.play.auto&&this.play();return this.options.callback.loaded(this.options.start)};r.prototype._setActive=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t>-1?t:this.data.current;e(".active",n).removeClass("active");return e(".slidesjs-pagination li:eq("+r+") a",n).addClass("active")};r.prototype.update=function(){var t,n,r;t=e(this.element);this.data=e.data(this);e(".slidesjs-control",t).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0});r=t.width();n=this.options.height/this.options.width*r;this.options.width=r;this.options.height=n;return e(".slidesjs-control, .slidesjs-container",t).css({width:r,height:n})};r.prototype.next=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","next");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.previous=function(t){var n;n=e(this.element);this.data=e.data(this);e.data(this,"direction","previous");t===void 0&&(t=this.options.navigation.effect);return t==="fade"?this._fade():this._slide()};r.prototype.goto=function(t){var n,r;n=e(this.element);this.data=e.data(this);r===void 0&&(r=this.options.pagination.effect);t>this.data.total?t=this.data.total:t<1&&(t=1);if(typeof t=="number")return r==="fade"?this._fade(t):this._slide(t);if(typeof t=="string"){if(t==="first")return r==="fade"?this._fade(0):this._slide(0);if(t==="last")return r==="fade"?this._fade(this.data.total):this._slide(this.data.total)}};r.prototype._setuptouch=function(){var t,n,r,i;t=e(this.element);this.data=e.data(this);i=e(".slidesjs-control",t);n=this.data.current+1;r=this.data.current-1;r<0&&(r=this.data.total-1);n>this.data.total-1&&(n=0);i.children(":eq("+n+")").css({display:"block",left:this.options.width});return i.children(":eq("+r+")").css({display:"block",left:-this.options.width})};r.prototype._touchstart=function(t){var n,r;n=e(this.element);this.data=e.data(this);r=t.originalEvent.touches[0];this._setuptouch();e.data(this,"touchtimer",Number(new Date));e.data(this,"touchstartx",r.pageX);e.data(this,"touchstarty",r.pageY);return t.stopPropagation()};r.prototype._touchend=function(t){var n,r,i,s,o,u,a,f=this;n=e(this.element);this.data=e.data(this);u=t.originalEvent.touches[0];s=e(".slidesjs-control",n);if(s.position().left>this.options.width*.5||s.position().left>this.options.width*.1&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","previous");this._slide()}else if(s.position().left<-(this.options.width*.5)||s.position().left<-(this.options.width*.1)&&Number(new Date)-this.data.touchtimer<250){e.data(this,"direction","next");this._slide()}else{i=this.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="translateX(0px)";s[0].style[r]=this.options.effect.slide.speed*.85+"ms"}s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){i=f.data.vendorPrefix;a=i+"Transform";r=i+"TransitionDuration";o=i+"TransitionTimingFunction";s[0].style[a]="";s[0].style[r]="";return s[0].style[o]=""});return t.stopPropagation()};r.prototype._touchmove=function(t){var n,r,i,s,o;n=e(this.element);this.data=e.data(this);s=t.originalEvent.touches[0];r=this.data.vendorPrefix;i=e(".slidesjs-control",n);o=r+"Transform";e.data(this,"scrolling",Math.abs(s.pageX-this.data.touchstartx)<Math.abs(s.pageY-this.data.touchstarty));if(!this.data.animating&&!this.data.scrolling){t.preventDefault();this._setuptouch();i[0].style[o]="translateX("+(s.pageX-this.data.touchstartx)+"px)"}return t.stopPropagation()};r.prototype.play=function(t){var n,r,i,s=this;n=e(this.element);this.data=e.data(this);if(!this.data.playInterval){if(t){r=this.data.current;this.data.direction="next";this.options.play.effect==="fade"?this._fade():this._slide()}e.data(this,"playInterval",setInterval(function(){r=s.data.current;s.data.direction="next";return s.options.play.effect==="fade"?s._fade():s._slide()},this.options.play.interval));i=e(".slidesjs-container",n);if(this.options.play.pauseOnHover){i.unbind();i.bind("mouseenter",function(){return s.stop()});i.bind("mouseleave",function(){return s.options.play.restartDelay?e.data(s,"restartDelay",setTimeout(function(){return s.play(!0)},s.options.play.restartDelay)):s.play()})}e.data(this,"playing",!0);e(".slidesjs-play",n).addClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-play",n).hide();return e(".slidesjs-stop",n).show()}}};r.prototype.stop=function(t){var n;n=e(this.element);this.data=e.data(this);clearInterval(this.data.playInterval);this.options.play.pauseOnHover&&t&&e(".slidesjs-container",n).unbind();e.data(this,"playInterval",null);e.data(this,"playing",!1);e(".slidesjs-play",n).removeClass("slidesjs-playing");if(this.options.play.swap){e(".slidesjs-stop",n).hide();return e(".slidesjs-play",n).show()}};r.prototype._slide=function(t){var n,r,i,s,o,u,a,f,l,c,h=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t>-1){t-=1;c=t>r?1:-1;i=t>r?-this.options.width:this.options.width;o=t}else{c=this.data.direction==="next"?1:-1;i=this.data.direction==="next"?-this.options.width:this.options.width;o=r+c}o===-1&&(o=this.data.total-1);o===this.data.total&&(o=0);this._setActive(o);a=e(".slidesjs-control",n);t>-1&&a.children(":not(:eq("+r+"))").css({display:"none",left:0,zIndex:0});a.children(":eq("+o+")").css({display:"block",left:c*this.options.width,zIndex:10});this.options.callback.start(r+1);if(this.data.vendorPrefix){u=this.data.vendorPrefix;l=u+"Transform";s=u+"TransitionDuration";f=u+"TransitionTimingFunction";a[0].style[l]="translateX("+i+"px)";a[0].style[s]=this.options.effect.slide.speed+"ms";return a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){a[0].style[l]="";a[0].style[s]="";a.children(":eq("+o+")").css({left:0});a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0});e.data(h,"current",o);e.data(h,"animating",!1);a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");a.children(":not(:eq("+o+"))").css({display:"none",left:0,zIndex:0});h.data.touch&&h._setuptouch();return h.options.callback.complete(o+1)})}return a.stop().animate({left:i},this.options.effect.slide.speed,function(){a.css({left:0});a.children(":eq("+o+")").css({left:0});return a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0},e.data(h,"current",o),e.data(h,"animating",!1),h.options.callback.complete(o+1))})}};r.prototype._fade=function(t){var n,r,i,s,o,u=this;n=e(this.element);this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1){e.data(this,"animating",!0);r=this.data.current;if(t){t-=1;o=t>r?1:-1;i=t}else{o=this.data.direction==="next"?1:-1;i=r+o}i===-1&&(i=this.data.total-1);i===this.data.total&&(i=0);this._setActive(i);s=e(".slidesjs-control",n);s.children(":eq("+i+")").css({display:"none",left:0,zIndex:10});this.options.callback.start(r+1);if(this.options.effect.fade.crossfade){s.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed);return s.children(":eq("+i+")").stop().fadeIn(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").css({zIndex:0});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}return s.children(":eq("+r+")").stop().fadeOut(this.options.effect.fade.speed,function(){s.children(":eq("+i+")").stop().fadeIn(u.options.effect.fade.speed,function(){return s.children(":eq("+i+")").css({zIndex:10})});e.data(u,"animating",!1);e.data(u,"current",i);return u.options.callback.complete(i+1)})}};r.prototype._getVendorPrefix=function(){var e,t,r,i,s;e=n.body||n.documentElement;r=e.style;i="transition";s=["Moz","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);t=0;while(t<s.length){if(typeof r[s[t]+i]=="string")return s[t];t++}return!1};return e.fn[s]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+s))return e.data(this,"plugin_"+s,new r(this,t))})}})(jQuery,window,document)}).call(this);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router__ = __webpack_require__(16);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




/* eslint-disable no-new */

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#app',
	router: __WEBPACK_IMPORTED_MODULE_2__router_router__["a" /* default */],
	template: '<App/>',
	components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })
],[75]);
//# sourceMappingURL=app.28bf9b96d0808cfc423a.js.map