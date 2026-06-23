import { useState } from "react";

const CORRECT_PATTERN = "0-1-2-5-8";

export default function PatternUnlock({ unlock }) {
    const [pattern, setPattern] = useState([]);
    const [dragging, setDragging] = useState(false);

    const addPoint = (id) => {
        if (pattern.includes(id)) return;

        setPattern((prev) => [...prev, id]);
    };

    const handleMouseDown = (id) => {
        setPattern([id]);
        setDragging(true);
    };

    const handleMouseEnter = (id) => {
        if (!dragging) return;
        addPoint(id);
    };

    const handleMouseUp = () => {
        setDragging(false);

        const finalPattern = pattern.join("-");

        if (finalPattern === CORRECT_PATTERN) {
            unlock();
        } else {
            setTimeout(() => {
                setPattern([]);
            }, 300);
        }
    };

    return (
        <div
            className="pattern-overlay"
            onMouseUp={handleMouseUp}
        >
            <div className="pattern-grid">
                {[...Array(9)].map((_, index) => (
                    <div
                        key={index}
                        className={`pattern-dot ${pattern.includes(index)
                                ? "active"
                                : ""
                            }`}
                        onMouseDown={() =>
                            handleMouseDown(index)
                        }
                        onMouseEnter={() =>
                            handleMouseEnter(index)
                        }
                    />
                ))}
            </div>
        </div>
    );
}