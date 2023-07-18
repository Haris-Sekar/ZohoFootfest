import React, {useEffect} from 'react'
import TeamGroup from '../TeamGroup';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import Brackets from '../Brackets';

const ChampionsLeague = () => {
  let roundName = "";
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getQualifiedTeams(roundName));
  })

  const { qualifiedTeams } = useSelector(
    (state) => state.teamReducer
  );
  console.log(qualifiedTeams);
  const groupData = {
    groupName: "Group A",
    isQualifiedTeams:true,
    teams: [
      {
        name: "Blitz FC",
        games_played: 3,
        win: 3,
        draw: 0,
        loss: 0,
        goal_difference: 5,
        points: 9
      },
      {
        name: "Wizards FC",
        games_played: 3,
        win: 2,
        draw: 1,
        loss: 0,
        goal_difference: 7,
        points: 7
      },
      {
        name: "Raavanas",
        games_played: 3,
        win: 1,
        draw: 1,
        loss: 1,
        goal_difference: 5,
        points: 4
      },
      {
        name: "Tea & Busquets",
        games_played: 3,
        win: 1,
        draw: 0,
        loss: 2,
        goal_difference: 5,
        points: 3
      }
    ],
  }
  const bracketsData = {
    
    match1:{
      hashtag:"#123",
      team1:{
        name: "team1",
        points: "2"
      },
      team2:{
        name: "team2",
        points: "5"
      }
    },
    match2:{
      hashtag:"#123",
      team1:{
        name: "team1",
        points: "2"
      },
      team2:{
        name: "team2",
        points: "5"
      }
    },
    match: {
      hashtag:"#123",
      team1:{
        name: "team1",
        points: "2"
      }
    }
  }
  return (
    <>
      <div className='pageTitle'>
        Zoho<br /> Champions League
      </div>
      <div className='container'>
        <div className='leagueTitle'><span>Qualifiers</span></div>
        <div className='matchContainer'>
          <div className='roundsBrackets'><Brackets props={bracketsData}/></div>
          <div className='qualifiers'><TeamGroup groupData={groupData} /></div>
        </div>
      </div>
    </>
  )
}

export default ChampionsLeague;