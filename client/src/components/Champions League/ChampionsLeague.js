import React, { useEffect, useState } from 'react'
import TeamGroup from '../TeamGroup';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import TeamMatch from '../TeamMatch';
import Navbar from '../StaticPages/Navbar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const ChampionsLeague = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getQualifiedTeams());
    dispatch(actions.getMatches("q1"));
    dispatch(actions.getMatches("q2"));
  }, [dispatch])
  const { qualifiedTeams, matches, isLoading } = useSelector(
    (state) => state.teamReducer
  ); 
  
  return (
    <>
      <Navbar />
      
      <div className='container' style={{position: 'relative'}}>
      <div className='pageTitle'>
        Zoho<br /> Champions League
      </div>
        <div className='leagueTitle'><span>Qualifiers</span></div>
        <Backdrop
          sx={{ color: '#fff', position: 'absolute' }}
          open={isLoading}
          
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className='matchContainer'>
          <div className='roundsBrackets'>
            <div className='round1'>
              {matches.q1 !== undefined ? <TeamMatch matches={matches.q1.matches} roundName="Round 1" /> : <></>}
            </div>
            <div className='round2'>
              {matches.q1 !== undefined ? <TeamMatch matches={matches.q2?.matches} roundName="Round 2" /> : <></>}
            </div>

          </div>
          <div className='qualifiers'>{qualifiedTeams.isQualifiedTeams !== undefined ? <TeamGroup groupData={qualifiedTeams} /> : <></>}</div>
        </div>
      </div>
    </>
  )
}

export default ChampionsLeague;