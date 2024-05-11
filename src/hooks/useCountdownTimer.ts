import { useCallback, useRef, useState, useEffect } from "react";

const useCountdownTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<number | null>(null);

    const startCountdown = useCallback(() => {
        console.log("Starting countdown...");

        intervalRef.current = window.setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);
    }, []);

    const resetCountdown = useCallback(() => {
        console.log("Resetting countdown...");

        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        if(!timeLeft && intervalRef.current){
            console.log("clearing timer...")

            clearInterval(intervalRef.current)
        }
    }, [timeLeft, intervalRef])

    return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;
