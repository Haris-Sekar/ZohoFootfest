import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../action/team";
import TeamGroup from "../TeamGroup";
import TeamMatch from "../TeamMatch";
import Navbar from "../StaticPages/Navbar";
import { Backdrop, CircularProgress } from "@mui/material";
import WomensKnockout from "../Knockout/WomensKnockout";

const Womens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getStandings("g", true));
    dispatch(actions.getMatches("g", true));
    dispatch(actions.getMatches("sf", true));
    dispatch(actions.getMatches("f", true));
  }, [dispatch]);
  const { standings, matches, isLoading } = useSelector(
    (state) => state.teamReducer
  );

  const paraseTeamGroupMatch = (standings1) => {
    let groupData = [];
    standings1.groupName = standings1.group.display_name;
    standings1.matches =
      standings1.matches === undefined ? [] : standings1.matches;
    groupData.push(standings1);
    return groupData;
  };

  // const groupMatch = {
  //   matches: [
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_a",
  //         display_name: "Group A",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_a",
  //         display_name: "Group A",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_a",
  //         display_name: "Group A",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_a",
  //         display_name: "Group A",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_a",
  //         display_name: "Group A",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_a",
  //         display_name: "Group A",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_b",
  //         display_name: "Group B",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_b",
  //         display_name: "Group B",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_b",
  //         display_name: "Group B",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_b",
  //         display_name: "Group B",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_b",
  //         display_name: "Group B",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //     {
  //       id: "14781000000013079",
  //       name: "L1A",
  //       team1: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       team2: {
  //         id: "14781000000013034",
  //         name: "Team 4",
  //         goals: 2,
  //       },
  //       round: {
  //         id: "14781000000006479",
  //         name: "group_stage",
  //         display_name: "Group Stage",
  //       },
  //       group: {
  //         id: "14781000000009243",
  //         name: "group_b",
  //         display_name: "Group B",
  //       },
  //       winner: {
  //         id: "14781000000013031",
  //         name: "Team 3",
  //         goals: 3,
  //       },
  //       status: 1,
  //     },
  //   ],
  //   status: "success",
  // };

  const parseGroupMatch = (groupMatch) => {
    const matchesByGroup = {};
    groupMatch.matches.forEach((match) => {
      const groupName = match.group.name;
      if (!matchesByGroup[groupName]) {
        matchesByGroup[groupName] = [];
      }
      matchesByGroup[groupName].push(match);
    });
    console.log("console.log(groupMatch);", groupMatch);
    return matchesByGroup;
  };

  let leagueData = [];
  const parseLeagueData = (groupData, groupMatch) => {
    console.log("asdf", groupMatch);
    const leagueData = [];
    groupData.forEach((group) => {
      let temp = group;
      temp.matches = groupMatch[group.group.name];
      leagueData.push(temp);
    });
    return leagueData;
  };
  const groupMatchParsed =
    matches.g !== undefined && matches.g.matches[0].group !== undefined
      ? parseGroupMatch(matches.g)
      : "";
  // const groupMatchParsed = parseGroupMatch(groupMatch);
  if (standings[0] !== undefined && matches.g !== undefined) {
    leagueData = parseLeagueData(standings, groupMatchParsed);
  }

  const parseData = (data) => {
    let leftBracket = {};
    let rightBracket = {};
    const semis = parseDataToComp(data.sf);
    leftBracket.semis = [semis[0]];
    rightBracket.semis = [semis[1]];
    const finals = parseDataToComp(data.f);
    const parsedData = {
      rightBracket,
      leftBracket,
      final: finals[0],
    };
    return parsedData;
  };


  const parseDataToComp = (data) => {
    const matches = data.matches;
    let finalData = [];
    for (const match of matches) {
      const team1Name = match.team1.name;
      const team2Name = match.team2.name;

      const team1Score = match.team1.penalty_goals !== undefined && match.team1.goals !== undefined ? match.team1.penalty_goals + match.team1.goals : 0;
      const team2Score = match.team2.penalty_goals !== undefined && match.team2.goals !== undefined ? match.team2.penalty_goals + match.team2.goals : 0;

      const matchData = {
        hashTag: match.round.display_name,
        team1: {
          name: team1Name,
          score: team1Score,
        },
        team2: {
          name: team2Name,
          score: team2Score,
        },
        schedule: match.schedule
      };
      finalData.push(matchData);
    }
    return finalData;
  };

  return (
    <>
      <Navbar />

      <div className="container" style={{ position: "relative" }}>
        <div className="pageTitle">
          Zoho
          <br /> Champions League
        </div>
        <Backdrop sx={{ color: "#fff", position: "absolute" }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="leagueTitle">
          <span>Womens 's</span>
        </div>
          <div className="leagueBody">
            {standings[0] !== undefined ? (
              leagueData.map((group) => (
                <div className="leagueContainer">
                  <div className="standings">
                    {paraseTeamGroupMatch(group).map((group) => (
                      <TeamGroup key={group.groupName} groupData={group} />
                    ))}
                  </div>
                  <div className="matches">
                    <TeamMatch
                      isLeauge={true}
                      roundName={"Matches"}
                      matches={group.matches}
                    />
                  </div>
                </div>
              ))
            ) : (
              <>error</>
            )}

              {matches.sf !== undefined && matches.f !== undefined ? <WomensKnockout data={parseData(matches)} /> : <></>}

          </div>
      </div>
    </>
  );
};

export default Womens;
