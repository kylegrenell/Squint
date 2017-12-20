import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import Instagram from './modules/InstagramFeed';
import LoadModal from './modules/LoadModal';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".footer-wrapper"), "85%");
new RevealOnScroll($(".squint-logo-image"), "90%");

console.log("%c Psst, if you're seeing this, check back from time to time for secret discounts... This is our 'Easter Egg' section :)", "background: #ffc6df; color: #9c8ac1");