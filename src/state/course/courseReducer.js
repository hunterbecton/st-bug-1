import { createReducer } from "../../common/util/reducerUtils"
import { CURRENT_VIDEO, FEATURE_VIDEO } from "./courseConstants"

const initialState = {
  currentVideo: "",
  playing: false,
}

const setFeatureVideo = (state, payload) => ({
  ...state,
  currentVideo: payload.video,
  playing: false,
})

const setVideo = (state, payload) => ({
  ...state,
  currentVideo: payload.video,
  playing: true,
})

export default createReducer(initialState, {
  [CURRENT_VIDEO]: setVideo,
  [FEATURE_VIDEO]: setFeatureVideo,
})
