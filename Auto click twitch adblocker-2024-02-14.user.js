// ==UserScript==
// @name         Auto click twitch adblocker
// @namespace    http://tampermonkey.net/
// @version      2024-02-14
// @description  Auto clicker closing the twitch adblokcer pop-up for support
// @author       SEB
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clickCrossBtn() {
        var crossBtn = document.getElementById('cross_btn');
        if (crossBtn) {
            crossBtn.click(); // Clique sur l'élément s'il est trouvé
        } else {
            console.log("L'élément avec l'ID 'cross_btn' n'a pas été trouvé.");
        }
    }

    function addHiddenStyle() {
        var crossBtn = document.getElementById('twtvdonate');
        crossBtn.setAttribute("style", "display: none;");
        console.log("addHiddenStyle");
    }

    clickCrossBtn();

    window.addEventListener('load', function() {
        console.log("load");
        clickCrossBtn();
        addHiddenStyle();
    });

    window.addEventListener('popstate', function() {
        console.log("popstate");
        clickCrossBtn();
        addHiddenStyle();
    });
})();