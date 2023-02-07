import React, { useState } from 'react';

const RenderPicture = () => {
    const [isChaika, setIsChaika] = useState(true);
    console.log(isChaika);
    return (
        <>
            <div>
                {isChaika ? (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="" width="150" height="150" />
                ) : (
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5HErGV-n_nrGoUmc4gubEbikn3YkhhKQZT-xcB5g23Aw7taTb1tttwh4kLGNULX5bUg&usqp=CAU" alt="" width="150" height="150" />
                )}
            </div>
            <button onClick={() => setIsChaika(true)}>Chaika</button>
            <button onClick={() => setIsChaika(false)}>Ne Chaika</button>
        </>
    )
};

export default RenderPicture;
