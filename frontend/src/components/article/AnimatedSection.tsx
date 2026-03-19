import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function AnimatedSection({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;