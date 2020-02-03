import React, { useState, useEffect } from 'react';

interface Props {
  text: string,
}


const About: React.FC<Props> = ({text}) => {
  const [textProp, setTextProp] = useState();

  useEffect(() => {
    setTextProp(text)
  }, [text]);

  return (
    <div>
      <h1>{textProp}</h1>
    </div>
  );
}

export default About;