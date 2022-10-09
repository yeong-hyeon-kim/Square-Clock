const TIMES = "clock/TIMES" as const;
const REFRESH = "clock/REFRESH" as const;

/* 액션 함수 */
export const times = () => ({
  type: TIMES,
});

export const refresh = () => ({
  type: REFRESH,
});

/* 모든 액션 객체 타입 정의 */
type ClockAction = ReturnType<typeof times> | ReturnType<typeof refresh>;

/* 이 리덕스 모듈에서 과리 할 상태의 타입을 선업합니다. */
type ClockStateType = {
  time: string;
};

/* 상태를 초기화 합니다. */
const InitClockState: ClockStateType = {
  time: new Date().toLocaleString(),
};

/* 리듀서를 작성합니다. */
function Clock(
  state: ClockStateType = InitClockState,
  action: ClockAction
): ClockStateType {
  switch (action.type) {
    case TIMES:
      return { time: state.time = new Date().toLocaleString() };
    case REFRESH:
      return { time: state.time = new Date().toLocaleString() };
    default:
      return state;
  }
}

export default Clock;
