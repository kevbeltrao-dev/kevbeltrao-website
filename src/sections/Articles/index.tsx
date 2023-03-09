import { useState, memo, RefObject } from 'react';
import Articles from './Articles';
import CoffeeBean from './Scenes/CoffeeBean';

const Wrapper = ({ innerRef }: { innerRef: RefObject<HTMLDivElement> }) => {
  const [coffeeBeans, setCoffeeBeans] = useState<JSX.Element[]>([]);
  const addBeans = () => {
    setCoffeeBeans([
      ...coffeeBeans,
      ...[...new Array(10)].map((_, index) => (
        <CoffeeBean
          key={coffeeBeans.length + index}
          rotation={[
            Math.PI * Math.random(),
            Math.PI * Math.random(),
            Math.PI * Math.random(),
          ]}
          position={[
            Math.random() * 5 - 2.5,
            Math.random() * 3 + 3,
            Math.random() * 5 - 2.5,
          ]}
        />
      )),
    ]);
  };

  return (
    <Articles innerRef={innerRef} coffeeBeans={coffeeBeans} addBeans={addBeans} />
  );
};
 
export default memo(Wrapper);
