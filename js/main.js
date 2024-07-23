import {handleGridScrolling, handleWorkFilters, loadWorks} from './works.js?v1.1';
import {hideIndicatorOnScroll} from './scroll-indicator.js?v1.1';

loadWorks();
hideIndicatorOnScroll();
handleWorkFilters();
handleGridScrolling();