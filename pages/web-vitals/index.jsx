import webVitalsExt from './web-vitals-ext';
//import { getLCP, getFID, getCLS } from 'web-vitals';
import { useEffect } from "react";
import {
  Card,
  Link
} from "@shopify/polaris";

const WebVitals = () => {


  // const [title, setTitle] = useState<string | null>("Core Web Vitals");

  useEffect(() => {
    const WV = webVitalsExt()
    console.log("WV", WV)
  })


  return (
    <div>
      <Card
        title="Essential user experience metrics for a healthy store"
        sectioned
      >
        <p>
          Optimizing quality of user experience is critical to the success of
        every storefront.{" "}
          <Link
            url="https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html"
            external={true}
            monochrome={true}
          >
            Core Web Vitals
        </Link>{" "}
        are a set of metrics and thresholds that capture the core user
        experience needs of fast loading experience, interactivity, and visual
        stability.
      </p>
        <br />
        <p>
          Core Web Vitals are part of the upcoming{" "}
          <Link
            url="https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html"
            external={true}
            monochrome={true}
          >
            page experience signal
        </Link>{" "}
        for Google Search, are widely available across popular Google web
        developer tools, and can be tracked by every site owner both in{" "}
          <Link
            url="https://web.dev/vitals-tools/"
            external={true}
            monochrome={true}
          >
            development and in production
        </Link>
        </p>

      </Card>
    </div>
  )
};

export default WebVitals;