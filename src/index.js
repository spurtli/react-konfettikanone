import React from "react"
import {css} from "emotion"
import classNames from "classnames"

const styles = css`
  color: hotpink;
`

export function Confetti({children, className, ...props}) {
  const mergedClass = classNames(styles, className)

  return (
    <div className={mergedClass} {...props}>
      {children}
    </div>
  )
}
