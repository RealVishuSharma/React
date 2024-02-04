import { useState } from "react";
import PropTypes from "prop-types"

import "./App";

function TotVotes({ bjp, congress, aap, bakwas}) {

    const [tvotes, settvotes] = useState(false);

    console.log(tvotes);

    const showVotes = () => {
        settvotes(true);
    }

    return (
        <>

        <button onClick={showVotes}>Show Total Votes</button>

        <div id='totalvotes'>
        <h3>Total Votes: </h3>
        <p>Bhartiya Janta Party: {bjp}</p>
        <p>Congress: {congress}</p>
        <p>Aam Aadmi Party: {aap}</p>
        <p>Bakwas Party: {bakwas}</p>
        </div>
        </>
    )

}

TotVotes.propTypes = {
    settvotes: PropTypes.func,
    bjp: PropTypes.number,
    congress: PropTypes.number,
    aap: PropTypes.number,
    bakwas: PropTypes.number
}

export default TotVotes;