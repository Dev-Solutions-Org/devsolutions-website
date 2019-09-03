import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import NextLink from 'next/link'

const NextComposed = forwardRef(function NextComposed (props, ref) {
  const { asHref, href, prefetch, ...other } = props

  return (
    <NextLink href={href} as={asHref}>
      <a ref={ref} rel='alternate' hrefLang='en' {...other} />
    </NextLink>
  )
})

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool
}

function Link (props) {
  const {
    router,
    innerRef,
    naked,
    ...other
  } = props

  return <NextComposed ref={innerRef} {...other} />
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

const RouterLink = withRouter(Link)

export default forwardRef((props, ref) => <RouterLink {...props} innerRef={ref} />)
