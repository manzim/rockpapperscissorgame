import React, { useState } from 'react';

import { Button, ButtonGroup, InputGroup } from '@blueprintjs/core'
import { useHistory } from 'react-router';

import '../externalCSS/externalCSS.css'

function Player() {

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    let history = useHistory()

    return (
        <div>
            <article class="landingPage_ vh-100 dt w-100 bg-near-white" >
                <div class="dtc v-mid tc white ph3 ph4-l flex-column justify-around">
                    <InputGroup
                        className="w-25-l w-40-m w-70 tc center mb4 shadow-1"
                        disabled={false}
                        large={true}
                        value={name}
                        intent="success"
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
                        onClick={ () => {setName(''); history.push('/game'); setLoading(true); localStorage.setItem('name', name)} }
                        />
                    </ButtonGroup>
                </div>
            </article>
        </div>
    )
}

export default Player
