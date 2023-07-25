import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import TeamGroup from "../TeamGroup";
import TeamMatch from "../TeamMatch";

const League = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getStandings("g"));
  }, [dispatch]);
  const { standings } = useSelector((state) => state.teamReducer);
  const paraseTeamGroupMatch = (standings) => {
    let groupData = [];
    if (standings[0] != undefined) {
      standings.forEach((element) => {
        const temp = {
          groupName: element.group.display_name,
          teams: element.teams,
          matches : element.matches
        };
        groupData.push(temp);
      });
    }
    return groupData;
  };

  const groupMatch = {
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
  const groupMatchParsed = parseGroupMatch(groupMatch);
  const groupMatchGroups = Object.keys(groupMatchParsed);
  let leagueData = []
  const parseLeagueData = (groupData, groupMatch) => {
    const leagueData = [];
    groupData.map((group) => {
      let temp = group;
      temp.matches = groupMatch[group.group.name];
    });
    return leagueData;
  };
  if (standings[0] != undefined) {
    leagueData = parseLeagueData(standings, groupMatchParsed);
  }
  
  if(standings[0] != undefined){
    console.log(leagueData);
  }
  
  return (
    <>
      <div className="pageTitle">
        Zoho
        <br /> Champions League
      </div>
      <div className="container">
        <div className="leagueTitle">
          <span>Leagues</span>
        </div>
        <div className="leagueBody">
          {standings[0] != undefined ? (
            leagueData.map((group) => (
              <>
                <div className="standings">
                  {paraseTeamGroupMatch(group).map((group) => <TeamGroup key={group.groupName} groupData={group} />)}
                </div>
                <div className="matches">
                  {group.map((match) => <TeamMatch isLeauge={true} matches={match.matches} />)}
                </div>
              </>
            ))
          ) : (
            <>asdf</>
          )}
        </div>
      </div>
    </>
  );
};

export default League;

{
  /* <div className="standings">
            {standings[0] != undefined ? (
              groupData.map((group) => (
                <TeamGroup key={group.groupName} groupData={group} />
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="matches">
            {groupMatchGroups.map(group => (<TeamMatch isLeauge={true} matches={groupMatchParsed[group]} />))}
          </div> */
}
