import { CURRENT_VIDEO, FEATURE_VIDEO } from "./courseConstants"

export const setFeatureVideo = video => {
  return {
    type: FEATURE_VIDEO,
    payload: {
      video,
    },
  }
}

export const setVideo = video => {
  return {
    type: CURRENT_VIDEO,
    payload: {
      video,
    },
  }
}
