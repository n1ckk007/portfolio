import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  // reusable hook, kind of like state
  const [element, view] = useInView({ threshold: 0.3, triggerOnce: true });
  // if our element is in view, can control the hidden and show property from our variants whenever we want with useAnimation
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
