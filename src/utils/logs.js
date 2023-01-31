import debug from 'debug'

export const serverLog = debug('app:server')
export const dbLog = debug('app:db')
export const serviceLog = debug('app:services')
export const routeLog = debug('app:routes')
