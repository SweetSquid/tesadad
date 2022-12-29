import React from "react";
import { items } from "./data";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Post({ match }) {
  const { id } = match.params;
  const { category, title, image } = items.find((item) => item.id === id);

  return (
    <AnimatePresence>
      <motion.div className="post">
        <Link to="/">
          <div className="post__back">X</div>
        </Link>
        <motion.img
          className="post__image"
          src={image}
          alt={id}
          layoutId={`post-image-${id}`}
        />
        <div className="post__data">
          <motion.div className="post__title" layoutId={`post-title-${id}`}>
            {title}
          </motion.div>
          <div className="post__category">{category}</div>
        </div>
        <div className="post__text">
          <LoremIpsum
            p={20}
            avgWordsPerSentence={6}
            avgSentencesPerParagraph={4}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
