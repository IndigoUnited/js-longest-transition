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
