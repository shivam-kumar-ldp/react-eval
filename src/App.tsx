import React from 'react';
import SimplePaper from './components/organism';
function App() {
  return (
    <>
    <SimplePaper bookName='Organic' bookCategory='Physics'/>
    <SimplePaper authorName='JD' buttonLabel='Continue Reading'/>
    </>

  );
}

// val={<ButtonComponent>Continue Reading</ButtonComponent>}

export default App;
