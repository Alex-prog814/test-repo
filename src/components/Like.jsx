import React, { useState } from 'react';

const Like = () => {
    const [like, setLike] = useState();

    return (
        <>
            <h2 onClick={() => setLike(!like)}>
                Like: {like ? '❤️': '🤍'}
            </h2>
        </>
    )
};

export default Like;
