import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Successpage from './successpage';

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Successpage ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Example;