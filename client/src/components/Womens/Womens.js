import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import TeamGroup from "../TeamGroup";
import TeamMatch from "../TeamMatch";
import Navbar from "../StaticPages/Navbar";

const Womens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getStandings("g", true));
    dispatch(actions.getMatches("g",true));
  }, [dispatch]);
  const { standings, matches } = useSelector((state) => state.teamReducer);



  const paraseTeamGroupMatch = (standings1) => {
    let groupData = [];
    standings1.groupName = standings1.group.display_name;
    standings1.matches = standings1.matches === undefined ? [] : standings1.matches
    groupData.push(standings1);
    return groupData;
  };
 
   const groupMatch = { matches: [
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
    console.log("console.log(groupMatch);",groupMatch);
    return matchesByGroup;
    
  };
  
  let leagueData = []
  const parseLeagueData = (groupData, groupMatch) => {
    console.log("asdf",groupMatch);
    const leagueData = [];
    groupData.map((group) => {
      let temp = group;
      temp.matches = groupMatch[group.group.name];
      leagueData.push(temp);
    });
    return leagueData;
  };
  const groupMatchParsed = matches.g != undefined && matches.g.matches[0].group != undefined ? parseGroupMatch(matches.g) : "";
  // const groupMatchParsed = parseGroupMatch(groupMatch);
  if (standings[0] != undefined && matches.g != undefined) {
    leagueData = parseLeagueData(standings, groupMatchParsed);
  }
console.log("leagueData",leagueData);
console.log("matches", matches);
  return (
    <>
    <Navbar />
      <div className="pageTitle">
        Zoho
        <br /> Champions League
      </div>
      <div className="container">
        
        <div className="leagueTitle">
          <span>Womens 's</span>
        </div>
        { <div className="leagueBody">
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
            <>error</>
          )}
        </div>}
        
      </div>
    </>
  );
};

export default Womens;
 