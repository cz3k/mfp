import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "🪴 Musik für Pflanzen",
  description: "Experimentelle Kleingartenkonzerte in Dresden",
  appearance: 'dark',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' }
    ],
    search: {
      provider: 'local'
    },
    outline: false,
    sidebar: [
      {
        text: '2024',
        items: [
          { text: '17 - Jonas Gerigk', link: '/240613' },
          { text: '16 - Francesco Fonassi', link: '/240516' }
        ]
      },
      {
        text: '2023',
        items: [
          { text: '15 - baby_sel_1001 | hagoromo', link: '/230914' },
          { text: '14 - Philipp Matalla | Ann-Marie Najderek & Ludens', link: '/230824' },
          { text: '13 - Bronko Taubenheim | Steve Osten', link: '/230713' },
          { text: '12 - Edflix & chill', link: '/230622' },
          { text: '11 - low end | DJ Global Flex', link: '/230601' },
          { text: '10 - Shannon Soundquist | Nimasterblaster', link: '/230511' }
        ]
      },
      {
        text: '2022',
        items: [
          { text: '09 - Drone Special', link: '/220915' },
          { text: '08 - Drone Operatør | WOSTO', link: '/220901' },
          { text: '07 - ghostdog & störenfried', link: '/220818' },
          { text: '06 - Electric Evelyn', link: '/220804' },
          { text: '05 - Houschyar | Eylül Deniz', link: '/220721' },
          { text: '04 - SHIKOBA', link: '/220622' },
          { text: '03 - Spiritczualic Enhancement Center', link: '/220610' },
          { text: '02 - HALLO:Radio', link: '/220609' },
          { text: '01 - kühltrans & nagel', link: '/220525' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><title>Telegram Channel</title><path d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z"/></svg>'
        },
        link: 'https://t.me/+L-Zwbj1SrWNhY2Ji',
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>E-Mail</title><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>'
        },
        link: 'mailto:mail@musikfuerpflanzen.de',
      },
      { icon: 'github', link: 'https://github.com/cz3k/mfp' }

    ]
  }
})
