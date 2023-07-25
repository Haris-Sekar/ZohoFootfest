import React, { useEffect } from 'react'
import TeamGroup from '../TeamGroup';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import TeamMatch from '../TeamMatch';

const ChampionsLeague = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getQualifiedTeams());
    dispatch(actions.getMatches("q1"));
    dispatch(actions.getMatches("q2"));
  },[dispatch])
  const { qualifiedTeams, matches } = useSelector(
    (state) => state.teamReducer
  );
  return (
    <>
      <div className='pageTitle'>
        Zoho<br /> Champions League
      </div>
      <div className='container'>
        <div className='leagueTitle'><span>Qualifiers</span></div>
        <div className='matchContainer'>
          <div className='roundsBrackets'>
            <div className='round1'>
            {matches.q1 !== undefined ? <TeamMatch matches={matches.q1.matches} roundName="Round 1"/> : <></>}
            </div>
            <div className='round2'>
            {matches.q1 !== undefined ? <TeamMatch matches={matches.q2?.matches} roundName="Round 2"/> : <></>}
            </div>

            </div>
          <div className='qualifiers'>{qualifiedTeams.isQualifiedTeams !== undefined ? <TeamGroup groupData={qualifiedTeams} /> : <></>}</div>
        </div>
      </div>
    </>
  )
}

export default ChampionsLeague;