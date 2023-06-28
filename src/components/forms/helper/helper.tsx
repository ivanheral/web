import React from 'react'

interface iHelper {
  helper: string
}

const Helper = (props: iHelper): JSX.Element => {
  const { helper } = props
  return <>{helper ? <p className="text-xs text-gray-500">{helper}</p> : null}</>
}

export default Helper
