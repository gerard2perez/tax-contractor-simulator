import { useState } from 'react'

function useFooterNav (index: number) {
  const [pageIndex, setPageIndex] = useState(index)
  const handleOnChange = (_event, value) => setPageIndex(value)
  type Props = {
    Element: () => any
  }
  let id = 0
  function NavItem ({ Element: NavItemElement }: Props) {
    const current = id
    console.log({ current })
    id++
    if (current === pageIndex) {
      return <NavItemElement/>
    } else {
      return null
    }
    // }
  }
  return {
    pageIndex,
    NavItem,
    handleOnChange
  }
}

export default useFooterNav
