import { Suspense } from "react";
import * as Three from "three";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import IphoneModel from "./IphoneModel";
import Loader from "./Loader";

type ModelViewProps = {
  index: number;
  groupRef: React.RefObject<Three.Group>;
  gsapType: string;
  controlRef: React.RefObject<any>;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  item: any;
  size: string;
};

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotation, item, size }: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute size-full cursor-pointer ${index === 2 ? "-right-full" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        target={new Three.Vector3(0, 0, 0)}
        onEnd={() => setRotation(controlRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IphoneModel scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};
export default ModelView;
