import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id="projects" className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: "translateY(-30px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0px)", opacity: 100 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.39, 0.21, 0.12, 0.96],
          }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://danzcloud.xyz"
            title="DanzCloud"
            description="DanzCloud is a project for managing virtual machines using LibVirt, Proxmox and Virtualizor. My first goal in creating this project was to manage every VPS that I sell."
            image="https://media.discordapp.net/attachments/806853400456986688/1050798015344025690/Screenshot_31.png?ex=66c2bda9&is=66c16c29&hm=bbe8eb44a89d52752531e0c0d1a27230bcf6c428ec1b2dcec75fa1ee873c0621&=&format=webp&quality=lossless"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://danzwall.net"
            title="DanzWall"
            description="Buat ngatasin orang iri."
            image="https://media.discordapp.net/attachments/1274753588152766647/1274758672374956053/image.png?ex=66c36b07&is=66c21987&hm=8a22d163b7f546dc4a261070892300339458d39b58131ee684aa3a2c477b10ba&=&format=webp&quality=lossless&width=1248&height=676"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
        </ul>
      </section>
    </>
  );
}
