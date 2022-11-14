import Vue from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

Vue.mixin({
  created: function () {
    this.gsap = gsap;
    this.splitText = SplitText;
    this.scrollTrigger = ScrollTrigger;
  }
});
