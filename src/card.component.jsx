import React from "react";
import { motion } from "framer-motion";

export default function Card({ id, image, title }) {
  return (
    <motion.div className="card" layoutId={`post-${id}`}>
      <motion.img
        className="card__image"
        src={image}
        alt={id}
        layoutId={`post-image-${id}`}
      />
      <motion.div className="card__title" layoutId={`post-title-${id}`}>
        {title}
      </motion.div>
    </motion.div>
  );
}
