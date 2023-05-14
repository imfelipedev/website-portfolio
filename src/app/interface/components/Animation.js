import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function Animation({ children }) {
    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 1.5 }}
            style={{ minHeight: "100px" }} // Define a altura mínima
        >
            {children}
        </motion.div>
    );
}
