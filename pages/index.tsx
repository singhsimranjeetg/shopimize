import { Heading, Page } from "@shopify/polaris";
import { connect } from "react-redux";
import { setInfo } from '../redux/overview/overview.actions'
import { createStructuredSelector } from 'reselect'
import { selectAppName } from '../redux/overview/overview.selectors'

const Index = (prop: { appName: string }) => {


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
