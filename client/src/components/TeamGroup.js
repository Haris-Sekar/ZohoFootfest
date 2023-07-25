import React from 'react'

function TeamGroup({ groupData }) {

    groupData.teams = groupData?.teams?.sort((teamA, teamB) => {
        if (teamA.points !== teamB.points) {
            return teamB.points - teamA.points;
        } else {
            return teamB.goal_difference - teamA.goal_difference;
        }
    });

    return (
        <div className={`team-group ${groupData.isQualifiedTeams ? "qualified-team-group" : ""}`}>
            <h2 className={groupData.isQualifiedTeams ? "qualified-group-header" : ""}>
                {groupData.isQualifiedTeams ? <div className='leagueTitle'>Qualified Teams</div> : groupData?.groupName ?? "Group"}
                
            </h2>
            <table>
                {groupData.isQualifiedTeams ? (
                    <>
                        {
                            groupData?.teams?.map((team) => {
                                return (
                                    <tbody>
                                        <tr key={team.name} className="qualified-team">
                                            <td>{team.name}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </>
                ) : (
                    <>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GD</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                groupData?.teams?.map((team, index) => {
                                    return (
                                        <tr key={team.name}>
                                            <td>{ `${index + 1}. ${team.name}` }</td>
                                            <td>{ team?.games_played }</td>
                                            <td>{ team?.win }</td>
                                            <td>{ team?.draw }</td>
                                            <td>{ team?.loss }</td>
                                            <td>{ team?.goal_difference }</td>
                                            <td>{ team?.points }</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </>
                )}
            </table>
        </div>
    )
}

export default TeamGroup;