import { useState, memo, RefObject } from 'react';
import Articles from './Articles';
import CoffeeBean from './Scenes/CoffeeBean';

const Wrapper = () => {
  const [coffeeBeans, setCoffeeBeans] = useState<JSX.Element[]>([]);
  const addBeans = () => {
    setCoffeeBeans([
      ...coffeeBeans,
      ...[...new Array(50)].map((_, index) => (
        <CoffeeBean
          key={coffeeBeans.length + index}
          rotation={[
            Math.PI * Math.random(),
            Math.PI * Math.random(),
            Math.PI * Math.random(),
          ]}
          position={[
            Math.random() * 5 - 2.5,
            Math.random() * 10 + 5,
            Math.random() * 5 - 2.5,
          ]}
        />
      )),
    ]);
  };

  return (
    <Articles coffeeBeans={coffeeBeans} addBeans={addBeans} />
  );
};
 
export default memo(Wrapper);
