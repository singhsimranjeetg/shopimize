//import { getLCP, getFID, getCLS } from 'web-vitals';

const _ = require("underscore");
/*import { connect } from "react-redux";
import { setVitals } from "../../redux/web-vitals/web-vitals.actions"*/





/*
Copyright 2020 Google Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const webVitalsExt = () => {
    // const src = chrome.runtime.getURL('node_modules/web-vitals/dist/web-vitals.es5.min.js');

    /*  getCLS(console.log);
      getFID(console.log);
      getLCP(console.log);*/

    const webVitals = require('web-vitals')
    let latestCLS = {};

    // Core Web Vitals thresholds
    const LCP_THRESHOLD = 2500;
    const FID_THRESHOLD = 100;
    const CLS_THRESHOLD = 0.1;


    // CLS update frequency
    const DEBOUNCE_DELAY = 500;

    // Registry for badge metrics
    const badgeMetrics = {
        lcp: {
            value: 0,
            final: false,
            pass: true,
        },
        cls: {
            value: 0,
            final: false,
            pass: true,
        },
        fid: {
            value: 0,
            final: false,
            pass: true,
        },
    };

    console.log("vitals", badgeMetrics)



    /**
      * Very simple classifier for metrics values
      * @param  {Object} metrics
      * @return {String} overall metrics score
    */
    function scoreBadgeMetrics(metrics) {
        // Note: overallScore is treated as a string rather than
        // a boolean to give us the flexibility of introducing a
        // 'NEEDS IMPROVEMENT' option here in the future.
        let overallScore = 'GOOD';
        if (metrics.lcp.value > LCP_THRESHOLD) {
            overallScore = 'POOR';
            metrics.lcp.pass = false;
        }
        if (metrics.fid.value > FID_THRESHOLD) {
            overallScore = 'POOR';
            metrics.fid.pass = false;
        }
        if (metrics.cls.value > CLS_THRESHOLD) {
            overallScore = 'POOR';
            metrics.cls.pass = false;
        }
        return overallScore;
    }



    /**
   * Return a short (host) and full URL for the measured page
   * @return {Object}
   */
    function getURL() {
        const url = document.location.href;
        const shortURL = document.location.origin;
        return { shortURL, url };
    }

    /**
     * Return a short timestamp (HH:MM:SS) for current time
     * @return {String}
     */
    function getTimestamp() {
        const date = new Date();
        return date.toLocaleTimeString('en-US', { hourCycle: 'h23' });
    }


    /**
       *
       * Broadcasts metrics updates using chrome.runtime(), triggering
       * updates to the badge. Will also update the overlay if this option
       * is enabled.
       * @param {String} metricName
       * @param {Object} body
       */
    function broadcastMetricsUpdates(metricName, body) {
        if (metricName === undefined || badgeMetrics === undefined) {
            return;
        }
        badgeMetrics[metricName].value = body.value;
        badgeMetrics[metricName].final = body.isFinal;
        badgeMetrics.location = getURL();
        badgeMetrics.timestamp = getTimestamp();
        const passes = scoreBadgeMetrics(badgeMetrics);
        // Broadcast metrics updates for badging
        /*   chrome.runtime.sendMessage(
               {
                   passesAllThresholds: passes,
                   metrics: badgeMetrics,
               },
               (response) => drawOverlay(badgeMetrics, response.tabId), // TODO: Once the metrics are final, cache locally.
           );*/
    }

    /**
     * Broadcasts the latest CLS value
     */
    function broadcastCLS() {
        broadcastMetricsUpdates('cls', latestCLS);
    }

    /**
   * Debounces the broadcast of CLS values for stability.
   * broadcastCLS is invoked on the trailing edge of the
   * DEBOUNCE_DELAY timeout if invoked more than once during
   * the wait timeout.
   */
    let debouncedCLSBroadcast = () => { };
    if (_ !== undefined) {
        debouncedCLSBroadcast = _.debounce(broadcastCLS, DEBOUNCE_DELAY, {
            leading: true,
            trailing: true,
            maxWait: 1000
        });
    }
    /**
   *
   * Fetches Web Vitals metrics via WebVitals.js
   */
    function fetchWebPerfMetrics() {
        // web-vitals.js doesn't have a way to remove previous listeners, so we'll save whether
        // we've already installed the listeners before installing them again.
        // See https://github.com/GoogleChrome/web-vitals/issues/55.
        if (self._hasInstalledPerfMetrics) return;
        self._hasInstalledPerfMetrics = true;

        webVitals.getCLS((metric) => {
            // As CLS values can fire frequently in the case
            // of animations or highly-dynamic content, we
            // debounce the broadcast of the metric.
            latestCLS = metric;
            debouncedCLSBroadcast();
        }, true);
        webVitals.getLCP((metric) => {
            broadcastMetricsUpdates('lcp', metric);
        }, true);
        webVitals.getFID((metric) => {
            broadcastMetricsUpdates('fid', metric);
        }, true);
    }
    fetchWebPerfMetrics();


};
/*
const mapDispatchToProps = dispatch => ({

    setWebVitals: metrics => dispatch(setVitals(metrics)),
connect(null, mapDispatchToProps)
})*/



export default webVitalsExt;