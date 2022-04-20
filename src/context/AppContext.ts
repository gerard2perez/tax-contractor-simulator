import React from 'react'
import { ApplicationContext } from '../hooks/useInitialState'

const AppContext = React.createContext<ApplicationContext>({} as any)

export default AppContext
