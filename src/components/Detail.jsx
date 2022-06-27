import React, { useState, useRef } from "react";

function Detail(){

    return (
<div>
    Description About Film 
    <Route render={({ history}) => (
                <button
                  onClick={() => { history.push('/MovieCard') }}
                >
                 Retour
                </button>
              )} />
</div>
    );
}

export default Detail;