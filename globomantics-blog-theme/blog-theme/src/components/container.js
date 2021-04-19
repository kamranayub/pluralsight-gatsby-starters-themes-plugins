import React from 'react'

export default ({ children, ...props }) => (
  <div style={{ maxWidth: 1180, margin: '0 auto' }} {...props}>{children}</div>
)
