import React, { useState } from 'react';

import { Button, ButtonGroup, InputGroup } from '@blueprintjs/core'
import { useHistory } from 'react-router';

function Player() {

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    let history = useHistory()

    return (
        <div>
            <article class="vh-100 dt w-100 bg-near-white" 
                
            >
                <div class="dtc v-mid tc white ph3 ph4-l flex-column justify-around">
                    <InputGroup
                        className="w-50 tc center mb4"
                        disabled={false}
                        large={true}
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        // rightElement={resultsTag}
                    />
                    <ButtonGroup>
                        <Button 
                        intent="success" 
                        rightIcon="tick" 
                        text="let's go"
                        loading={loading} 
                        disabled={name.length > 0 ? false : true} 
                        className="w-100 tc center mb4"
                        onClick={ () => {setName(''); history.push('/game'); setLoading(true)} }
                        />
                    </ButtonGroup>
                </div>
            </article>
        </div>
    )
}

export default Player
