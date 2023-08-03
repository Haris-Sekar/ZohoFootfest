import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import TeamGroup from "../TeamGroup";
import TeamMatch from "../TeamMatch";
import Navbar from "../StaticPages/Navbar";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const League = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getStandings("g", false));
    dispatch(actions.getMatches("g", false));
  }, [dispatch]);
  const { standings, matches, isLoading } = useSelector((state) => state.teamReducer);
  const paraseTeamGroupMatch = (standings1) => {
    let groupData = [];
    standings1.groupName = standings1.group.display_name;
    standings1.matches = standings1.matches === undefined ? [] : standings1.matches
    groupData.push(standings1);
    return groupData;
  };

  const groupMatch1 = {
    matches: [
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_a",
          display_name: "Group A",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_a",
          display_name: "Group A",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_a",
          display_name: "Group A",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_a",
          display_name: "Group A",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_a",
          display_name: "Group A",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_a",
          display_name: "Group A",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_b",
          display_name: "Group B",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_b",
          display_name: "Group B",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_b",
          display_name: "Group B",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_b",
          display_name: "Group B",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_b",
          display_name: "Group B",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
      {
        id: "14781000000013079",
        name: "L1A",
        team1: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        team2: {
          id: "14781000000013034",
          name: "Team 4",
          goals: 2,
        },
        round: {
          id: "14781000000006479",
          name: "group_stage",
          display_name: "Group Stage",
        },
        group: {
          id: "14781000000009243",
          name: "group_b",
          display_name: "Group B",
        },
        winner: {
          id: "14781000000013031",
          name: "Team 3",
          goals: 3,
        },
        status: 1,
      },
    ],
    status: "success",
  };

  const parseGroupMatch = (groupMatch) => { 
    const matchesByGroup = {};
    groupMatch.matches.forEach((match) => {
      const groupName = match.group.name;
      if (!matchesByGroup[groupName]) {
        matchesByGroup[groupName] = [];
      }
      matchesByGroup[groupName].push(match);
    });
    return matchesByGroup;
  };
  
  let leagueData = []
  const parseLeagueData = (groupData, groupMatch) => {
    const leagueData = [];
    groupData.map((group) => {
      let temp = group;
      temp.matches = groupMatch[group.group.name];
      leagueData.push(temp);
    });
    return leagueData;
  };
  const groupMatchParsed = matches.g != undefined ? parseGroupMatch(matches?.g) : ""; 
  // const groupMatchParsed = parseGroupMatch(groupMatch1);
  if (standings[0] != undefined) {
    
    leagueData = parseLeagueData(standings, groupMatchParsed);
  } 
  return (
    <>
    <Navbar />
     
    <div className='container' style={{position: 'relative'}}>
      <div className="pageTitle">
        Zoho
        <br /> Champions League
      </div>
      <Backdrop
          sx={{ color: '#fff', position: 'absolute' }}
          open={isLoading}
          
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="leagueTitle">
          <span>Leagues</span>
        </div>
        {<div className="leagueBody">
          {standings[0] != undefined ? (
            leagueData.map((group) => (
              <div className="leagueContainer">
                <div className="standings">
                  {paraseTeamGroupMatch(group).map((group) => <TeamGroup key={group.groupName} groupData={group} />)}
                </div>
                <div className="matches">
                   <TeamMatch isLeauge={true} roundName={"Matches"} matches={group.matches} />
                </div>
              </div>
            ))
          ) : (
            <>asdf</>
          )}
        </div>}
        
      </div>
    </>
  );
};

export default League;
 