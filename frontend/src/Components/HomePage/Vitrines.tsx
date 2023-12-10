import { Link } from 'react-router-dom';
import '../../styles/Components/NavBar/Vitrines/style.css'
import Notice from './Notice'
import { motion, Variants } from 'framer-motion';
import { VscTriangleRight } from "react-icons/vsc";


const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Vitrines = () => {
    return (
        <motion.div className='vitrine__container'>
            <motion.div
                className="items items-1"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
            >
                <Notice product="Tomates" />
            </motion.div>

            <motion.div
                className="items items-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
            >
                <Notice product="Orange" />
            </motion.div>

            <motion.div
                className="items items-3"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
            >
                <Notice product="Mangue" />
            </motion.div>

            <motion.div
                className="items items-4"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8, type: 'spring', stiffness: 80 }}
            >
                <Notice product="Citron" />
            </motion.div>

            <motion.div
                className="items items-5"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.0, type: 'spring', stiffness: 80 }}
            >
                <Notice product="Oignon" />
            </motion.div>

            <motion.div
                className="items items-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2, type: 'spring', stiffness: 80 }}
            >
                <Notice product="Ananas" />
            </motion.div>
            <motion.div className="links__more__box" variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.4, type: 'spring', stiffness: 80 }}>
                <Link to="" className='links__more'>Voir Plus <VscTriangleRight color="black" /></Link>
            </motion.div>
        </motion.div>
    )
}

export default Vitrines
