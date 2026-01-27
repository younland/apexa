import color from 'color'

export interface ColorMapType {
  color: string
  bgColor: string
}

export type HttpType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'

export const MethodColorMap: Record<HttpType, string> = {
  GET: '#1EC79D',
  POST: '#FF6600',
  PUT: '#4167F0',
  DELETE: '#E63415',
  OPTIONS: '#409EFF'
}

export interface HttpOptions {
  label: string
  value: HttpType
  color: string
  bgColor?: string
}

export const transformBgColor = (col: string, alpha: number = 0.3, lighten: number = 0.5) => {
  return color(col).alpha(alpha).lighten(lighten).string()
}

export const transformHttpOptions = (): HttpOptions[] => {
  return _.map(MethodColorMap, (v, k) => {
    return {
      label: k,
      value: k,
      color: v,
      bgColor: transformBgColor(v)
    } as HttpOptions
  })
}
