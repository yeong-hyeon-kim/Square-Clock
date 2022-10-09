import { combineReducers } from 'redux';
import Clock from './Clock';

// 루트 리듀서 내보내기
const rootReducer = combineReducers({
    Clock
});
export default rootReducer;

// 루트 리듀서의 반환값를 유추합니다.
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;