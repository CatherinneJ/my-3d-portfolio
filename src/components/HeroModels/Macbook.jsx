import {useGLTF, useTexture} from '@react-three/drei'

export function Macbook(props) {
  const { nodes, materials } = useGLTF('models/macbook.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.2}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.MBP13001_MBP13_0.geometry} material={materials.MBP13} position={[-15.843, 5.109, -26.358]} rotation={[0.639, 1.188, 2.539]} scale={35.221} />
          <mesh geometry={nodes.MBP13Screen001_MBP13_0.geometry} material={materials.MBP13} position={[-15.843, 5.109, -26.358]} rotation={[-0.869, 1.106, -2.328]} scale={35.221} />
          <mesh geometry={nodes.MBP14001_MBP14_0.geometry} material={materials.MBP14} position={[-5.052, 6.608, 55.276]} rotation={[2.917, 0, 0]} scale={35.558} />
          <mesh geometry={nodes.MBP14Screen001_MBP14_0.geometry} material={materials.MBP14} position={[-5.052, 6.541, 55.276]} rotation={[-2.793, 0, 0]} scale={35.558} />
          <mesh geometry={nodes.MBP16001_MBP16_0.geometry} material={materials.MBP16} position={[57.013, 6.888, 12.063]} rotation={[0.393, -0.951, -2.816]} scale={40.569} />
          <mesh geometry={nodes.MBP16Screen001_MBP16_0.geometry} material={materials.MBP16} position={[57.013, 6.508, 12.063]} rotation={[-0.584, -0.902, 2.663]} scale={40.569} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/macbook.glb')
