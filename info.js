// Textos i fotos dels popups "about me" i "contacte".
// A "media" hi poses les fotos o vídeos de l'esquerra, en ordre (igual que a projects.js).
window.infoPanels = {
  about: {
    media: ["media/Aboutme_2.webp","media/Aboutme_3.webp","media/Aboutme_4.webp","media/Aboutme_5.webp","media/Aboutme_6.webp"],
    text: {
      ca: {
        title: "about me",
        category: "sobre mi",
        description: "Holaaa, soc l’Izan. \n\nDissenyador gràfic a Vic, Barcelona, centrat en direcció creativa i branding. Em vaig graduar el 2026 i les pràctiques em van confirmar el que ja sospitava: m’encanta crear, i encara més quan serveix per fer realitat les idees d’algú altre. \n\nTracto cada projecte amb una mirada professional i li dono el valor i l’esforç que mereix. I, tot i que el món és cada cop més digital, tinc una debilitat: el disseny editorial. \n\nAbans de dissenyar res, necessito una bona reunió (o un cafè) per entendre el projecte i entendre’t a tu. Així no disparem a l’aire: encertem l’estrella fugaç."
      },
      es: {
        title: "about me",
        category: "sobre mi",
        description: "Holaaa, soy Izan. \n\nDiseñador gráfico en Vic, Barcelona, centrado en dirección creativa y branding. Me gradué en 2026 y las prácticas me confirmaron lo que ya sospechaba: me encanta crear, y aún más cuando sirve para hacer realidad las ideas de otra persona. \n\nTrato cada proyecto con una mirada profesional y le doy el valor y el esfuerzo que merece. Y, aunque el mundo es cada vez más digital, tengo una debilidad: el diseño editorial. \n\nAntes de diseñar nada, necesito una buena reunión (o un café) para entender el proyecto y entenderte a ti. Así no disparamos al aire: le damos a la estrella fugaz."
      },
      en: {
        title: "about me",
        category: "about me",
        description: "Hiii, I’m Izan. \n\nA graphic designer based in Vic (Barcelona), focused on creative direction and branding. I graduated in 2026, and my internship confirmed what I already suspected: I love creating, especially when it helps bring someone else’s ideas to life. \n\nI approach every project with a professional eye and give it the value and effort it deserves. And even though the world is becoming more and more digital, I have a soft spot for editorial design. \n\nBefore designing anything, I need a good meeting (or a coffee) to understand the project, and to understand you. That way we’re not shooting in the dark: we’re hitting the shooting star."
      }
    }
  },
  contact: {
    media: [],
    // Dades dels tres botons de contacte
    links: {
      email: "hello@izan-studio.com",        // el teu correu, p. ex. "hola@domini.com"
      instagram: "izanstudio_",    // només el nom d'usuari, sense @
      whatsapp: "34644442182"      // el número amb prefix i sense espais, p. ex. "34600000000"
    },
    text: {
      ca: {
        title: "contacte",
        category: "contacte",
        description: "Si t'ha agradat o tens algun projecte en ment, podem quedar per prendre un cafè i en parlem bé."
      },
      es: {
        title: "contacto",
        category: "contacto",
        description: "Si te ha gustado o tienes algún proyecto en mente, podemos quedar para tomar un café y lo hablamos con calma."
      },
      en: {
        title: "contact",
        category: "contact",
        description: "If you liked it or have a project in mind, let's grab a coffee and talk it through."
      }
    }
  }
};
