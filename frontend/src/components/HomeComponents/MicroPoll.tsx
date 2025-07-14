import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPoll,
    faUsers,
    faChartBar
} from "@fortawesome/free-solid-svg-icons";

interface PollOption {
    id: number;
    text: string;
    votes: number;
    percentage: number;
}

interface MicroPollProps {
    question: string;
    options: PollOption[];
    totalVotes: number;
    isActive: boolean;
}

const MicroPoll: React.FC<MicroPollProps> = ({ question, options, totalVotes, isActive }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [localOptions, setLocalOptions] = useState<PollOption[]>(options);

    const handleVote = (optionId: number) => {
        if (hasVoted || !isActive) return;
        
        setSelectedOption(optionId);
        setHasVoted(true);
        
        // Update local state to show the vote
        setLocalOptions(prev => prev.map(option => 
            option.id === optionId 
                ? { ...option, votes: option.votes + 1 }
                : option
        ));
    };

    const calculatePercentage = (votes: number) => {
        const total = localOptions.reduce((sum, option) => sum + option.votes, 0);
        return total > 0 ? Math.round((votes / total) * 100) : 0;
    };

    return (
        <div className="w-full bg-frost dark:bg-dark800 rounded-lg p-3 border border-neon_purple/20">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
                <FontAwesomeIcon icon={faPoll} className="text-fashion_pink text-sm" />
                <h3 className="text-neon_purple dark:text-white font-fira-code font-bold text-xs">ANIME POLL</h3>
                <div className="flex items-center gap-1 ml-auto">
                    <FontAwesomeIcon icon={faUsers} className="text-chrome text-xs" />
                    <span className="text-chrome text-xs">{totalVotes + (hasVoted ? 1 : 0)} votes</span>
                </div>
            </div>

            {/* Question */}
            <h4 className="text-black dark:text-white font-fira-code text-sm mb-3 leading-tight">
                {question}
            </h4>

            {/* Options */}
            <div className="space-y-2">
                {localOptions.map((option) => {
                    const percentage = calculatePercentage(option.votes);
                    const isSelected = selectedOption === option.id;
                    
                    return (
                        <div 
                            key={option.id}
                            className={`relative cursor-pointer transition-all duration-200 ${
                                hasVoted ? 'cursor-default' : 'hover:bg-dark700'
                            } ${isSelected ? 'bg-neon_purple/20' : ''} rounded-md p-2`}
                            onClick={() => handleVote(option.id)}
                        >
                            {/* Progress bar background */}
                            {hasVoted && (
                                <div className="absolute inset-0 bg-fashion_pink/10 rounded-md"></div>
                            )}
                            
                            {/* Progress bar fill */}
                            {hasVoted && (
                                <div 
                                    className="absolute inset-0 bg-fashion_pink/30 rounded-md transition-all duration-500"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            )}
                            
                            {/* Content */}
                            <div className="relative z-10 flex items-center justify-between">
                                <span className={`font-fira-code text-xs ${
                                    hasVoted ? 'text-black dark:text-white' : 'text-gray-800 dark:text-pewter'
                                }`}>
                                    {option.text}
                                </span>
                                
                                {hasVoted && (
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faChartBar} className="text-fashion_pink text-xs" />
                                        <span className="text-fashion_pink font-fira-code font-bold text-xs">
                                            {percentage}%
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Status */}
            <div className="mt-3 pt-2 border-t border-chrome/20">
                <div className="flex items-center justify-between">
                    <span className={`text-xs font-fira-code ${
                        isActive ? 'text-fashion_pink' : 'text-chrome'
                    }`}>
                        {isActive ? 'Active' : 'Closed'}
                    </span>
                    {hasVoted && (
                        <span className="text-neon_purple text-xs font-fira-code">
                            ✓ Voted
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MicroPoll; 