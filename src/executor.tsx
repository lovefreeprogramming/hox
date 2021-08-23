import { ModelHook } from "./types";
import {ReactElement, useLayoutEffect} from "react";

export function Executor<T>(props: {
  hook: () => ReturnType<ModelHook<T>>;
  onUpdate: (data: T) => void;
}) {
  const data = props.hook();
  useLayoutEffect(()=>{
    props.onUpdate(data);
  })
  return null as ReactElement;
}
