(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{7994:function(){},6995:function(e,t,n){var i,o,r;o=[t,n(8532)],void 0===(r="function"===typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(t);function i(e){return e&&e.__esModule?e:{default:e}}e.default=n.default})?i.apply(t,o):i)||(e.exports=r)},8532:function(e,t,n){var i,o,r;o=[t,n(7294),n(5697)],void 0===(r="function"===typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=d;var i=r(t),o=r(n);function r(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function a(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=!1;function d(e){f=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){d(!0)}}))}catch(y){}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return f?e:e.capture}function m(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var v=function(e){function t(){var e;u(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return r._handleSwipeStart=r._handleSwipeStart.bind(r),r._handleSwipeMove=r._handleSwipeMove.bind(r),r._handleSwipeEnd=r._handleSwipeEnd.bind(r),r._onMouseDown=r._onMouseDown.bind(r),r._onMouseMove=r._onMouseMove.bind(r),r._onMouseUp=r._onMouseUp.bind(r),r._setSwiperRef=r._setSwiperRef.bind(r),r}return p(t,e),l(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=m(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=m(e),n=t.x,i=t.y,o=n-this.moveStart.x,r=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:o,y:r},e)&&e.cancelable&&e.preventDefault(),this.movePosition={deltaX:o,deltaY:r}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,o=e.children,r=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,a(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return i.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},r),o)}}]),t}(t.Component);v.displayName="ReactSwipe",v.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},v.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=v})?i.apply(t,o):i)||(e.exports=r)},2751:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e,t,n){var i=0===e?e:e+t;return"translate3d"+("("+("horizontal"===n?[i,0,0]:[0,i,0]).join(",")+")")}},6632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),o=p(n(3935)),r=p(n(6995)),s=p(n(5702)),a=p(n(2751)),u=p(n(5040)),l=p(n(6513)),c=p(n(885));function p(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(){},E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(d,e);var t,n,p,f=b(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),O(g(t=f.call(this,e)),"thumbsRef",void 0),O(g(t),"carouselWrapperRef",void 0),O(g(t),"listRef",void 0),O(g(t),"itemsRef",void 0),O(g(t),"timer",void 0),O(g(t),"setThumbsRef",(function(e){t.thumbsRef=e})),O(g(t),"setCarouselWrapperRef",(function(e){t.carouselWrapperRef=e})),O(g(t),"setListRef",(function(e){t.listRef=e})),O(g(t),"setItemsRef",(function(e,n){t.itemsRef||(t.itemsRef=[]),t.itemsRef[n]=e})),O(g(t),"autoPlay",(function(){i.Children.count(t.props.children)<=1||(t.clearAutoPlay(),t.timer=setTimeout((function(){t.increment()}),t.props.interval))})),O(g(t),"clearAutoPlay",(function(){t.timer&&clearTimeout(t.timer)})),O(g(t),"resetAutoPlay",(function(){t.clearAutoPlay(),t.autoPlay()})),O(g(t),"stopOnHover",(function(){t.setState({isMouseEntered:!0},t.clearAutoPlay)})),O(g(t),"startOnLeave",(function(){t.setState({isMouseEntered:!1},t.autoPlay)})),O(g(t),"isFocusWithinTheCarousel",(function(){return!!t.carouselWrapperRef&&!((0,l.default)().activeElement!==t.carouselWrapperRef&&!t.carouselWrapperRef.contains((0,l.default)().activeElement))})),O(g(t),"navigateWithKeyboard",(function(e){if(t.isFocusWithinTheCarousel()){var n="horizontal"===t.props.axis,i=n?37:38;(n?39:40)===e.keyCode?t.increment():i===e.keyCode&&t.decrement()}})),O(g(t),"updateSizes",(function(){if(t.state.initialized&&t.itemsRef&&0!==t.itemsRef.length){var e="horizontal"===t.props.axis,n=t.itemsRef[0];if(n){var i=e?n.clientWidth:n.clientHeight;t.setState({itemSize:i}),t.thumbsRef&&t.thumbsRef.updateSizes()}}})),O(g(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),O(g(t),"handleClickItem",(function(e,n){0!==i.Children.count(t.props.children)&&(t.state.cancelClick?t.setState({cancelClick:!1}):(t.props.onClickItem(e,n),e!==t.state.selectedItem&&t.setState({selectedItem:e})))})),O(g(t),"handleOnChange",(function(e,n){i.Children.count(t.props.children)<=1||t.props.onChange(e,n)})),O(g(t),"handleClickThumb",(function(e,n){t.props.onClickThumb(e,n),t.moveTo(e)})),O(g(t),"onSwipeStart",(function(e){t.setState({swiping:!0}),t.props.onSwipeStart(e),t.clearAutoPlay()})),O(g(t),"onSwipeEnd",(function(e){t.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),t.props.onSwipeEnd(e),t.autoPlay()})),O(g(t),"onSwipeMove",(function(e,n){t.props.onSwipeMove(n);var o="horizontal"===t.props.axis,r=i.Children.count(t.props.children),s=t.getPosition(t.state.selectedItem),a=t.props.infiniteLoop?t.getPosition(r-1)-100:t.getPosition(r-1),u=o?e.x:e.y,l=u;0===s&&u>0&&(l=0),s===a&&u<0&&(l=0);var c=s+100/(t.state.itemSize/l),p=Math.abs(u)>t.props.swipeScrollTolerance;return t.props.infiniteLoop&&p&&(0===t.state.selectedItem&&c>-100?c-=100*r:t.state.selectedItem===r-1&&c<100*-r&&(c+=100*r)),(!t.props.preventMovementUntilSwipeScrollTolerance||p||t.state.swipeMovementStarted)&&(t.state.swipeMovementStarted||t.setState({swipeMovementStarted:!0}),t.setPosition(c)),p&&!t.state.cancelClick&&t.setState({cancelClick:!0}),p})),O(g(t),"setPosition",(function(e,n){var i=o.default.findDOMNode(t.listRef);i instanceof HTMLElement&&(["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(n){i.style[n]=(0,a.default)(e,"%",t.props.axis)})),n&&i.offsetLeft)})),O(g(t),"resetPosition",(function(){var e=t.getPosition(t.state.selectedItem);t.setPosition(e)})),O(g(t),"decrement",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem-("number"===typeof e?e:1),n)})),O(g(t),"increment",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem+("number"===typeof e?e:1),n)})),O(g(t),"moveTo",(function(e,n){if("number"===typeof e){var o=i.Children.count(t.props.children)-1,r=t.props.infiniteLoop&&!n&&(e<0||e>o),s=e;e<0&&(e=t.props.infiniteLoop?o:0),e>o&&(e=t.props.infiniteLoop?0:o),r?t.setState({swiping:!0},(function(){s<0?t.props.centerMode&&t.props.centerSlidePercentage&&"horizontal"===t.props.axis?t.setPosition(-(o+2)*t.props.centerSlidePercentage-(100-t.props.centerSlidePercentage)/2,!0):t.setPosition(100*-(o+2),!0):s>o&&t.setPosition(0,!0),t.selectItem({selectedItem:e,swiping:!1})})):t.selectItem({selectedItem:e}),t.state.autoPlay&&!1===t.state.isMouseEntered&&t.resetAutoPlay()}})),O(g(t),"onClickNext",(function(){t.increment(1,!1)})),O(g(t),"onClickPrev",(function(){t.decrement(1,!1)})),O(g(t),"onSwipeForward",(function(){t.increment(1,!0),t.props.emulateTouch&&t.setState({cancelClick:!0})})),O(g(t),"onSwipeBackwards",(function(){t.decrement(1,!0),t.props.emulateTouch&&t.setState({cancelClick:!0})})),O(g(t),"changeItem",(function(e){return function(n){(function(e){return!!e&&e.hasOwnProperty("key")})(n)&&"Enter"!==n.key||t.moveTo(e)}})),O(g(t),"selectItem",(function(e,n){t.setState(e,n),t.handleOnChange(e.selectedItem,i.Children.toArray(t.props.children)[e.selectedItem])})),O(g(t),"getInitialImage",(function(){var e=t.props.selectedItem,n=t.itemsRef&&t.itemsRef[e];return(n&&n.getElementsByTagName("img")||[])[0]})),O(g(t),"getVariableItemHeight",(function(e){var n=t.itemsRef&&t.itemsRef[e];if(t.state.hasMount&&n&&n.children.length){var i=n.children[0].getElementsByTagName("img")||[];if(i.length>0){var o=i[0];if(!o.complete){o.addEventListener("load",(function e(){t.forceUpdate(),o.removeEventListener("load",e)}))}}var r=(i[0]||n.children[0]).clientHeight;return r>0?r:null}return null})),t.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1},t}return t=d,(n=[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),!e.autoFocus&&this.props.autoFocus&&this.forceFocus(),t.swiping&&!this.state.swiping&&this.resetPosition(),e.selectedItem===this.props.selectedItem&&e.centerMode===this.props.centerMode||(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&i.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},(function(){var t=e.getInitialImage();t&&!t.complete?t.addEventListener("load",e.setMountState):e.setMountState()}))}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,c.default)().addEventListener("resize",this.updateSizes),(0,c.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,l.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,c.default)().removeEventListener("resize",this.updateSizes),(0,c.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,l.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var e;null===(e=this.carouselWrapperRef)||void 0===e||e.focus()}},{key:"getPosition",value:function(e){if(this.props.infiniteLoop&&++e,0===e)return 0;var t=i.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,o=t-1;return e&&(e!==o||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===o&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return this.props.children?i.Children.map(this.props.children,(function(n,o){var r={ref:function(e){return t.setItemsRef(e,o)},key:"itemKey"+o+(e?"clone":""),className:s.default.ITEM(!0,o===t.state.selectedItem),onClick:t.handleClickItem.bind(t,o,n)},a={};return t.props.centerMode&&"horizontal"===t.props.axis&&(a.style={minWidth:t.props.centerSlidePercentage+"%"}),i.default.createElement("li",v({},r,a),t.props.renderItem(n,{isSelected:o===t.state.selectedItem}))})):[]}},{key:"renderControls",value:function(){var e=this,t=this.props,n=t.showIndicators,o=t.labels,r=t.renderIndicator,s=t.children;return n?i.default.createElement("ul",{className:"control-dots"},i.Children.map(s,(function(t,n){return r&&r(e.changeItem(n),n===e.state.selectedItem,n,o.item)}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?i.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,i.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&this.props.children&&0!==i.Children.count(this.props.children)?i.default.createElement(u.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels},this.props.renderThumbs(this.props.children)):null}},{key:"render",value:function(){var e=this;if(!this.props.children||0===i.Children.count(this.props.children))return null;var t=this.props.swipeable&&i.Children.count(this.props.children)>1,n="horizontal"===this.props.axis,o=this.props.showArrows&&i.Children.count(this.props.children)>1,u=o&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,l=o&&(this.state.selectedItem<i.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,c={},p=this.getPosition(this.state.selectedItem),f=(0,a.default)(p,"%",this.props.axis),d=this.props.transitionTime+"ms";c={WebkitTransform:f,MozTransform:f,MsTransform:f,OTransform:f,transform:f,msTransform:f},this.state.swiping||(c=m(m({},c),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,MsTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d}));var h=this.renderItems(!0),y=h.shift(),w=h.pop(),b={className:s.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,tolerance:this.props.swipeScrollTolerance},S={};if(n){if(b.onSwipeLeft=this.onSwipeForward,b.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var g=this.getVariableItemHeight(this.state.selectedItem);b.style.height=g||"auto",S.height=g||"auto"}}else b.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,b.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,b.style.height=this.state.itemSize,S.height=this.state.itemSize;return i.default.createElement("div",{className:s.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:0},i.default.createElement("div",{className:s.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,u,this.props.labels.leftArrow),i.default.createElement("div",{className:s.default.WRAPPER(!0,this.props.axis),style:S},t?i.default.createElement(r.default,v({tagName:"ul",innerRef:this.setListRef},b,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&w,this.renderItems(),this.props.infiniteLoop&&y):i.default.createElement("ul",{className:s.default.SLIDER(!0,this.state.swiping),ref:function(t){return e.setListRef(t)},style:c},this.props.infiniteLoop&&w,this.renderItems(),this.props.infiniteLoop&&y)),this.props.renderArrowNext(this.onClickNext,l,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}])&&y(t.prototype,n),p&&y(t,p),d}(i.default.Component);t.default=E,O(E,"displayName","Carousel"),O(E,"defaultProps",{axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:R,onClickThumb:R,onChange:R,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(e,t,n){return i.default.createElement("button",{type:"button","aria-label":n,className:s.default.ARROW_PREV(!t),onClick:e})},renderArrowNext:function(e,t,n){return i.default.createElement("button",{type:"button","aria-label":n,className:s.default.ARROW_NEXT(!t),onClick:e})},renderIndicator:function(e,t,n,o){return i.default.createElement("li",{className:s.default.DOT(t),onClick:e,onKeyDown:e,value:n,key:n,role:"button",tabIndex:0,"aria-label":"".concat(o," ").concat(n+1)})},renderItem:function(e){return e},renderThumbs:function(e){var t=i.Children.map(e,(function(e){var t=e;if("img"!==e.type&&(t=i.Children.toArray(e.props.children).find((function(e){return"img"===e.type}))),t)return t}));return 0===t.filter((function(e){return e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):t},statusFormatter:function(e,t){return"".concat(e," of ").concat(t)},selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%"})},629:function(){},5040:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),o=l(n(5702)),r=n(4528),s=l(n(2751)),a=l(n(6995)),u=l(n(885));function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(p,e);var t,n,l,c=m(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),b(y(t=c.call(this,e)),"itemsWrapperRef",void 0),b(y(t),"itemsListRef",void 0),b(y(t),"thumbsRef",void 0),b(y(t),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),b(y(t),"setItemsListRef",(function(e){t.itemsListRef=e})),b(y(t),"setThumbsRef",(function(e,n){t.thumbsRef||(t.thumbsRef=[]),t.thumbsRef[n]=e})),b(y(t),"updateSizes",(function(){if(t.props.children&&t.itemsWrapperRef&&t.thumbsRef){var e=i.Children.count(t.props.children),n=t.itemsWrapperRef.clientWidth,o=t.props.thumbWidth?t.props.thumbWidth:(0,r.outerWidth)(t.thumbsRef[0]),s=Math.floor(n/o),a=s<e,u=a?e-s:0;t.setState((function(e,n){return{itemSize:o,visibleItems:s,firstItem:a?t.getFirstItem(n.selectedItem):0,lastPosition:u,showArrows:a}}))}})),b(y(t),"handleClickItem",(function(e,n,i){if(!function(e){return e.hasOwnProperty("key")}(i)||"Enter"===i.key){var o=t.props.onSelectItem;"function"===typeof o&&o(e,n)}})),b(y(t),"onSwipeStart",(function(){t.setState({swiping:!0})})),b(y(t),"onSwipeEnd",(function(){t.setState({swiping:!1})})),b(y(t),"onSwipeMove",(function(e){var n=e.x;if(!t.state.itemSize||!t.itemsWrapperRef||!t.state.visibleItems)return!1;var o=i.Children.count(t.props.children),r=-100*t.state.firstItem/t.state.visibleItems;0===r&&n>0&&(n=0),r===100*-Math.max(o-t.state.visibleItems,0)/t.state.visibleItems&&n<0&&(n=0);var a=r+100/(t.itemsWrapperRef.clientWidth/n);return t.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(e){t.itemsListRef.style[e]=(0,s.default)(a,"%",t.props.axis)})),!0})),b(y(t),"slideRight",(function(e){t.moveTo(t.state.firstItem-("number"===typeof e?e:1))})),b(y(t),"slideLeft",(function(e){t.moveTo(t.state.firstItem+("number"===typeof e?e:1))})),b(y(t),"moveTo",(function(e){e=(e=e<0?0:e)>=t.state.lastPosition?t.state.lastPosition:e,t.setState({firstItem:e})})),t.state={selectedItem:e.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},t}return t=p,(n=[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,u.default)().addEventListener("resize",this.updateSizes),(0,u.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,u.default)().removeEventListener("resize",this.updateSizes),(0,u.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.props.children.map((function(t,n){var r=o.default.ITEM(!1,n===e.state.selectedItem),s={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:r,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":"".concat(e.props.labels.item," ").concat(n+1),style:{width:e.props.thumbWidth}};return i.default.createElement("li",f({},s,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var t,n=i.Children.count(this.props.children)>1,r=this.state.showArrows&&this.state.firstItem>0,u=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,l=-this.state.firstItem*(this.state.itemSize||0),c=(0,s.default)(l,"px",this.props.axis),p=this.props.transitionTime+"ms";return t={WebkitTransform:c,MozTransform:c,MsTransform:c,OTransform:c,transform:c,msTransform:c,WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p},i.default.createElement("div",{className:o.default.CAROUSEL(!1)},i.default.createElement("div",{className:o.default.WRAPPER(!1),ref:this.setItemsWrapperRef},i.default.createElement("button",{type:"button",className:o.default.ARROW_PREV(!r),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),n?i.default.createElement(a.default,{tagName:"ul",className:o.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:t,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):i.default.createElement("ul",{className:o.default.SLIDER(!1,this.state.swiping),ref:function(t){return e.setItemsListRef(t)},style:t},this.renderItems()),i.default.createElement("button",{type:"button",className:o.default.ARROW_NEXT(!u),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}])&&d(t.prototype,n),l&&d(t,l),p}(i.Component);t.default=S,b(S,"displayName","Thumbs"),b(S,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350})},5702:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(4184))&&i.__esModule?i:{default:i};var r={ROOT:function(e){return(0,o.default)(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,o.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,o.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,o.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t,n){return(0,o.default)({thumb:!e,slide:e,selected:t,previous:n})},ARROW_PREV:function(e){return(0,o.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,o.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,o.default)({dot:!0,selected:e})}};t.default=r},4528:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.outerWidth=void 0;t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},615:function(e,t,n){"use strict";Object.defineProperty(t,"lr",{enumerable:!0,get:function(){return i.default}});var i=s(n(6632)),o=n(629),r=s(n(5040));function s(e){return e&&e.__esModule?e:{default:e}}},6513:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return document}},885:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return window}}}]);