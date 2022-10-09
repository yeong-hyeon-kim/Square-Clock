import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { times, refresh } from "../modules/Clock";
import Clock from "../components/Clock";

let ClockContainer = () => {
  /* 상태 조회 */
  const time = useSelector((state: RootState) => state.Clock.time);
  const dispatch = useDispatch();
  const onRefresh = () =>{
    dispatch(refresh())
  }

  return <Clock time={time} onRefresh={onRefresh}></Clock>;
};

export default ClockContainer;
