import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ title }) => (
  <Helmet title={title}>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </Helmet>
)