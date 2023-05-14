import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Animation({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function checkPosition() {
            const elementPadding = parseInt(getComputedStyle(ref.current).paddingTop);
            const elementTop = ref.current.getBoundingClientRect().top + elementPadding;
            const elementBottom = ref.current.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            const topThreshold = 0;
            const bottomThreshold = windowHeight;

            if (elementTop < bottomThreshold && elementBottom > topThreshold) {
                setIsVisible(true);
            }
        }

        window.addEventListener("scroll", checkPosition);
        checkPosition();

        return () => window.removeEventListener("scroll", checkPosition);
    }, []);

    return (
        <div ref={ref}>
            <motion.div initial={{ opacity: 0, y: 150 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} transition={{ duration: 2 }}>
                {children}
            </motion.div>
        </div>
    );
}
