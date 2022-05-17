import React, { useEffect } from "react";
import styles from "./style.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bgSvg from "./bg.svg";

function SecondDiv() {
  const ParticleRef = React.useRef(null);
  const ContainerRf = React.useRef(null);
  const BgRef = React.useRef(null);

  const [wave, setWave] = React.useState({
    x: 0,
    y: 0,
  });

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
    console.log(container.canvas.context.canvas);
    console.log(container.canvas.context.canvas.style);
    container.canvas.context.canvas.style.position = "relative";
  };

  useEffect(() => {
    if (ParticleRef) {
      console.log(ParticleRef.current);
    }
  }, [ParticleRef]);

  const _wave = () => {
    const rect = ContainerRf.current.getBoundingClientRect();
    console.log(rect);

    const rectBg = BgRef.current.getBoundingClientRect();

    setWave({
      x: rect.x,
      y: rect.height * 2 - rectBg.height,
    });
  };

  useEffect(() => {
    if (ContainerRf && BgRef) {
      _wave();
    }
  }, [ContainerRf]);

  return (
    <React.Fragment>
      <img
        src={bgSvg}
        alt="bg"
        className="absolute z-50  transition-all"
        ref={BgRef}
        style={{
          top: wave.y,
          left: wave.x,
        }}
      />
      <div id="container" className={styles.secondDiv} ref={ContainerRf}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
              position: "absolute",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          height="100vh"
          style={{
            position: "relative",
            height: "100vh",
            zIndex: -1,
          }}
          fullScreen={{
            enable: false,
            zIndex: 0,
          }}
          ref={ParticleRef}
          canvasClassName={styles.canvas}
        />
        <div id="your-div" className="flex w-full p-5 h-full">
          <div className="bg-white/90 h-32 flex justify-center items-center p-10 rounded-lg shadow-2xl">
            <h1 className="text-5xl">SecondDiv</h1>
          </div>
          <div className="flex-grow flex flex-col p-20 bg-white/10 rounded-md justify-center items-center m-10">
            <h1 className="w-full text-5xl my-3">Heading</h1>
            <p className="p-5 h-full text-base">
              Incididunt nostrud culpa ad labore exercitation ipsum adipisicing
              duis eu duis veniam. Exercitation officia proident ex do qui eu
              aute. Reprehenderit et elit aute qui mollit non aute velit nostrud
              est elit. Ea sint adipisicing esse irure sit occaecat
              reprehenderit non nisi qui laboris reprehenderit irure ea. Laborum
              minim magna esse deserunt magna dolore qui mollit enim ipsum minim
              incididunt. Ex exercitation occaecat ipsum cupidatat dolore
              cupidatat sit nulla mollit. Est esse in magna veniam ipsum et.
              Anim consequat tempor labore pariatur ad amet consectetur. Do esse
              ad fugiat elit labore officia. Incididunt minim exercitation ex
              velit laborum laborum incididunt elit ipsum amet quis. Elit
              adipisicing ut nisi enim id pariatur. Adipisicing consequat do do
              exercitation esse ea est. Tempor sunt qui eiusmod velit aute quis
              irure ex velit aliquip et magna ea. Esse anim duis minim non anim.
              In ex ad excepteur ad. Non qui cillum sunt laborum. Ut laborum est
              mollit minim eu ullamco consequat Lorem elit. Elit irure velit ad
              ullamco culpa amet magna. Commodo aliquip sit excepteur minim
              officia. Aute enim veniam voluptate id duis velit commodo sint.
              Esse do sunt cupidatat pariatur et est nisi amet magna nostrud
              nostrud incididunt fugiat non.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SecondDiv;
