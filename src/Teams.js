import { render } from '@testing-library/react';
import React from 'react';
import ApprovalCard from './ApprovalCard';
import Team from './Team';

const Teams = () =>{
    // const {team} = props
    // console.log({team}) 
        return (
            <div>
                <ApprovalCard>
                    <Team author="Sam" desc="This is the best"/>
                </ApprovalCard>
                <ApprovalCard>
                    <Team author="dhuthi" desc="This is all the very best"/>
                </ApprovalCard>
                <ApprovalCard>
                    <Team author="Meera" desc="This is not at all the best"/>
                </ApprovalCard>
            </div>
        );
}

export default Teams;