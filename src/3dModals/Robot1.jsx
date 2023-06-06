// import { useAnimations, useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import React, { useContext, useEffect, useRef } from "react";
// import { UserContext } from "../context";

export const RobotModel = (props) => {
  // const { loader } = useContext(UserContext);
  // const group = useRef();
  // const mixerRef = useRef(null);
  // const { nodes, materials, animations, scene } = useGLTF("/character.glb");
  // const { actions, names, mixer } = useAnimations(animations, group);
  // useFrame((_, delta) => {
  //   mixer.update(delta);
  // });
  // // Play an animation
  // console.log("actions", actions["Armature|mixamo.com|Layer0"]?._clip.tracks);
  // useEffect(() => {
  //   const action = actions["Armature|mixamo.com|Layer0"]; // Get the first animation action
  //   action?.play();

  //   return () => {
  //     action?.stop();
  //   };
  // }, [actions]);
  // console.log("animations", animations);
  // useEffect(() => {
  //   if (!loader) {
  //     setTimeout(() => {
  //       const scrubTimeline = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: props.sectionRef.current,
  //           start: "top 70%",
  //           end: "top 0%",
  //           scrub: true,
  //           onUpdate: (self) => {
  //             const scrubTime = scrubTimeline.time();
  //             console.log("self", self);
  //             console.log("mixer", mixer);
  //             // mixer.setTime(self.progress);
  //           },
  //         },
  //       });
  //       console.log("scrubTimeline", scrubTimeline);
  //       return () => {
  //         scrubTimeline.kill();
  //       };
  //     }, 0);
  //   }
  // }, [loader]);

  return (
    <></>
    // <group {...props}>
    //   <primitive
    //     ref={group}
    //     object={scene}
    //     position={[0, -2.8, 0]}
    //     scale={2.4}
    //     castShadow
    //   />
    // </group>
  );
};
