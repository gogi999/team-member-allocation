import React, {
  useContext,
  useState,
} from 'react';

import DataContext from '../context/DataContext';

const GroupedTeamMembers = () => {
    const { employees, selectedTeam, setSelectedTeam } = useContext(DataContext);

    const groupTeamMembers = () => {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = { 
            team: 'TeamA', 
            members: teamAMembers,
            collapsed: selectedTeam === 'TeamA' ? false : true
        }
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = { 
            team: 'TeamB', 
            members: teamBMembers,
            collapsed: selectedTeam === 'TeamB' ? false : true
        }
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = { 
            team: 'TeamC', 
            members: teamCMembers,
            collapsed: selectedTeam === 'TeamC' ? false : true
        }
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = { 
            team: 'TeamD', 
            members: teamDMembers,
            collapsed: selectedTeam === 'TeamD' ? false : true
        }
        teams.push(teamD);

        return teams;
    }

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    const handleTeamClick = (e) => {
        let transformedGroupData = groupedEmployees.map(
            (groupedData) => e.currentTarget.id 
                ? { ...groupedData, collapsed: !groupedData.collapsed } 
                : groupedData
        );

        setGroupedData(transformedGroupData);
        setSelectedTeam(e.currentTarget.id);
    }

    return (
        <main className="container">
            {groupedEmployees.map((item) => {
                return (
                <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
                    <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                        Team Name: {item.team}
                    </h4>
                    <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                        <hr />
                        {item.members.map((member) => (
                            <div key={member.id} className="mt-2">
                                <h5 className="card-title mt-2">
                                    <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                                </h5>
                                <p className="card-text text-dark mt-2">
                                    <b>Designation:</b> {member.designation}
                                </p>
                            </div>
                        ))}
                    </div>
                    <hr />
                </div>
                );
            })}
        </main>
    );
}

export default GroupedTeamMembers;
