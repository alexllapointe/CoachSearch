import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [coachList, setCoachList] = useState([]);
    const [filteredCoachList, setFilteredCoachList] = useState([]);
    const [selectedCoach, setSelectedCoach] = useState(null);

    useEffect(() => {
        api.get("/api/v1/coaches")
            .then((response) => {
                setCoachList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching coach list:", error);
            });
    }, []);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setSelectedCoach(null); // Reset the selected coach

            if (search) {
                const filteredList = coachList.filter((coach) =>
                    coach.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredCoachList(filteredList);
            }
        }
    };

    const handleCoachSelect = (coach) => {
        setSelectedCoach(coach);
    };

    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='pt-10'>
                <div className="max-w-md mx-auto">
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            {/* SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    {selectedCoach ? (
                        <div className="pt-10 text-center">
                            {/* Show selected coach information */}
                            <h2 className="text-3xl">{selectedCoach.name}</h2>
                            <p>Age: {selectedCoach.age}</p>
                            <p>Current Team: {selectedCoach.currentTeam}</p>
                            {/* Add a graphic representation of the coach */}
                        </div>
                    ) : (
                        <div className="pt-16 text-center">
                            <div className="mx-auto max-w-3xl">
                                {filteredCoachList.map((coach) => (
                                    <div key={coach._id} className="p-4 mb-4 cursor-pointer" onClick={() => handleCoachSelect(coach)}>
                                        <h2 className="text-3xl text-black hover:text-blue-500">{coach.name}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
