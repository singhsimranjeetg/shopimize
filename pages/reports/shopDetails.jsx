import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'


import { Card, TextStyle } from '@shopify/polaris'



const GET_PRODUCT_BY_ID = gql`
query {
  shop {
  name
  myshopifyDomain
  email
    plan {
      displayName
      partnerDevelopment
      shopifyPlus
    }
  }
}
`

const ShopDetails = () => {


  return (
    <Query query={GET_PRODUCT_BY_ID} >
      {

        ({ data, loading }) => {

          if (loading) return <div>Loading…</div>;
          console.log(data)

          return (
            <Card>
              <TextStyle>Shop: {data.shop.name}</TextStyle><br></br>
              <TextStyle>Plan: {data.shop.plan.displayName}</TextStyle><br></br>
            </Card>
          )
        }}

    </Query>
  )
}

export default ShopDetails;