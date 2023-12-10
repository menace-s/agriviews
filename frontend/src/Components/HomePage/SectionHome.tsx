import { useState } from 'react';
import '../../styles/Components/NavBar/SectionHome/style.css'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface welcomeText {
    title: string;
    title2: string;
    title3: string;
    title4: string;
}

const SectionHome = () => {
    const [state] = useState<welcomeText>({
        title: "Bienvenue à vous, ",
        title2: "chez",
        title3: "AgriDigital.",
        title4: "AgriDigital, l'agriculture à l'ère du numérique : ",
    })

    const variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className="top__home">
            <div className="left">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                    className="welcome__texte"
                >
                    <motion.h1 variants={variants} initial="initial" animate="animate">
                        {state.title} <br />
                        {state.title2} <span className="custom">{state.title3}</span>
                    </motion.h1>
                    <motion.p
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        className="para__welcome__text"
                    >
                        {state.title4}
                    </motion.p>

                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        className="text__1"
                    >
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                strings: ["Simplifiez.", " Innovez.", "Réussissez."],
                            }}
                        />
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            className="btn_box"
                        >
                            <Link to="" className="btn">
                                Découvrir
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="right">
                <div className="cadre__photo">
                    <motion.img
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        src="https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"
                        alt="image pade d'accueil"
                    />
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        className="title"
                    >
                        <h3>Soja</h3>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SectionHome
