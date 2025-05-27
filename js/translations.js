i18next.use(i18nextBrowserLanguageDetector).init(
  {
    resources: {
      en: {
        translation: {
          header: {
            p1: 'About',
            p2: 'Services',
            p3: 'Sectors',
            p4: 'Logistics network',
            p5: 'Contact',
            p6: '/images/flags/es.png',
            p7: 'ES',
          },
          about: {
            p1: 'Your Trusted Logistics Partner',
            p2: '5 years of experience',
            p3: `as <u>Logística Integral</u>`,
            p4: 'A long career',
            p5: 'in the <u>machinery industry</u>',
            p6: 'With more than',
            p7: 'of logistic area to serve middle east and central asia with a total...',
            p8: 'Agility',
            p9: 'Transparency',
            p10: 'Solvency',
          },
          services: {
            p1: 'Services',
            p2: 'We can help you with:',
            p3: 'Electronic trading',
            p4: 'Specialists in Electronic Trading: IR (Inspection Report), DIR (Deep Inspection Report), On Hold, Release…',
            p5: 'Collections at source',
            p6: 'Dedicated transports',
            p7: 'Groupages',
            p8: 'Custody',
            p9: 'Special insurance',
            p10: 'GLS Agency',
            p11: 'We are a GLS Agency for the distribution of National and European parcels.',
          },
          sectors: {
            p1: 'Sectors',
            p2: 'Specialists in services for:',
            p3: 'Electronics',
            p4: 'Logistic',
            p5: 'Spare parts and Vechichles',
            p6: 'Fashion',
            p7: 'Office supplies',
            p8: 'Industrial security',
            p9: 'Consumables',
            p10: 'And many more',
          },
          network: {
            p1: 'Logistics network',
            p2: 'More than 7000 m2 at your service',
            p3: 'We have two logistics hubs perfectly connected with the Canada, UAE, China and the rest of Central Asia',
            p4: '1000 m2 in the Dubai',
            p5: '2000 m2 in the China.',
            p6: 'Also a growing network of partners in Tajikistan, Uzbekistan, Kazakhstan, Hong Kong',
            p7: '4000 m2 in Central Asia (Turkmenistan)',
          },
          contact: {
            p1: 'Contact',
            p2: 'We can help you, let’s talk!',
            p3: 'Name',
            p4: 'Company',
            p5: 'Email',
            p6: 'Phone',
            p7: 'Comments',
            p8: `I have read and accept the <a href="/aalogistrade_terms_and_conditions_updated.pdf" target="_blank">Terms and conditions</a>`,
            p9: 'Send',
          },
          footer: {
            p1: `© 2025 All rights reserved | <a href="/aalogistrade_terms_and_conditions_updated.pdf" target="_blank">Terms and conditions</a>`,
            p2: `Created By <a target="_blank" href="https://github.com/Hyzyr/">Hyzyr</a>`,
          },
        },
      },
      es: {
        translation: {
          header: {
            p1: 'Nosotros',
            p2: 'Servicios',
            p3: 'Sectores',
            p4: 'Red logística',
            p5: 'Contacto',
            p6: '/images/flags/us.png',
            p7: 'US',
          },
          about: {
            p1: 'Tu logística fiable',
            p2: '25 años de experiencia',
            p3: `cómo<u>Logística Integral</u>`,
            p4: 'Amplia trayectoria',
            p5: 'en el sector de la <u>Electrónica</u>',
            p6: 'Con más de',
            p7: 'de superficie logística para prestar servicio a España y Europa con total...',
            p8: 'Agilidad',
            p9: 'Transparencia',
            p10: 'Solvencia',
          },
          services: {
            p1: 'Servicios',
            p2: 'Cuenta con nosotros si necesitas:',
            p3: 'Electronic trading',
            p4: 'Especialistas en Electronic Trading: IR (Inspection Report), DIR (Deep Inspection Report), On Hold, Release…',
            p5: 'Recogidas en origen',
            p6: 'Transportes dedicados',
            p7: 'Grupajes',
            p8: 'Custodia',
            p9: 'Seguro especial',
            p10: 'Agencia GLS',
            p11: 'Somos Agencia GLS para la distribución de paquetería Nacional y Europea',
          },
          sectors: {
            p1: 'Sectores',
            p2: 'Especialistas en servicios para:',
            p3: 'Electrónica',
            p4: 'Cosmética',
            p5: 'Vinos',
            p6: 'Moda',
            p7: 'Materiales de oficina',
            p8: 'Seguridad industrial',
            p9: 'Consumibles',
            p10: 'Y muchos otros',
          },
          network: {
            p1: 'Red logística',
            p2: 'Más de 16.000 m2 a tu servicio',
            p3: 'Contamos con dos núcleos logísticos perfectamente conectados con el norte, centro y sur de España y con el resto de Europa:',
            p4: '10.000 m2 en la zona metropolitana de Barcelona',
            p5: '6.500 m2 en Coslada, Madrid.',
            p6: 'También con una creciente red de partners en Badajoz, Portugal y Países Bajos.',
            p7: '4000 m2 in Central Asia (Turkmenistan)',
          },
          contact: {
            p1: 'Contacto',
            p2: '¿Podemos ayudarte? ¡Hablemos!',
            p3: 'Nombre y apellidos',
            p4: 'Empresa',
            p5: 'Email',
            p6: 'Teléfono',
            p7: 'Comentarios',
            p8: `He leído y acepto las <a href="/aalogistrade_terms_and_conditions_updated.pdf" target="_blank">condiciones legales.</a>`,
            p9: 'Enviar',
          },
          footer: {
            p1: `© 2025 Todos los derechos reservados | <a href="/aalogistrade_terms_and_conditions_updated.pdf" target="_blank">Nota legal</a> `,
            p2: `Created By <a target="_blank" href="https://github.com/Hyzyr/">Hyzyr</a>`,
          },
        },
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'navigator'],
      caches: [],
    },
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    if (element.tagName === 'INPUT') {
      element.placeholder = i18next.t(element.getAttribute('data-i18n'));
    } else if (element.tagName === 'TEXTAREA') {
      element.placeholder = i18next.t(element.getAttribute('data-i18n'));
    } else if (element.tagName === 'IMG') {
      element.setAttribute('src', i18next.t(element.getAttribute('data-i18n')));
    } else {
      element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem('userLanguage', lang);
}

function getLanguage() {
  return localStorage.getItem('userLanguage');
}

const languageButton = document.getElementById('languageButton');

if (languageButton) {
  languageButton.addEventListener('click', () => {
    let newLanguage = 'es';

    if (i18next.language === 'es') {
      newLanguage = 'en';
      setLanguage(newLanguage);
    } else {
      newLanguage = 'es';
      setLanguage(newLanguage);
    }

    i18next.changeLanguage(newLanguage, () => {
      updateContent();
    });

    console.log(getLanguage());
  });
}
