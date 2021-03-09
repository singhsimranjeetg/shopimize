import { useEffect } from 'react'
import { Heading, Page } from "@shopify/polaris";
import { connect } from "react-redux";
import { setInfo } from '../redux/overview/overview.actions'
import { createStructuredSelector } from 'reselect'
import { selectAppName } from '../redux/overview/overview.selectors'
//import { getThemes } from '../server/rest-api/index'

const Index = (prop: { appName: string }) => {

  /* useEffect(() => {
     const WV: string = 'hi'
     console.log("WV", WV)
     const themes = getThemes()
     console.log(themes)
   }, [])
 */

  return (
    <Page>
      <Heading>{prop.appName}</Heading>
    </Page>
  );
}

const mapStateToProps = createStructuredSelector({
  appName: selectAppName
})

const mapDispatchToProps = {
  setInfo: setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
