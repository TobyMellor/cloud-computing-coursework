import { deindent } from './test-utils';

export default {
  simple: {
    mapper: {
      testInputLines: deindent([
        'the quick brown fox jumps over the lazy dog race care',
        'seventeen sixteen fifteen thirteen twelve eleven ten nine',
        'eight seven six five four three two one zero',
      ]),
      expectedOutputLines: deindent([
        `
          eht\tthe
          cikqu\tquick
          bnorw\tbrown
          fox\tfox
          jmpsu\tjumps
          eorv\tover
          eht\tthe
          alyz\tlazy
          dgo\tdog
          acer\trace
          acer\tcare
        `,
        `
          eeeennstv\tseventeen
          eeinstx\tsixteen
          eeffint\tfifteen
          eehinrtt\tthirteen
          eeltvw\ttwelve
          eeelnv\televen
          ent\tten
          einn\tnine
        `,
        `
          eghit\teight
          eensv\tseven
          isx\tsix
          efiv\tfive
          foru\tfour
          eehrt\tthree
          otw\ttwo
          eno\tone
          eorz\tzero
        `,
      ]),
    },
  },
  advanced: {
    mapper: {
      testInputLines: deindent([
        'rAcE caRe',
        'care something another word',
        'testing nice one okay! there!',
        'e-mail one two three email',
        'eamIl four five six',
        'dog--god',
        'ogd dgo test',
        '|Station|Karasjok|Sodankyla| Kew(19, 12).',
        '[eBook',
        '<nice> one',
      ]),
      expectedOutputLines: deindent([
        `
          acer\trAcE
          acer\tcaRe
        `,
        `
          acer\tcare
          eghimnost\tsomething
          aehnort\tanother
          dorw\tword
        `,
        `
          eginstt\ttesting
          cein\tnice
          eno\tone
          akoy\tokay
          eehrt\tthere
        `,
        `
          aeilm\te-mail
          eno\tone
          otw\ttwo
          eehrt\tthree
          aeilm\temail
        `,
        `
          aeilm\teamIl
          foru\tfour
          efiv\tfive
          isx\tsix
        `,
        `
          dgo\tdog
          dgo\tgod
        `,
        `
          dgo\togd
          dgo\tdgo
          estt\ttest
        `,
        `
          ainostt\tStation
          aajkkors\tKarasjok
          aadklnosy\tSodankyla
          ekw\tKew
        `,
        `
          bekoo\teBook
        `,
        `
          cein\tnice
          eno\tone
        `,
      ]),
    },
  },
  realSample: {
    mapper: {
      testInputLines: deindent([
        //
      ]),
      expectedOutputLines: deindent([
        //
      ]),
    },
  },
};
