(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.longestTransition = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function __readTransitions(el) {
    var styles = getComputedStyle(el);
    var properties = styles.transitionProperty.replace(' ', '').split(',');
    var durations = styles.transitionDuration.replace(' ', '').split(',').map(_parseFloat);
    var delays = styles.transitionDelay.replace(' ', '').split(',').map(_parseFloat);

    return properties.map(function __handleMapProperties(prop, i) {
        return {
            property: prop,
            duration: Math.ceil((durations[i] || durations[0] || 0) * 1000),
            delay: Math.ceil((delays[i] || delays[0] || 0) * 1000),
        };
    });
}

function longestTransition(el) {
    var longest = __readTransitions(el).reduce(function __handleReduceTransitions(prev, curr) {
        if (!prev) {
            return curr;
        }

        return prev.duration + prev.delay >= curr.duration + curr.delay ? prev : curr;
    }, null);

    return longest;
}

function _parseFloat(x) {
    return parseFloat(x, 10);
}

module.exports = longestTransition;

},{}]},{},[1])(1)
});