import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';

const ParticleEngine = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                  detectRetina: false,
                  fpsLimit: 30,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      resize: true
                    }
                  },
                  particles: {
                    color: {
                      value: "#fff"
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 1080
                      },
                      limit: 0,
                      value: 400
                    },
                    opacity: {
                      animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 1,
                        sync: false
                      },
                      random: {
                        enable: true,
                        minimumValue: 0.05
                      },
                      value: 1
                    },
                    shape: {
                      type: "circle"
                    },
                    size: {
                      random: {
                        enable: true,
                        minimumValue: 0.5
                      },
                      value: 1
                    },
                    move: {
                      direction: 'right',
                      speed: 0.10,
                    }
                  }
            }}
        />
    );
}

export default ParticleEngine;