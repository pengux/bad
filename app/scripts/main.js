/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var aside = querySelector('body > aside');
  var main = querySelector('body > main');
  var asideToggle = querySelector('.aside-toggle');
  var submenuToggle = querySelector('body > aside a[data-toggle=collapse-next]');

  function toggleAside() {
    aside.classList.toggle('collapsed');
    main.classList.toggle('no-aside');
  }

  function toggleSubmenu(ev) {
    // Change chevron
    var submenu = ev.target.nextElementSibling;
    var chevron;
    submenu.classList.toggle('in');
    if(submenu.classList.contains('in')) {
      chevron = ev.target.querySelector('.fa-chevron-right');
      chevron.classList.remove('fa-chevron-right');
      chevron.classList.add('fa-chevron-down');
    } else {
      chevron = ev.target.querySelector('.fa-chevron-down');
      chevron.classList.remove('fa-chevron-down');
      chevron.classList.add('fa-chevron-right');
    }
  }

  asideToggle.addEventListener('click', toggleAside);
  submenuToggle.addEventListener('click', toggleSubmenu);

  // var body = document.body;
  // var appbarElement = querySelector('.app-bar');
  // var menuBtn = querySelector('.menu');
  // var main = querySelector('main');

  // function closeMenu() {
  //   body.classList.remove('open');
  //   appbarElement.classList.remove('open');
  //   navdrawerContainer.classList.remove('open');
  // }

  // function toggleMenu() {
  //   body.classList.toggle('open');
  //   appbarElement.classList.toggle('open');
  //   navdrawerContainer.classList.toggle('open');
  //   navdrawerContainer.classList.add('opened');
  // }

  // main.addEventListener('click', closeMenu);
  // menuBtn.addEventListener('click', toggleMenu);
  // navdrawerContainer.addEventListener('click', function (event) {
  //   if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
  //     closeMenu();
  //   }
  // });
})();
