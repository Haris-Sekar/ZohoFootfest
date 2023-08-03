import React from 'react'

const TeamMatch = ({ matches, roundName, isLeauge }) => {
    function formatDate(inputDate) {
        // Split the input date string into year, month, and day parts
        const [year, month, day] = inputDate.split('-');
    
        // Create a new Date object using the parsed year, month (subtracting 1 as months are 0-indexed), and day
        const parsedDate = new Date(year, month - 1, day);
    
        // Define an array of month names
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
    
        // Get the day, month name, and abbreviated month name from the parsed date
        const formattedDay = parsedDate.getDate();
        const formattedMonthName =  monthNames[parsedDate.getMonth()]; // Using 0-indexed month
        const formattedAbbrevMonthName = formattedMonthName.slice(0, 3); // Abbreviated month name
    
        // Create the formatted date string in "dd-mmm" format
        const formattedDateString = `${formattedDay}-${formattedAbbrevMonthName}`;
    
        return formattedDateString;
    }
    return (
        <>
            {isLeauge != undefined ? (
                
                <>
                <div className='roundTitle'>{roundName}</div>
                    <div className="qualifiers_main flexwrap">
                    {matches?.map((match) => (
                        <div className="leaugematch_left_container round">
                            <div className="teamOne_whole">
                            <span className="qualifiersteam_header"><span style={{fontFamily: "zoho_puviblack"}}>{match?.name}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                <div className="qualifiers_teamOne">
                                    <div className="qualifiersteamone_partOne">
                                        <span>{match?.team1?.name}</span>
                                        <span className='qualifytime'>{match?.team1?.goals === undefined ? 0 : match?.team1?.goals}</span>
                                    </div>
                                    <div className="qualifiersteamone_parttwo">
                                        <span>{match?.team2?.name}</span>
                                        <span className="qualifytime">{match?.team2?.goals === undefined ? 0 : match?.team2?.goals}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
                </>
            ) : (
                <div className="qualifiers_main flexremove">
                    {console.log(matches)}
                    <div className='roundTitle'>{roundName}</div>
                    {matches?.map((match) => (
                        <div className="match_left_container round">
                            <div className="teamOne_whole">
                                <span className="qualifiersteam_header"><span style={{fontFamily: "zoho_puviblack"}}>{match?.name}</span> | {formatDate(match?.schedule?.date)} | {match?.schedule?.from} - {match?.schedule?.to}</span>
                                <div className="qualifiers_teamOne">
                                    <div className="qualifiersteamone_partOne">
                                        <span>{match?.team1?.name}</span>
                                        <span className='qualifytime'>{match?.team1?.goals === undefined ? 0 : match?.team1?.goals + match?.team1?.penalty_goals}</span>
                                    </div>
                                    <div className="qualifiersteamone_parttwo">
                                        <span>{match?.team2?.name}</span>
                                        <span className="qualifytime">{match?.team2?.goals === undefined ? 0 : match?.team2?.goals + match?.team2?.penalty_goals}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
            )}
        </>

    )

}

export default TeamMatch;